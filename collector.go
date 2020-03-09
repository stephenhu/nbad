package main

import (
	"time"

  "github.com/stephenhu/stats"
)


func statsJob() {

	var ticker *time.Ticker

	d, err := time.ParseDuration(config.GameSchedule)

	if err != nil {
		logf("gameJob", err.Error())
		ticker = time.NewTicker(12 * time.Hour)
	} else {
		ticker = time.NewTicker(d)
	}

	for {

		select {
		case <-ticker.C:

			logf("INFO", "updating statistics")

			updateStats()

		}

	}

} // statsJob


func updateStats() {

	stats.RedisStoreTeamStandings(stats.CurrentSeason())
	stats.RedisStoreTeamRanks(stats.CurrentSeason())
	stats.RedisStoreTeamRosters(stats.CurrentSeason())
	stats.RedisStoreProfiles(stats.CurrentSeason())

} // updateStats
