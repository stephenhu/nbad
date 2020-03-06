package main

import (
	"encoding/json"
	//"fmt"
	//"log"
	"net/http"

	"github.com/stephenhu/stats"
	"github.com/gorilla/mux"
)


func seasonApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		vars := mux.Vars(r)

		id := vars["id"]

		var games []string

		if id == "" {
			games = stats.RedisGames(stats.CurrentSeason())
		} else {
			games = stats.RedisGames(id)
		}

		if games == nil {
			w.WriteHeader(http.StatusNotFound)
		} else {

			j, err := json.Marshal(games)

			if err != nil {
				logf("seasonApiHandler", err.Error())
				w.WriteHeader(http.StatusInternalServerError)
			} else {
				w.Header().Set("Content-Type", "application/json")
				w.Write(j)
			}

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // seasonApiHandler
