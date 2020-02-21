package main

import (
	"log"

	"github.com/mmcdole/gofeed"
)

type Article struct {
	Link				string					`json:"link"`
	Title				string					`json:"title"`
	Date        string          `json:"date"`
	Tags        []string        `json:"tags"`
}

var NewsMap = make(map[string][]Article)


func getNews() {

	for _, u := range config.News {

		fp := gofeed.NewParser()

		feed, err := fp.ParseURL(u)

		if err != nil {
			logf("getNews", err.Error())
		} else {

			//NewsMap[feed.link]
			logf("DEBUG", feed.Link)
			log.Printf("%+v", feed)
		}

	}

} // getNews
