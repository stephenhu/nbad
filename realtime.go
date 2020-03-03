package main

import (
	//"log"
  "fmt"
	"time"

	"github.com/stephenhu/stats"
)

type RealTimeGame struct {
	Game            stats.NbaGame   `json:"game"`
	ID							string					`json:"id"`
	Date            string          `json:"date"`
	StopChan        chan bool
	Alarm      			*time.Timer
}

var RtgMap 	= map[string] RealTimeGame{}
var LiveMap = map[string] stats.Game{}


func ticksDiff(t time.Time) time.Duration {

	now := time.Now().UTC()

	delta := t.Sub(now)

	return delta

} // ticksDiff


func nextGames(t time.Time) *stats.NbaScoreboard {

	s := stats.GetSeason(t)

	d := t.Format(stats.DATE_FORMAT)

	for {

		_, ok := stats.GamesMap[d]

		if !ok {

			if s[stats.SEASON_PLAYOFFS_END] < d {
				return nil
			} else {

				score := stats.NbaGetScoreboard(d)

				return score

			}

		}

		d = stats.MoveDay(d, 1)

	}

} // nextGames


func clearLiveMap() {

	for k, _ := range LiveMap {
		delete(LiveMap, k)
	}

} // clearLiveGames


func checkLiveMap() bool {

	for _, g := range LiveMap {

		if g.EndUtc == "" {
			return true
		}

	}

	return false

} // checkLiveMap


func rtgJob() {

	var ticker *time.Ticker

	d, err := time.ParseDuration(config.RealSchedule)

	if err != nil {
		logf("rtgJob", err.Error())
		ticker = time.NewTicker(12 * time.Hour)
	} else {
		ticker = time.NewTicker(d)
	}

	for {

		select {
		case <-chanRtg:
			return
		case <-ticker.C:

			logf("INFO", "checking real time games")

			checkRtg()

		}

	}

} // rtgJob


func checkRtg() {

	now := stats.GetEstNow()

	scoreboard := nextGames(*now)

	if scoreboard != nil {

		for _, game := range scoreboard.Games {

			t, err := time.Parse(time.RFC3339, game.StartUtc)

			if err != nil {
				logf("checkRtg", err.Error())
			} else {

				_, ok := RtgMap[game.ID]

				if ok {
					logf("checkRtg", "Real time game exists.")
				} else {

					delta := ticksDiff(t)

					rtg := RealTimeGame{

						ID:				game.ID,
						Date:     game.Date,
						Game:     game,
						Alarm:    time.NewTimer(delta),
						StopChan: make(chan bool),
					}

					logf("checkRtg", fmt.Sprintf("Added game: %s at %s in %s",
						game.Away.ShortName, game.Home.ShortName, delta.String()))

					RtgMap[rtg.ID] = rtg

					go rtgListener(rtg)

				}

			}

		}

	}

} // checkRtg


func rtgListener(rtg RealTimeGame) {

	for {

		select {
		case <-rtg.Alarm.C:

			logf("INFO", "alarm triggered")
			// hammer time on the boxscore
			rtgPoll(rtg)

			return

		}

	}

} // rtgListener


// Simulates real time boxscore by polling the data every N seconds
func rtgPoll(rtg RealTimeGame) {

	ticker := time.NewTicker(30 * time.Second)

	for {

		select {
		case <-ticker.C:

			box := stats.NbaGetBoxscore(rtg.Game.Date, rtg.Game.ID)

			game := stats.ConvBoxscore(box)

			if game != nil {

				LiveMap[rtg.Game.ID] = *game

				if box.EndUtc != "" {

					delete(RtgMap, box.ID)

					logf("rtgPoll", fmt.Sprintf("Game ended: %s at %s", game.Away.Name,
						game.Home.Name))

					stats.NbaStoreGame(rtg.Game.Date, rtg.Game.ID)

					return

				}

			}

		}

	}

} // rtgPoll
