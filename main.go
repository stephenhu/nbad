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

type Config struct {
	Store						Service				`json:"redis"`
	Dashboard       Service       `json:"dashboard"`
	News            []string      `json:"news"`
	Players         []string			`json:"players"`
	Teams           []string      `json:"teams"`
	Filters         Filter      	`json:"filters"`
}

var (
	conf 					= flag.String("conf", APP_CONFIG, "config file path")
	download			= flag.Bool("download", false, "download NBA data")
)

var config Config


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
	router.HandleFunc("/games/{date:[0-9]+}/{id:[a-zA-Z.]+}", gameHandler)
	router.HandleFunc("/players", playerHandler)
	router.HandleFunc("/teams", teamHandler)

	router.NotFoundHandler = http.HandlerFunc(notFoundHandler)


	router.HandleFunc("/api/follows", followApiHandler)
	router.HandleFunc("/api/games/{date:[0-9]+}/teams/{id:[a-z]+}", gameApiHandler)
	router.HandleFunc("/api/news", newsApiHandler)
	router.HandleFunc("/api/players", playerApiHandler)
	router.HandleFunc("/api/players/{name:[a-zA-Z]+}", playerApiHandler)
	router.HandleFunc("/api/scores", scoreApiHandler)
	router.HandleFunc("/api/teams", teamApiHandler)
	router.HandleFunc("/api/teams/{name:[a-zA-Z]+}", teamApiHandler)

	return router

} // initRoutes


func main() {

	flag.Parse()

	parseConfig()

	if *download {

		log.Println(fmt.Sprintf("%s v%s downloading data...", APP_NAME,
			APP_VERSION))

		downloadData()

	} else {

		log.Println(fmt.Sprintf("%s v%s loading cache...", APP_NAME, APP_VERSION))

		stats.LoadCache()
		//connectRedis()

		log.Println(fmt.Sprintf("%s v%s loading latest news...", APP_NAME, APP_VERSION))
		getNews()

		go checkDownloads()

		log.Println(fmt.Sprintf("%s v%s starting on %s...", APP_NAME,
			APP_VERSION, addr(config.Dashboard)))

		log.Fatal(http.ListenAndServe(addr(config.Dashboard), initRouter()))

	}

} // main
