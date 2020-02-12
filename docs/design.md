# design

nbad includes a dashboard, storage, and engine for collecting/analyzing data.  
data is pulled from a data source and persisted to json files on the filesystem.

## dashboard

1.  select players and teams to follow
1.  display recent boxscores, stats, and news

## collector

data needs to be collected, should i assume the dataset is pristine and delegate 
this work elsewhere?
## storage

want to hold a modern compendium of all statistics.  store the lowest 
granularity, calculate the rest on the fly.  leverage redis for fast lookups
and counters

key space analysis:

28 teams, 16 players per team, 82 games (~36736 keys per season, not including playoffs)

_players rotate out of the league, free agency, and injuries_

lowest granularity is a set of stats per player per game

```
year.month.day.first.last
year.first.last
year.month.day.team
year.team
```

## analyses

1. season leaders
1. game analysis
1. trends, e.g. last 5 games
1. game predictions, based on history, opponent