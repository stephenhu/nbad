package main

import (
	"encoding/json"
	//"fmt"
	//"log"
	"net/http"

	"github.com/stephenhu/stats"
)


func scoreApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		//d := stats.LastDownload()

		d := stats.RedisLastGame()

		games := stats.RedisGetDay(d)

		j, err := json.Marshal(games)

		if err != nil {
			logf("scoreApiHandler", err.Error())
			w.WriteHeader(http.StatusInternalServerError)
		} else {
			w.Header().Set("Content-Type", "application/json")
			w.Write(j)
		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // scoreApiHandler
