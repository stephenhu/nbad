package main

import (
	"encoding/json"
	"net/http"
)

type Follow struct {
	Teams					[]string			`json:"teams"`
	Players				[]string			`json:"players"`
}


func followApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		f := Follow{
			Teams: config.Teams,
			Players: config.Players,
		}

		j, err := json.Marshal(f)

		if err != nil {
			logf("followHandler", err.Error())
			w.WriteHeader(http.StatusInternalServerError)
		} else {
			w.Write(j)
		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // followApiHandler
