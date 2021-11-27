package main

import (
	"net/http"

	//"github.com/gorilla/mux"
	
)


func playerHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:		

		t := renderPage(PAGE_PLAYERS)

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

} // playerHandler
