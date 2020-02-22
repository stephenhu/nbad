package main

import (
	//"fmt"
	//"log"
	"net/http"
	//"sort"

	"github.com/stephenhu/stats"
)


func homeHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		t := renderPage(PAGE_HOME)

		if t == nil {
			w.WriteHeader(http.StatusNotFound)
		} else {

			data := struct {
				Date   string
				Games  []stats.Game
			}{
				Date: simpleDate("20200201"),
				Games: stats.GamesMap["20200201"],
			}

			t.Execute(w, data)

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // homeHandler
