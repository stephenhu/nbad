# collector

collect data from different sources, persist data and load memory

## interface

should this be constantly crawling on its own or should it be triggered by the end
user? if it's constantly crawling then there needs to be some state kept about
which sites it's crawled.  this is a little different from a web index in that
when the season ends, the state doesn't change, so there's no need to continuously
crawl.  in my mind, there should be a massive store to json for all previous
seasons, this can then be loaded into memory either as datastructures or in a
kv store.  that means the collectors should be done in the stats library.


## news

### rss
* https://sports.yahoo.com/nba/rss/
* https://www.espn.com/espn/rss/nba/news
* https://api.foxsports.com/v1/rss?tag=nba
* http://archive.nba.com/rss  # lots of dead links
* http://www.nba.com/rss/nba_rss.xml # this link doesn't work, clippers team rss works
* https://www.nba.com/clippers/rss.xml # use this in the teams view


### non-rss
* https://www.nba.com/news
*