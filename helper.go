package main

import (
	"fmt"
	"html/template"
	"log"
	//"strings"

	"github.com/eknkc/amber"
)


func logf(fn string, msg string) {
	log.Printf("%s: %s", fn, msg)
} // logf


func addr(s Service) string {
	return fmt.Sprintf("%s:%s", s.Host, s.Port)
} // addr


func pathToTemplate(p string) string {
	return fmt.Sprintf("%s/%s", APP_TEMPLATE, INDEX_PAGE)	
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


