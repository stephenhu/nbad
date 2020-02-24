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

	for _, g := range stats.GamesMap[d] {

		f := fmt.Sprintf("%s%s", strings.ToLower(g.Away.Name), strings.ToLower(g.Home.Name))

		if f == id {
			return &g
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
			w.WriteHeader(http.StatusNotFound)
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

			}

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // gameApiHandler
