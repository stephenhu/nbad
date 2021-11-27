package main

import (
	"net/http"

)


func notFoundHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:		

		t := renderPage(PAGE_NOT_FOUND)

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

} // notFoundHandler
