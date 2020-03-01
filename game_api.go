package main

import (
	"encoding/json"
	"fmt"
	//"log"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
	"github.com/stephenhu/stats"
)


func findGame(d string, id string) *stats.Game {

	games, ok := stats.GamesMap[d]

	if ok {

		for _, game := range games {

			f := fmt.Sprintf("%s%s", strings.ToLower(game.Away.Name),
			  strings.ToLower(game.Home.Name))

			if f == id {
				return &game
			}

		}

	}

	return nil

} // findGame


func gameApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		vars := mux.Vars(r)

		date 	:= vars["date"]
		id 		:= vars["id"]

		if date == "" || id == "" {

			if len(LiveMap) == 0 {
				w.WriteHeader(http.StatusNotFound)
			} else {

				j, err := json.Marshal(LiveMap)

				if err != nil {
					logf("gameApiHandler", err.Error())
					w.WriteHeader(http.StatusInternalServerError)
				} else {
					w.Header().Set("Content-Type", "application/json")
					w.Write(j)
				}

			}


		} else {

			g := findGame(date, id)

			if g != nil {

				j, err := json.Marshal(g)

				if err != nil {
					logf("gameApiHandler", err.Error())
					w.WriteHeader(http.StatusInternalServerError)
				} else {
					w.Header().Set("Content-Type", "application/json")
					w.Write(j)
				}

			} else {
				w.WriteHeader(http.StatusNotFound)
			}

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // gameApiHandler
