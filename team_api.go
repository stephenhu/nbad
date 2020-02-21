package main

import (
	//"fmt"
	//"log"
	"net/http"

	//"github.com/stephenhu/stats"
)


func teamApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:
	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // teamApiHandler
