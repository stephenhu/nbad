package main

import (
	//"fmt"
	//"log"
	"net/http"

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

			//getNews()

			data := struct {
				Date   string
				Games  []stats.Game
				News   []Article
			}{
				Date: simpleDate("20191028"),
				Games: stats.GamesMap["20191118"],
			}

			t.Execute(w, data)

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // homeHandler
