package main

import (
	"fmt"
	"html/template"
	"log"
	"strconv"
	//"strings"
	"time"

	"github.com/eknkc/amber"
	"github.com/stephenhu/stats"
)


func logf(fn string, msg string) {
	log.Printf("%s: %s", fn, msg)
} // logf


func addr(s Service) string {
	return fmt.Sprintf("%s:%s", s.Host, s.Port)
} // addr


func pathToTemplate(p string) string {
	return fmt.Sprintf("%s/%s", APP_TEMPLATE, p)
} // pathToTemplate


func renderPage(path string) *template.Template {

	compiler := amber.New()

	p := pathToTemplate(path)

	err := compiler.ParseFile(p)

	if err != nil {
		logf("renderPage", err.Error())
		return nil
	} else {

		t, err := compiler.Compile()

		if err != nil {
			logf("renderPage", err.Error())
			return nil
		} else {
			return t
		}

	}

} // renderPage


func simpleDate(d string) string {

	t, err := time.Parse(stats.DATE_FORMAT, d)

	if err != nil {
		logf("simpleDate", err.Error())
		return d
	} else {
		return t.Format(SIMPLE_FORMAT)
	}

} // simpleDate


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
