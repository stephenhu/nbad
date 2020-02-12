package main

import (

  "github.com/stephenhu/stats"
)


func downloadData() {
	
	stats.NbaStoreAll("2015")
	stats.NbaStoreAll("2016")
	stats.NbaStoreAll("2017")
	stats.NbaStoreAll("2018")
	stats.NbaStoreAll("2019")

} // downloadData


func loadCache() {

} // loadCache
