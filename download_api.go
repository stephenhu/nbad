package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/stephenhu/stats"
)

var SyncMap = make(map[string]map[string]time.Time)


func queueSyncGames(s string, days []string) {

	for _, day := range days {

		if SyncMap[s] == nil {
			SyncMap[s] = make(map[string]time.Time)
		}

		SyncMap[s][day] = time.Now()

	}

} // queueSyncGames


func syncGames(id string) {

	m, ok := SyncMap[id]

	if ok {

		for day, _ := range m {

			count := stats.RedisStoreDay(day)

			delete(SyncMap[id], day)

			if count == 0 {
				logf("syncGames", fmt.Sprintf("Download failed for game: %s", day))
			}

		}

		delete(SyncMap, id)

	} else {
		logf("syncGames", "No jobs exist in SyncMap")
	}

} // syncGames


func downloadApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:

		vars := mux.Vars(r)

		id := vars["id"]

		if id != "" {

			// check map

			_, ok := stats.OfficialSeasons[id]

			if ok {

				_, ok := SyncMap[id]

				if ok {
					w.WriteHeader(http.StatusForbidden)
				} else {

					days := stats.RedisSeasonCheck(id)

					queueSyncGames(id, days)

					j, err := json.Marshal(days)

					if err != nil {
						logf("downloadApiHandler", err.Error())
						w.WriteHeader(http.StatusInternalServerError)
					} else {

						go syncGames(id)

						w.Header().Set("Content-Type", "application/json")
						w.Write(j)

					}

				}

			} else {
				w.WriteHeader(http.StatusNotFound)
			}

		} else {

		}

	case http.MethodGet:

		vars := mux.Vars(r)

		id := vars["id"]

		if id == "" {

			all := struct{
				Seasons		map[string][]string			`json:"seasons"`
			}{
				Seasons: make(map[string][]string),
			}

			seasons := stats.RedisSeasons()

			for _, s := range seasons {

				keys := stats.RedisGames(s)

				all.Seasons[s] = keys

			}

			j, err := json.Marshal(all)

			if err != nil {
				logf("downloadApiHandler", err.Error())
				w.WriteHeader(http.StatusInternalServerError)
			} else {
				w.Header().Set("Content-Type", "application/json")
				w.Write(j)
			}

		} else {

			m, ok := SyncMap[id]

			if ok {

				j, err := json.Marshal(m)

				if err != nil {
					logf("downloadApiHandler", err.Error())
					w.WriteHeader(http.StatusInternalServerError)
				} else {
					w.Header().Set("Content-Type", "application/json")
					w.Write(j)
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

} // downloadApiHandler
