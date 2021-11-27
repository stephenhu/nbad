package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/stephenhu/stats"
)

type DownloadedDetail struct {
	Seasons					map[string][]string				`json:"seasons"`
}

type DownloadDetail struct {
	Days		[]string				`json:"days"`
}

var SyncMap = make(map[string]map[string]time.Time)


func queueSyncGames(s string, days []string) {

	for _, day := range days {

		if SyncMap[s] == nil {
			SyncMap[s] = make(map[string]time.Time)
		}

		SyncMap[s][day] = time.Now()

	}

} // queueSyncGames


func syncGames(y string) {

	m, ok := SyncMap[y]

	if ok {

		for day, _ := range m {

			count := stats.RedisStoreDay(day)

			delete(SyncMap[y], day)

			if count == 0 {
				logf("syncGames", fmt.Sprintf("Download failed for game: %s", day))
			}

		}

		delete(SyncMap, y)

	} else {
		logf("syncGames", "No jobs exist in SyncMap")
	}

} // syncGames


func syncPlayers(y string) {

	stats.RedisStorePlayers(y)
	stats.RedisStoreProfiles(y)

} // syncPlayers


func syncTeams(y string) {

	stats.RedisStoreTeamInfo(y)
	stats.RedisStoreTeamRanks(y)
	stats.RedisStoreTeamRosters(y)

} // syncTeams


func downloadApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:

		vars := mux.Vars(r)

		id := vars["id"]

		var year = ""

		if id != "" {
			year = id
		} else {
			year = stats.RedisCurrentSeason()
		}

		_, ok := stats.OfficialSeasons[year]

		if ok {

			_, ok := SyncMap[year]

			if ok {
				w.WriteHeader(http.StatusForbidden)
			} else {

				days := stats.RedisSeasonCheck(year)

				queueSyncGames(year, days)

				j, err := json.Marshal(days)

				if err != nil {
					logf("downloadApiHandler", err.Error())
					w.WriteHeader(http.StatusInternalServerError)
				} else {

					go syncGames(year)
					go syncTeams(year)
					go syncPlayers(year)

					w.Header().Set("Content-Type", "application/json")
					w.Write(j)

				}

			}

		} else {
			w.WriteHeader(http.StatusNotFound)
		}

	case http.MethodGet:

		vars := mux.Vars(r)

		id := vars["id"]

		if id == "" {

			j, err := json.Marshal(SyncMap)

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
