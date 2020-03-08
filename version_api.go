package main

import (
	"encoding/json"
	"net/http"

)

type App struct {
	Version				string					`json:"version"`
	Name          string          `json:"name"`
}

func versionApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		app := App{
			Version:				APP_VERSION,
			Name:           APP_NAME,
		}

		j, err := json.Marshal(app)

		if err != nil {
			logf("versionApiHandler", err.Error())
			w.WriteHeader(http.StatusInternalServerError)
		} else {
			w.Header().Set("Content-Type", "application/json")
			w.Write(j)
		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // versionApiHandler
