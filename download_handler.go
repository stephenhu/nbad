package main

import (
	"fmt"
	"net/http"
	//"strings"

	"github.com/stephenhu/stats"
)


type SeasonGames struct {
	Games					[]string
	Count         string
	Pct						string
}

func downloadHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		t := renderPage(PAGE_DOWNLOADS)

		if t == nil {
			w.WriteHeader(http.StatusNotFound)
		} else {

			seasons := stats.RedisSeasons()

			data := struct {
				Seasons map[string]SeasonGames
				Count int
			}{
				Seasons: make(map[string]SeasonGames),
				Count: len(seasons),
			}

			for _, s := range seasons {

				keys := stats.RedisGames(s)

				data.Seasons[s] = SeasonGames{
					Games: keys,
					Pct: fmt.Sprintf("%1.f", (float32(len(keys))/float32(41*30)*100)),
					Count: fmt.Sprintf("%d of %d", len(keys), (41*30)),
				}

			}

			t.Execute(w, &data)

		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // downloadHandler
