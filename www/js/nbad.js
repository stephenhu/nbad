/* nbad.js */

const F8BLACK         = "rgba(0, 0, 0, 0.8)";
const F8CHARCOAL      = "rgba(38, 40, 42, 0.8)";
const F8BLUE1         = "rgba(12, 34, 65, 0.8)";
const F8BLUE2         = "rgba(23, 64, 139, 0.8)";
const F8BLUE3         = "rgba(3, 145, 198, 0.8)";
const F8BLUE4         = "rgba(8, 114, 225, 0.8)";
const F8BLUE5         = "rgba(1, 247, 247, 0.8)";
const F8GREEN         = "rgba(0, 255, 0, 0.8)";
const F8RED           = "rgba(201, 8, 42, 0.8)";
const F8WHITE         = "rgba(255, 255, 255, 0.8)";

const F1BLACK         = "rgba(0, 0, 0, 0.1)";
const F1CHARCOAL      = "rgba(38, 40, 42, 0.1)";
const F1BLUE1         = "rgba(12, 34, 65, 0.1)";
const F1BLUE2         = "rgba(23, 64, 139, 0.1)";
const F1BLUE3         = "rgba(3, 145, 198, 0.1)";
const F1BLUE4         = "rgba(8, 114, 225, 0.1)";
const F1BLUE5         = "rgba(1, 247, 247, 0.1)";
const F1GREEN         = "rgba(0, 255, 0, 0.1)";
const F1RED           = "rgba(201, 8, 42, 0.1)";
const F1WHITE         = "rgba(255, 255, 255, 0.1)";

const F8WHEEL         = [F8GREEN, F8BLUE4, F8WHITE, F8CHARCOAL,
  F8BLUE2, F8BLUE3, F8BLUE5, F8WHITE];

const F1WHEEL         = [F1GREEN, F1BLUE4, F1WHITE, F1CHARCOAL,
  F1BLUE2, F1BLUE3, F1BLUE5, F1WHITE];

const FADE1           = "0.1";
const FADE8           = "0.8";

const PTS             = "pts";
const FGA             = "fga";
const FGM             = "fgm";
const FG3A            = "fg3a";
const FG3M            = "fg3m";
const FTA             = "fta";
const FTM             = "ftm";
const REB             = "reb";
const AST             = "ast";
const ST              = "st";
const BL              = "b";
const TO              = "to";
const PF              = "f";

const CHART_BAR       = "bar";
const CHART_DOUGHNUT  = "doughnut";
const CHART_2D        = "2d";

const API                     = "http://127.0.0.1:9005/api";
const PLAYERS_API             = API + "/players";
const FAVORITE_PLAYERS_API    = API + "/players?favorite=true";
const TEAMS_API               = API + "/teams";
const FAVORITE_TEAMS_API      = API + "/teams?favorite=true";
const NEWS_API                = API + "/news";
const SCORES_API              = API + "/scores";

const FAV_STATS = {"ppg": "PPG", "rpg": "RPG", "apg": "APG", "spg": "SPG", "bpg": "BPG"};
const FAV_STATS_R1 = {"ppg": "PPG", "rpg": "RPG", "apg": "APG"};
const FAV_STATS_R2 = {"spg": "SPG", "bpg": "BPG"};


function getColors(c, b) {

  if(c > 0) {

  }

} // getColors


function mashName(s) {

  if(s === null || s === "") {
    console.log("Error: empty player name");
  } else {
    s.replace(" ", "");

    return s;
  }

} // mashName


function gamekey(g) {
  return "/games/" + g.date + "/" + g.away.name + "." + g.home.name;
} // gamekey


function playerBasicStats(n, d) {

  var ctx = document.getElementById(n).getContext(CHART_2D);

  var c = new Chart(ctx, {
    type: CHART_DOUGHNUT,
    data: {
      labels: [PTS, REB, AST],
      datasets: [{
        data: d.stats,
        borderColor: [
          F8GREEN,
          F8BLUE4,
          F8WHITE
        ],
        backgroundColor: [
          F1GREEN,
          F1BLUE4,
          F1WHITE
        ],
        hoverBackgroundColor: [
          F8GREEN,
          F8BLUE4,
          F8WHITE
        ],
        hoverBorderColor: [
          F8GREEN,
          F8BLUE4,
          F8WHITE
        ],
        borderWidth: 1,
        fill: true
      }
      ]
    },
    options: {
      title: {
        text: d.name,
        display: true
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      }
    }
  });

} // playerBasicStats


function playerLastGames(n, d) {

  var ctx = document.getElementById(n).getContext(CHART_2D);

  var c = new Chart(ctx, {
    type: CHART_BAR,
    data: {
      labels: d.teams,
      datasets: [{
        label: PTS,
        data: d.points,
        borderColor: [
          F8GREEN,
          F8GREEN,
          F8GREEN,
          F8GREEN,
          F8GREEN
        ],
        backgroundColor: [
          F1GREEN,
          F1GREEN,
          F1GREEN,
          F1GREEN,
          F1GREEN
        ],
        borderWidth: 1,
        fill: true
      },
      {
        label: REB,
        data: d.rebounds,
        borderColor: [
          F8BLUE4,
          F8BLUE4,
          F8BLUE4,
          F8BLUE4,
          F8BLUE4
        ],
        backgroundColor: [
          F1BLUE4,
          F1BLUE4,
          F1BLUE4,
          F1BLUE4,
          F1BLUE4
        ],
        borderWidth: 1,
        fill: true
      },
      {
        label: AST,
        data: d.assists,
        borderColor: [
          F8WHITE,
          F8WHITE,
          F8WHITE,
          F8WHITE,
          F8WHITE
        ],
        backgroundColor: [
          F1WHITE,
          F1WHITE,
          F1WHITE,
          F1WHITE,
          F1WHITE
        ],
        borderWidth: 1,
        fill: true
      }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          stacked: true
        }],
        xAxes: [{
          stacked: true
        }]
      }
    }
  });

} // playerLastGames


function teamComparison(n, d) {

  var ctx = document.getElementById(n).getContext(CHART_2D);

  var c = new Chart(ctx, {
    type: CHART_BAR,
    data: {
      labels: [FGA, FGM, FG3A, FG3M, FTA, FTM, REB, AST, ST, BL, TO, PF],
      datasets: [{
        label: d.away,
        data: d.awayStats,
        backgroundColor: [
          F1BLUE2,
          F1BLUE2,
          F1BLUE2,
          F1BLUE2,
          F1BLUE2,
          F1BLUE2,
          F1BLUE2,
          F1BLUE2,
          F1BLUE2,
          F1BLUE2,
          F1BLUE2,
          F1BLUE2
        ],
        borderColor: [
          F8BLUE2,
          F8BLUE2,
          F8BLUE2,
          F8BLUE2,
          F8BLUE2,
          F8BLUE2,
          F8BLUE2,
          F8BLUE2,
          F8BLUE2,
          F8BLUE2,
          F8BLUE2,
          F8BLUE2
        ],
        hoverBackgroundColor: [
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1
        ],
        hoverBorderColor: [
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1
        ],
        borderWidth: 1,
        fill: true
      },
      {
        label: d.home,
        data: d.homeStats,
        backgroundColor: [
          F1RED,
          F1RED,
          F1RED,
          F1RED,
          F1RED,
          F1RED,
          F1RED,
          F1RED,
          F1RED,
          F1RED,
          F1RED,
          F1RED
        ],
        borderColor: [
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED
        ],
        hoverBackgroundColor: [
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED
        ],
        hoverBorderColor: [
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED
        ],
        borderWidth: 1,
        fill: true
      }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Team comparison"
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 20,
          },
          gridLines: {
            display: false,
          },
          drawBorder: true
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          }
        }]
      }
    }
  });

} // teamComparison


function shotDistribution(n, d) {

  var ctx = document.getElementById(n).getContext(CHART_2D);

  var c = new Chart(ctx, {
    type: CHART_DOUGHNUT,
    data: {
      labels: d.players,
      datasets: [{
        data: d.shots,
        backgroundColor: [
          F1GREEN,
          F1BLUE4,
          F1CHARCOAL,
          F1BLUE2,
          F1BLUE3,
          F1BLUE5,
          F1WHITE
        ],
        borderColor: [
          F8GREEN,
          F8BLUE4,
          F8CHARCOAL,
          F8BLUE2,
          F8BLUE3,
          F8BLUE5,
          F8WHITE
        ],
        hoverBackgroundColor: [
          F8GREEN,
          F8BLUE4,
          F8CHARCOAL,
          F8BLUE2,
          F8BLUE3,
          F8BLUE5,
          F8WHITE
        ],
        hoverBorderColor: [
          F8GREEN,
          F8BLUE4,
          F8CHARCOAL,
          F8BLUE2,
          F8BLUE3,
          F8BLUE5,
          F8WHITE
        ],
        fill: false
      }
      ]
    },
    options: {
      title: {
        text: d.team + " shot distribution",
        display: true
      },
      scales: {
        yAxes: [{
          display: false,
        }],
        xAxes: [{
          display: false,
        }]
      }
    }
  });

} // shotDistribution


function favoriteStatsRows(player, stats) {

  var listGroupH = document.createElement("div");
  listGroupH.className = "list-group list-group-horizontal pt-3"

  for(var key in stats) {

    var listGroup = document.createElement("div");
    listGroup.className = "list-group-item text-center mr-2";

    var num = document.createElement("div");
    num.className = "meter-l";
    num.innerText = player.averages[key]

    var label = document.createElement("small");
    label.className = "meter-sm";
    label.innerText = stats[key];

    listGroup.appendChild(num);
    listGroup.appendChild(label);
    listGroupH.appendChild(listGroup);

  }

  return listGroupH

} // favoriteStatsRows


function favoriteStats(player) {

  var listGroupH = document.createElement("div");
  listGroupH.className = "list-group list-group-horizontal pt-3"

  for(var key in FAV_STATS) {

    var listGroup = document.createElement("div");
    listGroup.className = "list-group-item text-center mr-2";

    var num = document.createElement("div");
    num.className = "meter-l";
    num.innerText = player.averages[key]

    var label = document.createElement("small");
    label.className = "meter-sm";
    label.innerText = FAV_STATS[key];

    listGroup.appendChild(num);
    listGroup.appendChild(label);
    listGroupH.appendChild(listGroup);

  }

  return listGroupH

} // favoriteStats


function favoritePlayerCharts(games, id) {

  var d = {points: [], rebounds: [], assists: [], teams: []};

  for(i = 0; i < games.length; i++) {

    d.points.push(games[i].points);
    d.rebounds.push(games[i].treb);
    d.assists.push(games[i].assists);
    d.teams.push(games[i].opponent);

  }

  playerLastGames(id, d);

} // favoritePlayerCharts


function createScore(game, home) {

  var team = null;

  if(home) {
    team = game.home;
  } else {
    team = game.away;
  }

  var div = document.createElement("div");

  var span1 = document.createElement("span");
  span1.className = "meter-sm blue";
  span1.innerText = team.name;

  var span2 = document.createElement("span");
  span2.className = "meter-l pl-2 float-right";
  span2.innerText = team.score;

  div.appendChild(span1);
  div.appendChild(span2);

  return div;

} // createScore


function setDateHeader(g) {

  if(g.date.length === 8) {

    var fd = g.date.substring(0, 4) + "-" + g.date.substring(4, 6) + "-" + g.date.substring(6, 8);

    var d = new Date(fd);

    var id = document.getElementById("date");

    id.innerText = d.toDateString();

  } else {
    console.log("Invalid date length: " + g.date.length);
  }

} // setDateHeader


function renderFavoritePlayers(players) {

  var id = document.getElementById("players");

  var count = 0;

  for(var key in players) {

    var a           = document.createElement("a");

    if(count === 0) {
      a.className = "list-group-item list-group-item-action rounded mt-1";
    } else {
      a.className = "list-group-item list-group-item-action rounded mt-3";
    }

    a.setAttribute("href", "/players");

    var media       = document.createElement("div");
    media.className = "media";

    var img         = document.createElement("img");
    img.className = "mr-3";
    img.setAttribute("src", players[key].icon);
    img.setAttribute("width", "128");

    var mediaBody   = document.createElement("div");
    mediaBody.className = "media-body";

    var h5          = document.createElement("h5");
    h5.className = "mb-0 blue";
    h5.innerText = key;

    var lgh = favoriteStats(players[key]);

    var canvas = document.createElement("canvas");
    canvas.className = "mt-3";
    canvas.setAttribute("id", mashName(key));

    mediaBody.appendChild(h5);
    mediaBody.appendChild(lgh);
    mediaBody.appendChild(canvas);

    media.appendChild(img);
    media.appendChild(mediaBody);

    a.appendChild(media);

    id.appendChild(a);

    favoritePlayerCharts(players[key].games, mashName(key));

    count = count + 1;

  }

} // renderFavoritePlayers


function renderFavoriteTeams(teams) {

  var id = document.getElementById("teams");

  var count = 0;

  for(var key in teams) {

    var a = document.createElement("a");

    if(count === 0) {
      a.className = "list-group-item list-group-item-action rounded mt-1";
    } else {
      a.className = "list-group-item list-group-item-action rounded mt-3";
    }

    a.setAttribute("href", "/players");

    var media       = document.createElement("div");
    media.className = "media";

    var img         = document.createElement("img");
    img.className = "mr-3";
    img.setAttribute("src", teams[key].icon);
    img.setAttribute("width", "128");

    var mediaBody   = document.createElement("div");
    mediaBody.className = "media-body";

    var h5          = document.createElement("h5");
    h5.className = "mb-0 blue";
    h5.innerText = key;

    var lgh1 = favoriteStatsRows(teams[key], FAV_STATS_R1);
    var lgh2 = favoriteStatsRows(teams[key], FAV_STATS_R2);

    mediaBody.appendChild(h5);
    mediaBody.appendChild(lgh1);
    mediaBody.appendChild(lgh2);

    media.appendChild(img);
    media.appendChild(mediaBody);

    a.appendChild(media);

    id.appendChild(a);

    count = count + 1;

  }

} // renderFavoriteTeams


function renderNews(articles) {

  var id = document.getElementById("news");

  var count = 0;

  for(var i = 0; i < articles.length; i++) {

    var a = document.createElement("a");

    if(count === 0) {
      a.className = "list-group-item list-group-item-action rounded mt-1";
    } else {
      a.className = "list-group-item list-group-item-action rounded mt-3";
    }

    a.setAttribute("href", articles[i].link);

    var div = document.createElement("div");
    div.className = "blue";
    div.innerText = articles[i].title;

    var small = document.createElement("small");
    small.innerText = articles[i].date;

    /*
    var img         = document.createElement("img");
    img.className = "mr-3";
    img.setAttribute("src", teams[key].icon);
    img.setAttribute("width", "128");
    */

    a.appendChild(div);
    a.appendChild(small);

    id.appendChild(a);

    count = count + 1;

  }

} // renderNews


function renderScores(games) {

  if(games === null) {
    return;
  }

  var id = document.getElementById("scores");

  for(var i = 0; i < games.length; i++) {

    if(i === 0) {
      setDateHeader(games[i]);
    }

    var topDiv = document.createElement("div");
    topDiv.className = "list-group-item rounded ml-1";

    var a = document.createElement("a");

    a.className = "list-group-item-action";
    a.setAttribute("href", gamekey(games[i]));

    var div1 = createScore(games[i], false);
    var div2 = createScore(games[i], true);

    a.appendChild(div1);
    a.appendChild(div2);

    topDiv.appendChild(a);

    id.appendChild(topDiv);

  }

} // renderScores


function favoritePlayers() {

  fetch(FAVORITE_PLAYERS_API)
  .then((res) => res.json())
  .then(function(data) {
    renderFavoritePlayers(data);
  }).catch(function(err) {
    console.log(err);
  });

} // favoritePlayers


function favoriteTeams() {

  fetch(FAVORITE_TEAMS_API)
  .then((res) => res.json())
  .then(function(data) {
    renderFavoriteTeams(data);
  }).catch(function(err) {
    console.log(err);
  });

} // favoriteTeams


function getNews() {

  fetch(NEWS_API)
  .then((res) => res.json())
  .then(function(data) {
    renderNews(data);
  }).catch(function(err) {
    console.log(err);
  });

} // getNews


function getScores() {

  fetch(SCORES_API)
  .then((res) => res.json())
  .then(function(data) {
    renderScores(data);
  }).catch(function(err) {
    console.log(err);
  });

} // getScores
