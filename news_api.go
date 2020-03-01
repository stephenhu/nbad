package main

import (
	"encoding/json"
	//"fmt"
	//"log"
	"net/http"
	"sort"
	"strings"
	"time"


	"github.com/mmcdole/gofeed"
)

type Article struct {
	Link				string					`json:"link"`
	Title				string					`json:"title"`
	Date        string          `json:"date"`
	PubTime     time.Time       `json:"pubTime"`
	Image       string          `json:"image"`
	Tags        []string        `json:"tags"`
	Score       int             `json:"score"`
}

var NewsMap = make(map[string]Article)


func newsJob() {

	var ticker *time.Ticker

	d, err := time.ParseDuration(config.NewsSchedule)

	if err != nil {
		logf("newsJob", err.Error())
		ticker = time.NewTicker(1 * time.Hour)
	} else {
		ticker = time.NewTicker(d)
	}

	for {

		select {
		case <-chanNews:
			return
		case <-ticker.C:

			logf("INFO", "checking news")

			getNews()

		}

	}

} // newsJob


func filter(t string) bool {

	if t == "" {
		return false
	}

	lower := strings.ToLower(t)

	for _, f := range config.Filters.Dislike {

		if strings.Contains(lower, strings.ToLower(f)) {
			return true
		}

	}

	return false

} // filter


func getSortedNews() []Article {

	news := []Article{}

	for _, v := range NewsMap {
		news = append(news, v)
	}

	sort.Slice(news, func(i int, j int) bool {
		return news[i].PubTime.After(news[j].PubTime)
	})

	return news

} // getSortedNews


func getNews() {

	for _, u := range config.News {

		fp := gofeed.NewParser()

		feed, err := fp.ParseURL(u)

		if err != nil {
			logf("getNews", err.Error())
		} else {

			for _, item := range feed.Items {

				if !filter(item.Title) {

					var pt time.Time

					t, err := time.Parse(RFC1123P, item.Published)

					if err != nil {
						logf("getNews", err.Error())
					} else {
						pt = t
					}

					NewsMap[item.Link] = Article{
						Title: item.Title,
						Link: item.Link,
						Date: item.Published,
						PubTime: pt,
					}

				}

			}

		}

	}

} // getNews


func newsApiHandler(w http.ResponseWriter, r *http.Request) {

  switch r.Method {
	case http.MethodPut:
	case http.MethodGet:

		articles := getSortedNews()

		// TODO: add limit query param

		j, err := json.Marshal(articles)

		if err != nil {
			logf("newsApiHandler", err.Error())
			w.WriteHeader(http.StatusInternalServerError)
		} else {
			w.Header().Set("Content-Type", "application/json")
			w.Write(j)
		}

	case http.MethodDelete:
	case http.MethodPost:
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

} // newsApiHandler
