package main

import (
	"net/http"

	"github.com/gorilla/mux"

)


func gameHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		vars := mux.Vars(r)

		date := vars["date"]
		id 	 := vars["id"]

		if id == "" || date == "" {
			w.WriteHeader(http.StatusNotFound)
		} else {

			t := renderPage(PAGE_GAMES)

			if t == nil {
				w.WriteHeader(http.StatusNotFound)
			} else {
				t.Execute(w, nil)
			}

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // gameHandler
