package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gomodule/redigo/redis"
	"github.com/gorilla/mux"
)

type Service struct {
	Host						string				`json:"host"`
	Port						string  			`json:"port"`
	Protocol				string				`json:"protocol"`
}

type Config struct {
	Store						Service				`json:"redis"`
	Dashboard       Service       `json:"dashboard"`
}

var (
	conf 					= flag.String("conf", APP_CONFIG, "config file path")
	download			= flag.Bool("download", false, "download NBA data")
)

var config Config
var red redis.Conn


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


func connectRedis() {

	c, err := redis.Dial(config.Store.Protocol, addr(config.Store))

	if err != nil {
		log.Fatal(err)
	}

	defer c.Close()

	red = c

} // connectRedis


func initRouter() *mux.Router {

	router := mux.NewRouter()

	dir := fmt.Sprintf(".%s", APP_WWW)

	router.PathPrefix(APP_WWW).Handler(http.StripPrefix(APP_WWW,
		http.FileServer(http.Dir(dir))))

	router.HandleFunc("/", homeHandler)
	router.HandleFunc("/games/{id:[0-9a-z.]+}", gameHandler)
	router.HandleFunc("/players/{id:[0-9a-z.]+}", playerHandler)
	router.HandleFunc("/teams/{id:[0-9a-z.]+}", teamHandler)

	router.NotFoundHandler = http.HandlerFunc(notFoundHandler)

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

		//connectRedis()

		log.Println(fmt.Sprintf("%s v%s starting on %s...", APP_NAME,
			APP_VERSION, addr(config.Dashboard)))
	
		log.Fatal(http.ListenAndServe(addr(config.Dashboard), initRouter()))

	}

} // main
