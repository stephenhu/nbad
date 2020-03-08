package main

import (
	"encoding/json"
	"fmt"
	//"log"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
	"github.com/stephenhu/stats"
)


type Team struct {
	Games					[]stats.Team			`json:"games"`
	Averages      stats.AdvStats    `json:"averages"`
	Icon          string            `json:"icon"`
	ID            string            `json:"id"`
}

type TeamView struct {
	Ranks 				stats.TeamRanks        	`json:"ranks"`
	Players       []stats.PlayerSeason    `json:"players"`
}


func getTeamLast(n int) map[string]Team {

	favorites := map[string]Team{}

	for _, t := range config.Teams {

		last := stats.LastGamesTeam(n, stats.CurrentSeason(), t)

		as := stats.TeamAverages(last)

		ft := Team{}

		ft.Games 		= last
		ft.Averages	= as

		if strings.ToLower(t) == "nop" {
			ft.Icon     = fmt.Sprintf(stats.ESPN_TEAM_ICON_URL, "no")
		} else {
			ft.Icon     = fmt.Sprintf(stats.ESPN_TEAM_ICON_URL, strings.ToLower(t))
		}



		favorites[t] = ft

	}

	return favorites

} // getTeamLast


func teamApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		vars := mux.Vars(r)

		name := vars["name"]

		if name == "" {

			f := r.FormValue(QUERY_PARAM_FAVORITE)

			if f == "" {
				w.WriteHeader(http.StatusBadRequest)
			} else {

				c := parseCount(r.FormValue(QUERY_PARAM_COUNT))

				if f == STRING_TRUE {

					teams := getTeamLast(c)

					j, err := json.Marshal(teams)

					if err != nil {
						logf("teamApiHandlerHandler", err.Error())
						w.WriteHeader(http.StatusInternalServerError)
					} else {
						w.Header().Set("Content-Type", "application/json")
						w.Write(j)
					}

				}

			}

		} else {

			td := stats.RedisGetTeamData(stats.CurrentSeason(), strings.ToLower(name))

			j, err := json.Marshal(td)

			if err != nil {
				logf("teamApiHandlerHandler", err.Error())
				w.WriteHeader(http.StatusInternalServerError)
			} else {
				w.Header().Set("Content-Type", "application/json")
				w.Write(j)
			}

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // teamApiHandler
