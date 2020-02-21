package main

import (
	"encoding/json"
	"fmt"
	//"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/stephenhu/stats"
)


type Player struct {
	Games					[]stats.Player		`json:"games"`
	Averages      stats.AdvStats    `json:"averages"`
	Icon          string            `json:"icon"`
	ID            string            `json:"id"`
}


func parseCount(s string) int {

	if s == "" {
		return LAST_GAME_COUNT
	} else {

		count, err := strconv.ParseInt(s, 10, 32)

		if err != nil {
			logf("parseCount", err.Error())
			return LAST_GAME_COUNT
		} else {
			return int(count)
		}

	}

} // parseCount


func getPlayerLast(n int) map[string]Player {

	favorites := map[string]Player{}

	for _, p := range config.Players {

		last := stats.LastPlayedGames(n, p)

		as := stats.Averages(last)

		fp := Player{}

		fp.Games 		= last
		fp.Averages	= as
		fp.Icon     = fmt.Sprintf(stats.ESPN_ICON_URL, stats.Icons[p])

		favorites[p] = fp

	}

	return favorites

} // getPlayerLast


func playerApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		vars := mux.Vars(r)

		name := vars["name"]

		if name == "" {

			f := r.FormValue(QUERY_PARAM_FAVORITE)

			c := parseCount(r.FormValue(QUERY_PARAM_COUNT))

			if f == STRING_TRUE {

				players := getPlayerLast(c)

				j, err := json.Marshal(players)

				if err != nil {
					logf("playerHandler", err.Error())
					w.WriteHeader(http.StatusInternalServerError)
				} else {
					w.Header().Set("Content-Type", "application/json")
					w.Write(j)
				}

			} else {

			}

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // playerApiHandler
