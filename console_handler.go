package main

import (
	//"fmt"
	//"log"
	"net/http"

	//"github.com/stephenhu/stats"
)


func consoleHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		t := renderPage(PAGE_CONSOLE)

		if t == nil {
			w.WriteHeader(http.StatusNotFound)
		} else {
			t.Execute(w, nil)
		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // consoleHandler
