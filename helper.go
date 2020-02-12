package main

import (
	"fmt"
	"log"
	"strings"
)


func logf(fn string, msg string) {
	log.Printf("%s: %s", fn, msg)
} // logf


func addr(s Service) string {
	return fmt.Sprintf("%s:%s", s.Host, s.Port)
} // addr


func pathToTemplate(p string) string {

	page := strings.Trim(p, ROOT_PATH)

	if page == EMPTY_PATH {
		return fmt.Sprintf("%s/%s", APP_TEMPLATE, INDEX_PAGE)
	} else {
		return fmt.Sprintf("%%s/s.amber", APP_TEMPLATE, page)
	}
  
} // pathToTemplate
