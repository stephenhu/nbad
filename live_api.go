package main

import (
	"encoding/json"
	//"fmt"
	//"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/stephenhu/stats"
)


func liveApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		d := stats.RedisLastGame()

		if d == "" {
			w.WriteHeader(http.StatusNotFound)
		} else {

			vars := mux.Vars(r)

			id := vars["id"]

			if id == "" {
				w.WriteHeader(http.StatusNotFound)
			} else {

				liveMutex.Lock()
				game, ok := LiveMap[id]
				liveMutex.Unlock()

				if ok {

					j, err := json.Marshal(game)

					if err != nil {
						logf("liveApiHandler", err.Error())
						w.WriteHeader(http.StatusInternalServerError)
					} else {
						w.Header().Set("Content-Type", "application/json")
						w.Write(j)
					}

				} else {
					w.WriteHeader(http.StatusNotFound)
				}

			}

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // liveApiHandler
