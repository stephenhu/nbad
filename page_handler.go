package main

import (
	"net/http"

	"github.com/eknkc/amber"
	//"github.com/gorilla/mux"
	
)


func pageHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:		

		compiler := amber.New()

		p := pathToTemplate(r.URL.Path)
		
		err := compiler.ParseFile(p)

		if err != nil {
			logf("pageHandler", err.Error())
			w.WriteHeader(http.StatusNotFound)
		} else {

			t, err := compiler.Compile()

			if err != nil {
				logf("pageHandler", err.Error())
			} else {
				t.Execute(w, nil)
			}

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // pageHandler
