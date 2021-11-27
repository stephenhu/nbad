# real time game update

real time game information should be stored in a single page by its own, boxscores in the home page
need to be refreshed by the user.

there needs to be a periodic checker for next day's games, this checker will get the start times (est)
for all games, alert worker routines to poll the boxscore api and update ui accordingly.  there needs
to be a way to turn off the worker routines for when the game finishes.


1.  check currently stored data, get the next game date's start game times
1.  need some thread to check when a game starts and then poll the boxscore every n seconds
1.  need a method to find out when a game completes or when to stop the polling, there's an endUtc field that signifies a game that has ended
1.



a set of game timers