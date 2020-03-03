package main

import (
	"time"

  "github.com/stephenhu/stats"
)


func gameJob() {

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

			logf("INFO", "checking last game download")

			if !checkLiveMap() {

				checkDownloads()

				//clearLiveMap()

			}

		}

	}

} // gameJob


func downloadData() {

	stats.NbaStoreAll("2019")

} // downloadData


func checkDownloads() {

	if len(RtgMap) == 0 {

		last := stats.LastDownload()

		stats.NbaStoreFromDay(last)

		//stats.NbaStoreTeamRank()

	}

} // checkDownloads
