package main

import (

  "github.com/stephenhu/stats"
)


func downloadData() {

	stats.NbaStoreAll("2019")

} // downloadData


func checkDownloads() {

	last := stats.LastDownload()

	stats.NbaStoreFromDay(last)

} // checkDownloads
