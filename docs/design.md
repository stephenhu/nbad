# design

nbad includes a dashboard, storage, and engine for collecting/analyzing data.
data is pulled from a data source and persisted to json files on the filesystem.

## dashboard

1.  select players and teams to follow for customized views
1.  display recent boxscores, stats, and news

## views

1.  main view: boxscores
1.  boxscores
1.  player trends
1.  standings
1.  news
1.  leader boards
1.  game analyses


## collector

data needs to be collected, should i assume the dataset is pristine and delegate
this work elsewhere?  this will mostly rely on the stats package to collect and
maintain this information.  it will periodically poll data.

news should be polled more frequently, like every hour or so?  or even during
page refresh.  news should be cached also though for faster response time.

download latest stats can happen daily


## storage

want to hold a modern compendium of all statistics.  store the lowest
granularity, calculate the rest on the fly.  leverage redis for fast lookups
and counters

key space analysis:

30 teams, 16 players per team, 82 games (~36736 keys per season, not including playoffs)

_players rotate out of the league, free agency, and injuries_

lowest granularity data to be stored is a set of game stats per team and player

key | fields | redis structure | comments
--- | --- | --- | ---
2019 | 20201024 = regular, 20200601 = playoff | redis hash map |
20200211 | lalbos = json, clesas = json | redis hash map | game boxscore and play by play
2019:lebronjames | 20200211:lalbos = json, 20200210 = denlal | redis hash map | player games played keys
lebronjames | info = json, 2019 = json, 2018 = json, 2017 = json | redis hash map | player season stats
2019:lal | 20200211 = lalbos | redis hash map | pointer to boxscore
lal | 2019 = json, 2018 = json | redis hash map | team stats
2019:lal:stats | points, rebounds, assists, ... | redis counters |
2019:teams | name = json, ... | redis hash map | team info
2019:teams:stats | name = json, ... | redis hash map | team stats
2019:players | name = json, ... | redis hash map | player info
2019:players:stats | name = json, ... | redis hash map | player stats
2019:standings | team = json | redis hash map | team standings
conf | teams = json, players = json, like = json, dislike = json | redis hash map | settings
seasons | 2019 = time | |


### ingest

these are the things that need


### redis

since our golang structs are quite complicated, do we serialize to json and then store as a string value
or do we take advantage of redis' hash fields?  the nature of nba data doesn't change, especially
for completed game data.  live games are different, and counters like seasonal statistics need to be
updated.


## sync

a deep check for redis data requires looking at every game day and counting the number of games.  a
simple check could be to check for the day itself only, but this might miss some games that are missing
within the day.

each game download is a separate download, many games could require a long sync time so there needs to
be a mechanism to query the status of all the downloads.  what detail does the user require in terms of
sync progress?  maybe the day being downloaded and a simple bool for completed or not?


## headlines

customized set of words to ignore, other words to give more weight.

should sort based on date, show score, provide score

a way to store each link and give a score for analytics.

can update these custom settings on the fly, persist to redis instead of config.

provide a button to give user way to score articles.

2 sets, likes, dislikes

need a way to track when an article's been read

## analyses

1. season leaders
1. game analysis
1. trends, e.g. last 5 games
1. game predictions, based on history, opponent