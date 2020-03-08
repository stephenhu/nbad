package main

import (
	"net/http"
	"strings"

	"github.com/gorilla/mux"
	"github.com/stephenhu/stats"
)


func teamHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		vars := mux.Vars(r)

		id := vars["id"]

		if id == "" {
			w.WriteHeader(http.StatusNotFound)
		} else {

			_, ok := stats.RosterTeams[strings.ToLower(id)]

			if ok {

				t := renderPage(PAGE_TEAMS)

				if t == nil {
					w.WriteHeader(http.StatusNotFound)
				} else {
					t.Execute(w, nil)
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

} // teamHandler
