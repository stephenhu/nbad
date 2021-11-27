package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	//"github.com/gomodule/redigo/redis"
	"github.com/gorilla/mux"
	"github.com/stephenhu/stats"
)

type Service struct {
	Host						string				`json:"host"`
	Port						string  			`json:"port"`
	Protocol				string				`json:"protocol"`
}

type Filter struct {
	Like						[]string			`json:"like"`
	Dislike					[]string			`json:"dislike"`
}

type Collectors struct {
	GameSchedule   	string        `json:"gameSchedule"`
	NewsSchedule		string				`json:"newsSchedule"`
	RealSchedule		string				`json:"realSchedule"`
}

type Config struct {
	Store						Service				`json:"redis"`
	Dashboard       Service       `json:"dashboard"`
	News            []string      `json:"news"`
	Players         []string			`json:"players"`
	Teams           []string      `json:"teams"`
	Filters					Filter      	`json:"filters"`
	Collectors    `json:"collectors"`
}

var (
	conf 					= flag.String("conf", APP_CONFIG, "config file path")
	download			= flag.Bool("download", false, "download NBA data")
)

var config Config

var chanNews 	= make(chan bool)
var chanRtg 	= make(chan bool)


func parseConfig() {

	var f string

	if *conf != "" {
		f = *conf
	} else {
		f = APP_CONFIG
	}

	_, err := os.Stat(f)

	if err != nil || os.IsNotExist(err) {
		log.Fatal(err)
	} else {

		buf, err := ioutil.ReadFile(f)

		if err != nil {
			log.Fatal(err)
		} else {

			err := json.Unmarshal(buf, &config)

			if err != nil {
				log.Fatal(err)
			}

		}

	}

} // parseConfig


func initRouter() *mux.Router {

	router := mux.NewRouter()

	router.PathPrefix(APP_WWW).Handler(http.StripPrefix(APP_WWW,
		http.FileServer(http.Dir(fmt.Sprintf(".%s", APP_WWW)))))

	router.HandleFunc("/", homeHandler)
	router.HandleFunc("/console", consoleHandler)
	router.HandleFunc("/downloads", downloadHandler)
	router.HandleFunc("/games/{date:[0-9]+}/{id:[a-zA-Z]+}", gameHandler)
	router.HandleFunc("/live/{id:[0-9]+}", liveHandler)
	router.HandleFunc("/players/{id:[a-zA-Z.-]+}", playerHandler)
	router.HandleFunc("/teams/{id:[a-zA-Z]+}", teamHandler)

	router.NotFoundHandler = http.HandlerFunc(notFoundHandler)

	router.HandleFunc("/api/downloads", downloadApiHandler)
	router.HandleFunc("/api/downloads/{id:[0-9]+}", downloadApiHandler)
	router.HandleFunc("/api/follows", followApiHandler)
	router.HandleFunc("/api/games", gameApiHandler)
	router.HandleFunc("/api/games/{date:[0-9]+}/teams/{id:[a-z]+}", gameApiHandler)
	router.HandleFunc("/api/live/{id:[0-9]+}", liveApiHandler)
	router.HandleFunc("/api/news", newsApiHandler)
	router.HandleFunc("/api/players", playerApiHandler)
	router.HandleFunc("/api/players/{name:[a-zA-Z]+}", playerApiHandler)
	router.HandleFunc("/api/scores", scoreApiHandler)
	router.HandleFunc("/api/seasons", seasonApiHandler)
	router.HandleFunc("/api/seasons/{id:[0-9]+}", seasonApiHandler)
	router.HandleFunc("/api/standings", standingsApiHandler)
	router.HandleFunc("/api/standings/{id:[0-9]+}", standingsApiHandler)
	router.HandleFunc("/api/teams", teamApiHandler)
	router.HandleFunc("/api/teams/{name:[a-zA-Z]+}", teamApiHandler)
	router.HandleFunc("/api/version", versionApiHandler)

	return router

} // initRoutes


func startJobs() {

	log.Println(fmt.Sprintf("%s v%s connecting to redis...", APP_NAME, APP_VERSION))
	stats.ConnectRedis(config.Store.Protocol, addr(config.Store))

	log.Println(fmt.Sprintf("%s v%s updating statistics...", APP_NAME, APP_VERSION))
	go updateStats()

	log.Println(fmt.Sprintf("%s v%s loading latest news...", APP_NAME, APP_VERSION))
	getNews()

	go checkRtg()

	go newsJob()

	go rtgJob()

	go statsJob()

} // startJobs


func main() {

	flag.Parse()

	parseConfig()

	startJobs()

	log.Println(fmt.Sprintf("%s v%s starting on %s...", APP_NAME,
		APP_VERSION, addr(config.Dashboard)))

	log.Fatal(http.ListenAndServe(addr(config.Dashboard), initRouter()))

} // main
