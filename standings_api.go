package main

import (
	"encoding/json"
	//"fmt"
	//"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/stephenhu/stats"
)


func standingsApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		vars := mux.Vars(r)

		id := vars["id"]

		var season string

		if id == "" {
			season = stats.CurrentSeason()
		} else {
			season = id
		}

		standings := stats.RedisGetTeamStandings(season)

		j, err := json.Marshal(standings)

		if err != nil {
			logf("standingsApiHandler", err.Error())
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

} // standingsApiHandler
