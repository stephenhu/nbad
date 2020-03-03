# keys

1. games
1. players
1. teams


## games

games are the most basic data set which should include play by play information.  games are mapped
via dates, each date should have 1 or more games

* key is based on date in the format: `20200228`
* each date contains multiple games as fields of the form `laldal` which is the 3 letter code for the away and home team (in this respective order) and without spaces
* value for each field is a json structure with the full game stats

## players


