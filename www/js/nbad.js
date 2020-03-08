/* nbad.js */

const F8BLACK         = "rgba(0, 0, 0, 0.8)";
const F8CHARCOAL      = "rgba(38, 40, 42, 0.8)";
const F8BLUE1         = "rgba(12, 34, 65, 0.8)";
const F8BLUE2         = "rgba(23, 64, 139, 0.8)";
const F8BLUE3         = "rgba(3, 145, 198, 0.8)";
const F8BLUE4         = "rgba(8, 114, 225, 0.8)";
const F8BLUE5         = "rgba(1, 247, 247, 0.8)";
const F8BLUE6         = "rgba(26, 55, 79, 0.8)";
const F8BLUE7         = "rgba(1, 33, 60, 0.8)";
const F8BLUE8         = "rgba(4, 110, 200, 0.8)";
const F8GRAY1         = "rgba(94, 115, 131, 0.8)";
const F8GRAY2         = "rgba(56, 69, 78, 0.8)";
const F8GRAY3         = "rgba(28, 34, 39, 0.8)";
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
const F1BLUE6         = "rgba(26, 55, 79, 0.1)";
const F1BLUE7         = "rgba(1, 33, 60, 0.1)";
const F1BLUE8         = "rgba(4, 110, 200, 0.1)";
const F1GRAY1         = "rgba(94, 115, 131, 0.1)";
const F1GRAY2         = "rgba(56, 69, 78, 0.1)";
const F1GRAY3         = "rgba(28, 34, 39, 0.1)";
const F1GREEN         = "rgba(0, 255, 0, 0.1)";
const F1RED           = "rgba(201, 8, 42, 0.1)";
const F1WHITE         = "rgba(255, 255, 255, 0.1)";

const F8WHEEL         = [F8GREEN, F8BLUE4, F8WHITE, F8CHARCOAL,
  F8BLUE2, F8BLUE3, F8BLUE5, F8WHITE];

const F1WHEEL         = [F1GREEN, F1BLUE4, F1WHITE, F1CHARCOAL,
  F1BLUE2, F1BLUE3, F1BLUE5, F1WHITE];

const FADE1           = "0.1";
const FADE8           = "0.8";

const COMPARISON_STATS = ["FGA", "FGM", "3PTA", "3PTM", "FTA", "FTM", "REB",
  "AST", "ST", "BL", "TO", "F"];

const COMPARISON_STATS_BASIC = ["PTS", "REB", "AST"];

const BOXSCORE_FIELDS = ["Player", "Min", "Points", "FG", "3PT", "FT", "Reb", "Ast", "Stl", "Blk", "To", "Pf", "+/-"];

const CHART_BAR       = "bar";
const CHART_DOUGHNUT  = "doughnut";
const CHART_2D        = "2d";
const CHART_LINE      = "line";

const API                     = "http://10.0.1.6:9005/api";
const DOWNLOADS_API           = API + "/downloads";
const GAMES_API               = API + "/games";
const LIVE_API                = API + "/live";
const NEWS_API                = API + "/news";
const PLAYERS_API             = API + "/players";
const FAVORITE_PLAYERS_API    = API + "/players?favorite=true";
const TEAMS_API               = API + "/teams";
const FAVORITE_TEAMS_API      = API + "/teams?favorite=true";
const SCORES_API              = API + "/scores";

const ESPN_TEAM_LOGO          = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/";
const ESPN_24x24              = "&w=24&h=24";
const ESPN_160x220            = "&h=160&w=220&scale=crop";
const ESPN_PLAYER_ICON        = "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/";

const NBA_PLAYER_ICON         = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/";
const PNG_FORMAT              = ".png";

const FAV_STATS = {"ppg": "PPG", "rpg": "RPG", "apg": "APG", "spg": "SPG", "bpg": "BPG"};
const FAV_STATS_R1 = {"ppg": "PPG", "rpg": "RPG", "apg": "APG"};
const FAV_STATS_R2 = {"spg": "SPG", "bpg": "BPG"};

const PERIODS = ["1st", "2nd", "3rd", "4th", "OT"];

const IMONTH = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

const NBA_TEAMS = {
  "atl": "Atlanta Hawks",
  "bkn": "Brooklyn Nets",
  "bos": "Boston Celtics",
  "cha": "Charlotte Hornets",
  "chi": "Chicago Bulls",
  "cle": "Cleveland Cavaliers",
  "dal": "Dallas Mavericks",
  "den": "Denver Nuggets",
  "det": "Detroit Pistons",
  "gsw": "Golden State Warriors",
  "hou": "Houston Rockets",
  "ind": "Indiana Pacers",
  "lac": "Los Angeles Clippers",
  "lal": "Los Angeles Lakers",
  "mem": "Memphis Grizzlies",
  "mia": "Miami Heat",
  "mil": "Milwaukee Bucks",
  "min": "Minnesota Timberwolves",
  "nop": "New Orleans Pelicans",
  "nyk": "New York Knicks",
  "okc": "Oklahoma City Thunder",
  "orl": "Orlando Magic",
  "phi": "Philadelphia 76ers",
  "phx": "Phoenix Suns",
  "por": "Portland Trailblazers",
  "sac": "Sacramento Kings",
  "sas": "San Antonio Spurs",
  "tor": "Toronto Raptors",
  "uta": "Utah Jazz",
  "was": "Washington Wizards"
};

const NBA_TEAM_MISC = {
  "uta": "utah",
  "nop": "no",
}

const MVP         = 1;
const SMVP        = 2;

const BAD         = -1;
const NEUTRAL     = 0;
const GOOD        = 1;

const FGPCT = {
  low: 0.40,
  high: 0.46,
  attempts: 7,
};

const FG3PCT = {
  low: 0.33,
  high: 0.36,
  attempts: 3,
};

const FTPCT = {
  low: 0.75,
  high: 0.85,
  attempts: 3,
};


function rate(m, a, s) {

  if(a != 0 && a >= s.attempts) {

    var pct = m/a;

    if(pct < s.low) {
      return BAD;
    } else if(pct > s.high) {
      return GOOD;
    } else {
      return NEUTRAL;
    }

  } else {
    return NEUTRAL;
  }

} // rate


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
  return "/games/" + g.date + "/" + g.away.name + g.home.name;
} // gamekey


function namekey(n) {

  var str = n.replace(/[\s+.\']|/g, "");

  return str.toLowerCase();

} // namekey


function padInt(i) {

  if(i < 10) {
    return "0" + i;
  } else {
    return i;
  }

} // padInt


function playerBasicStats(n, d) {

  var ctx = document.getElementById(n).getContext(CHART_2D);

  var c = new Chart(ctx, {
    type: CHART_DOUGHNUT,
    data: {
      labels: COMPARISON_STATS_BASIC,
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
        label: "PTS",
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
        label: "REB",
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
        label: "AST",
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
      labels: COMPARISON_STATS,
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
          F1GRAY1,
          F1BLUE1,
          F1GRAY2,
          F1BLUE8,
          F1WHITE
        ],
        borderColor: [
          F8GREEN,
          F8BLUE4,
          F8CHARCOAL,
          F8BLUE2,
          F8BLUE3,
          F8BLUE5,
          F8GRAY1,
          F8BLUE1,
          F8GRAY2,
          F8BLUE8,
          F8WHITE
        ],
        hoverBackgroundColor: [
          F8GREEN,
          F8BLUE4,
          F8CHARCOAL,
          F8BLUE2,
          F8BLUE3,
          F8BLUE5,
          F8GRAY1,
          F8BLUE1,
          F8GRAY2,
          F8BLUE8,
          F8WHITE
        ],
        hoverBorderColor: [
          F8GREEN,
          F8BLUE4,
          F8CHARCOAL,
          F8BLUE2,
          F8BLUE3,
          F8BLUE5,
          F8GRAY1,
          F8BLUE1,
          F8GRAY2,
          F8BLUE8,
          F8WHITE
        ],
        fill: false
      }
      ]
    },
    options: {
      title: {
        text: d.team,
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
    listGroup.className = "list-group-item text-center bg-gray-black mr-2";

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
    listGroup.className = "list-group-item rounded text-center bg-gray-black mr-2";

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


function niceDate(s) {

  if(s.length === 8) {

    var mon  = s.substring(4, 6);
    var day  = s.substring(6, 8);

    return IMONTH[mon] + " " + day;

  } else {
    return s;
  }

} // niceDate


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


function getTopPlayer(p) {

  var mvp  = {
    name: "",
    stats: []
  };

  var ap = 0;

  for(var i = 0; i < p.length; i++) {

    if(p[i].points >= ap) {

      mvp.name  = p[i].name;
      mvp.stats = [p[i].points, p[i].treb, p[i].assists];
      ap = p[i].points;
    }

  }

  return mvp;

} // getTopPlayer


function getSecondPlayer(p, t) {

  var second  = {
    name: "",
    stats: []
  };

  var ap = 0;

  for(var i = 0; i < p.length; i++) {

    if(p[i].name === t.name) {
      continue
    }

    if(p[i].points >= ap) {

      second.name = p[i].name;
      second.stats = [p[i].points, p[i].treb, p[i].assists];
      ap = p[i].points;
    }

  }

  return second;

} // getSecondPlayer


function getShots(p) {

  var ret = {
    team: "",
    players: [],
    shots: []
  }

  for(var i = 0; i < p.length; i++) {
    ret.players.push(p[i].name);
    ret.shots.push(p[i].fga);
  }

  return ret;

} // getShots


function filterTeamName(n) {

  if(n === "uta") {
    return "utah";
  } else if(n === "nop") {
    return "no";
  } else {
    return n;
  }

} // filterTeamName


function setScore(div, g) {

  if(g === null || g === undefined) {
    div.className = "invisible";
  } else {

    div.children[0].setAttribute("href", gamekey(g));

    div.children[0].children[0].children[0].setAttribute("src",
      ESPN_TEAM_LOGO + filterTeamName(g.away.name) + PNG_FORMAT + ESPN_24x24);
    div.children[0].children[0].children[1].innerText = g.away.score;

    div.children[0].children[1].children[0].setAttribute("src",
      ESPN_TEAM_LOGO + filterTeamName(g.home.name) + PNG_FORMAT + ESPN_24x24);
    div.children[0].children[1].children[1].innerText = g.home.score;

  }

} // setScore


function renderFavoritePlayers(players) {

  var id = document.getElementById("players");

  var count = 0;

  for(var key in players) {

    var a = document.createElement("a");

    if(count === 0) {
      a.className = "list-group-item list-group-item-action rounded bg-gray-black mt-1";
    } else {
      a.className = "list-group-item list-group-item-action rounded bg-gray-black mt-3";
    }

    a.setAttribute("href", "/players/" + namekey(key) );

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
      a.className = "list-group-item list-group-item-action rounded bg-gray-black mt-1";
    } else {
      a.className = "list-group-item list-group-item-action rounded bg-gray-black mt-3";
    }

    a.setAttribute("href", "/teams/" + key);

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
      a.className = "list-group-item list-group-item-action rounded bg-gray-black mt-1";
    } else {
      a.className = "list-group-item list-group-item-action rounded bg-gray-black mt-3";
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


function renderLiveScores(games) {

  if(games === null) {
    return;
  }

  var id = document.getElementById("scores");

  var index = 0;

  for(var key in games) {

    if(index < id.children.length) {
      setScore(id.children[index], games[key]);
    }

    index += 1;

  }

} // renderLiveScores


function renderScores(games) {

  if(games === null) {
    return;
  }

  console.log(games.length);

  var id = document.getElementById("scores");

  for(var i = 0; i < id.children.length; i++) {

    if(i > games.length) {
      setScore(id.children[i], null);
    } else {
      setScore(id.children[i], games[i]);
    }

  }


} // renderScores


function renderComparisons(g) {

  var d = {
    away: g.away.name,
    awayStats: [g.away.summary.fga, g.away.summary.fgm, g.away.summary.fg3a,
      g.away.summary.fg3m, g.away.summary.fta, g.away.summary.ftm, g.away.summary.treb,
      g.away.summary.assists, g.away.summary.steals, g.away.summary.blocks, g.away.summary.turnovers,
      g.away.summary.fouls],
    home: g.home.name,
    homeStats: [g.home.summary.fga, g.home.summary.fgm, g.home.summary.fg3a, g.home.summary.fg3m,
      g.home.summary.fta, g.home.summary.ftm, g.home.summary.treb, g.home.summary.assists,
      g.home.summary.steals, g.home.summary.blocks, g.home.summary.turnovers, g.home.summary.fouls]
  }

  teamComparison("comparisons", d);

} // renderComparisons


function renderTop(g) {

  var an = document.getElementById("awaytopname");
  var hn = document.getElementById("hometopname");

  an.innerText = g.away.name;
  hn.innerText = g.home.name;

  var amvp  = getTopPlayer(g.away.players);
  var asmvp = getSecondPlayer(g.away.players, amvp);

  var hmvp  = getTopPlayer(g.home.players);
  var hsmvp = getSecondPlayer(g.home.players, hmvp);

  playerBasicStats("awaytop1", amvp);
  playerBasicStats("awaytop2", asmvp);
  playerBasicStats("hometop1", hmvp);
  playerBasicStats("hometop2", hsmvp);

} // renderTop


function renderShots(g) {

  var as = getShots(g.away.players);
  as.team = g.away.name;

  var hs = getShots(g.home.players);
  hs.team = g.home.name;

  shotDistribution("awayshots", as);
  shotDistribution("homeshots", hs);

} // renderShots


function renderBox(g, home, summary) {

  var average = "text-right";
  var good    = average + " good";
  var bad     = average + " bad";

  var box       = null;
  var players   = null;

  if(home) {
    box = document.getElementById("homebox");

    if(summary) {
      players = [g.home.summary];
    } else {
      players = g.home.players;
    }

  } else {
    box = document.getElementById("awaybox");

    if(summary) {
      players = [g.away.summary];
    } else {
      players = g.away.players;
    }

  }

  for(var i = 0; i < players.length; i++) {

    var tr = document.createElement("tr");

    for(var j = 0; j < BOXSCORE_FIELDS.length; j++) {

      var td = document.createElement("td");

      var f = BOXSCORE_FIELDS[j];

      if(f === "Min") {

        td.className = average;

        if(summary) {
          td.innerText = "-";
        } else {
          td.innerText = players[i].minutes + ":" + padInt(players[i].seconds);
        }

      } else if(f === "Points") {

        if(players[i].points > 17) {
          td.className = good;
        } else {
          td.className = average;
        }

        td.innerText = players[i].points;

      } else if(f === "FG") {

        var p2m = players[i].fgm - players[i].fg3m;
        var p2a = players[i].fga - players[i].fg3a;

        var r = rate(p2m, p2a, FGPCT)

        if(r === GOOD) {
          td.className = good;
        } else if(r === BAD) {
          td.className = bad;
        } else {
          td.className = average;
        }

        td.innerText = p2m + "-" + p2a;

      } else if(f === "3PT") {

        var r = rate(players[i].fg3m, players[i].fg3a, FG3PCT);

        if(r === GOOD) {
          td.className = good;
        } else if(r === BAD) {
          td.className = bad;
        } else {
          td.className = average;
        }

        td.innerText = players[i].fg3m + "-" + players[i].fg3a;

      } else if(f === "FT") {

        var r = rate(players[i].ftm, players[i].fta, FTPCT);

        if(r === GOOD) {
          td.className = good;
        } else if(r === BAD) {
          td.className = bad;
        } else {
          td.className = average;
        }

        td.innerText = players[i].ftm + "-" + players[i].fta;

      } else if(f === "Reb") {

        if(summary) {

          if(players[i].treb > 40) {
            td.className = good;
          } else {
            td.className = average;
          }

        } else {

          if(players[i].treb > 9) {
            td.className = good;
          } else {
            td.className = average;
          }

        }

        td.innerText = players[i].treb;

      } else if(f === "Ast") {

        if(summary) {

          if(players[i].assists > 24) {
            td.className = good;
          } else {
            td.className = average;
          }

        } else {

          if(players[i].assists > 3) {
            td.className = good;
          } else {
            td.className = average;
          }

        }

        td.innerText = players[i].assists;

      } else if(f === "Stl") {

        if(summary) {

          if(players[i].steals > 7) {
            td.className = good;
          } else {
            td.className = average;
          }

        } else {

          if(players[i].steals > 1) {
            td.className = good;
          } else {
            td.className = average;
          }

        }

        td.innerText = players[i].steals;

      } else if(f === "Blk") {

        if(summary) {

          if(players[i].blocks > 7) {
            td.className = good;
          } else {
            td.className = average;
          }

        } else {

          if(players[i].blocks > 2) {
            td.className = good;
          } else {
            td.className = average;
          }

        }

        td.innerText = players[i].blocks;

      } else if(f === "To") {

        td.className = average;

        if(summary) {

          if(players[i].turnovers > 8) {
            td.className = bad;
          } else {
            td.className = average;
          }

        } else {

          if(players[i].turnovers > 2) {
            td.className = bad;
          } else {
            td.className = average;
          }

        }

        td.innerText = players[i].turnovers;

      } else if(f === "Pf") {

        td.className = average;
        td.innerText = players[i].fouls;

      } else if(f === "+/-") {

        if(players[i].plusMinus > 5) {
          td.className = good;
        } else if(players[i].plusMinus < 0) {
          td.className = bad;
        } else {
          td.className = average;
        }

        td.innerText = players[i].plusMinus;

      } else if(f === "Player") {

        if(summary) {
          td.innerText = "Total";
        } else {

          var a = document.createElement("a");
          a.setAttribute("href", "/players/" + namekey(players[i].name));
          a.innerText = players[i].name;
          td.appendChild(a);
          //td.innerText = players[i].name;


        }

      }

      tr.appendChild(td);

    }

    box.appendChild(tr);

  }

} // renderBox


function renderPeriods(g) {

  var id = document.getElementById("periods");

  var div1  = document.createElement("div");
  div1.className = "list-group-item rounded-left active";

  var date  = document.createElement("small");
  date.innerText = niceDate(g.date);

  var awayN = document.createElement("div");
  awayN.innerText = g.away.name;

  var homeN = document.createElement("div");
  homeN.innerText = g.home.name;

  div1.appendChild(date);
  div1.appendChild(awayN);
  div1.appendChild(homeN);

  id.appendChild(div1);

  for(i = 0; i < g.away.periods.length; i++) {

    var div  = document.createElement("div");
    div.className = "list-group-item bg-gray-black";

    var small = document.createElement("small");

    if(i < 4) {
      small.innerText = PERIODS[i];
    } else {
      small.innerText = PERIODS[4] + (i - 3);
    }

    var away = document.createElement("div");
    away.innerText = g.away.periods[i];

    var home = document.createElement("div");
    home.innerText = g.home.periods[i];

    div.appendChild(small);
    div.appendChild(away);
    div.appendChild(home);
    id.appendChild(div);

  }

  var divf  = document.createElement("div");
  divf.className = "list-group-item bg-gray-black";

  var smallf = document.createElement("small");
  smallf.innerText = "F";

  var awayf = document.createElement("div");
  awayf.innerText = g.away.score;

  var homef = document.createElement("div");
  homef.innerText = g.home.score;

  divf.appendChild(smallf);
  divf.appendChild(awayf);
  divf.appendChild(homef);

  id.appendChild(divf);

} // renderPeriods


function renderSummary(g) {

  var summary = document.getElementById("summary");

  summary.innerText = generateSummary(g);

} // renderSummary


function renderTeam(t) {

  console.log(t);

  var logo = document.getElementById("logo");

  var bigStats = document.getElementById("bigstats");

  var smallStats = document.getElementById("smallstats");

  var players = document.getElementById("players");

  var l10 = document.getElementById("last10");

} // renderTeam


function renderGame(g) {

  if(g === null) {
    return;
  }

  renderPeriods(g);
  renderSummary(g);
  renderComparisons(g);
  renderTop(g);
  renderShots(g);
  renderBox(g, false, false);
  renderBox(g, true, false);
  renderBox(g, false, true);
  renderBox(g, true, true);

  var names = document.getElementById("names");
  names.innerText = NBA_TEAMS[g.away.name.toLowerCase()] + " at " + NBA_TEAMS[g.home.name.toLowerCase()];

  var small = document.createElement("small");
  small.className = "pl-2";
  small.innerText = niceDate(g.date);

  names.appendChild(small);

} // renderGame


function renderCareer(data) {

  var career = document.getElementById("career");

  for(var i = 0; i < data.seasons.length + 1; i++) {

    var tr = document.createElement("tr");

    var p0 = document.createElement("td");
    p0.className = "text-right";

    var p1 = document.createElement("td");
    p1.className = "text-right";
    var p2 = document.createElement("td");
    p2.className = "text-right";
    var p3 = document.createElement("td");
    p3.className = "text-right";
    var p4 = document.createElement("td");
    p4.className = "text-right";
    var p5 = document.createElement("td");
    p5.className = "text-right";
    var p6 = document.createElement("td");
    p6.className = "text-right";
    var p7 = document.createElement("td");
    p7.className = "text-right";
    var p8 = document.createElement("td");
    p8.className = "text-right";
    var p9 = document.createElement("td");
    p9.className = "text-right";

    if(i === 0) {

      p0.innerText = "Career";
      p1.innerText = data.career.ppg;
      p2.innerText = data.career.rpg;
      p3.innerText = data.career.apg;
      p4.innerText = data.career.spg;
      p5.innerText = data.career.bpg;
      p6.innerText = data.career.tpg;
      p7.innerText = data.career.fgp + "%";
      p8.innerText = data.career.fg3p + "%";
      p9.innerText = data.career.ftp + "%";

    } else {

      p0.innerText = data.seasons[i-1].seasonId;
      p1.innerText = data.seasons[i-1].summary.ppg;
      p2.innerText = data.seasons[i-1].summary.rpg;
      p3.innerText = data.seasons[i-1].summary.apg;
      p4.innerText = data.seasons[i-1].summary.spg;
      p5.innerText = data.seasons[i-1].summary.bpg;
      p6.innerText = data.seasons[i-1].summary.tpg;
      p7.innerText = data.seasons[i-1].summary.fgp + "%";
      p8.innerText = data.seasons[i-1].summary.fg3p + "%";
      p9.innerText = data.seasons[i-1].summary.ftp + "%";

    }

    tr.appendChild(p0);
    tr.appendChild(p1);
    tr.appendChild(p2);
    tr.appendChild(p3);
    tr.appendChild(p4);
    tr.appendChild(p5);
    tr.appendChild(p6);
    tr.appendChild(p7);
    tr.appendChild(p8);
    tr.appendChild(p9);

    career.appendChild(tr);

  }

} // renderCareer


function renderCareerTotals(data) {

  console.log(data);
  var totals = document.getElementById("totals");

  for(var i = 0; i < data.seasons.length; i++) {

    var tr = document.createElement("tr");

    var p0 = document.createElement("td");
    p0.className = "text-right";
    p0.innerText = data.seasons[i].seasonId;

    var p1 = document.createElement("td");
    p1.className = "text-right";
    p1.innerText = data.seasons[i].summary.played;

    var p2 = document.createElement("td");
    p2.className = "text-right";
    p2.innerText = data.seasons[i].summary.minutes;

    var p3 = document.createElement("td");
    p3.className = "text-right";
    p3.innerText = data.seasons[i].summary.points;

    var p4 = document.createElement("td");
    p4.className = "text-right";
    p4.innerText = data.seasons[i].summary.treb;

    var p5 = document.createElement("td");
    p5.className = "text-right";
    p5.innerText = data.seasons[i].summary.assists;

    var p6 = document.createElement("td");
    p6.className = "text-right";
    p6.innerText = data.seasons[i].summary.steals;

    var p7 = document.createElement("td");
    p7.className = "text-right";
    p7.innerText = data.seasons[i].summary.blocks;

    var p8 = document.createElement("td");
    p8.className = "text-right";
    p8.innerText = data.seasons[i].summary.turnovers;

    var p9 = document.createElement("td");
    p9.className = "text-right";
    p9.innerText = data.seasons[i].summary.fouls;

    tr.appendChild(p0);
    tr.appendChild(p1);
    tr.appendChild(p2);
    tr.appendChild(p3);
    tr.appendChild(p4);
    tr.appendChild(p5);
    tr.appendChild(p6);
    tr.appendChild(p7);
    tr.appendChild(p8);
    tr.appendChild(p9);

    totals.appendChild(tr);

  }

} // renderCareerTotals


function renderCareerChart(data) {

  var ctx = document.getElementById("careerChart").getContext(CHART_2D);

  var stackedLine = new Chart(ctx, {
    type: CHART_BAR,
    data: {
      datasets: [{
        label: "2016",
        data: [18.4, 5.5, 4.3, 3.3, 1.4, 3.0],
        backgroundColor: [
          F1GREEN,
          F1GREEN,
          F1GREEN,
          F1GREEN,
          F1GREEN,
          F1GREEN
        ],
        borderColor: [
          F8GREEN,
          F8GREEN,
          F8GREEN,
          F8GREEN,
          F8GREEN,
          F8GREEN
        ],
        hoverBackgroundColor: [
          F8GREEN,
          F8GREEN,
          F8GREEN,
          F8GREEN,
          F8GREEN,
          F8GREEN
        ],
        borderWidth: 1,
      },
      {
        label: "2017",
        data: [22.0, 4.8, 3.9, 5.1, 1.1, 3.7],
        backgroundColor: [
          F1BLUE1,
          F1BLUE1,
          F1BLUE1,
          F1BLUE1,
          F1BLUE1,
          F1BLUE1
        ],
        borderColor: [
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1
        ],
        hoverBackgroundColor: [
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1,
          F8BLUE1
        ],
        borderWidth: 1,
      },
      {
        label: "2018",
        data: [20.9, 5.7, 6.2, 4.3, 1.4, 2.0],
        backgroundColor: [
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
          F8RED
        ],
        hoverBackgroundColor: [
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED,
          F8RED
        ],
        borderWidth: 1
      },
      {
        label: "2019",
        data: [25.4, 6.8, 3.5, 3.7, 0.9, 3.3],
        backgroundColor: [
          F1WHITE,
          F1WHITE,
          F1WHITE,
          F1WHITE,
          F1WHITE,
          F1WHITE
        ],
        borderColor: [
          F8WHITE,
          F8WHITE,
          F8WHITE,
          F8WHITE,
          F8WHITE,
          F8WHITE
        ],
        hoverBackgroundColor: [
          F8WHITE,
          F8WHITE,
          F8WHITE,
          F8WHITE,
          F8WHITE,
          F8WHITE
        ],
        borderWidth: 1
      }],
      labels: ["Points", "Rebounds", "Assists", "Steals", "Blocks", "Turnovers"]
    },
    options: {
      scales: {
        yAxes: [{
          stacked: false
        }]
      }
    }
  });
} // renderCareerChart


function renderPlayerStats(data) {

  var name = document.getElementById("name");

  name.innerText = data.first + " " + data.last;

  //var team = document.getElementById("team");

  var logo = document.getElementById("logo");

  logo.setAttribute("src", NBA_PLAYER_ICON + data.id + PNG_FORMAT);

  var big = document.getElementById("bigstats");

  big.children[0].children[0].innerText = data.seasonId;
  big.children[1].children[0].innerText = data.latest.ppg;
  big.children[2].children[0].innerText = data.latest.rpg;
  big.children[3].children[0].innerText = data.latest.apg;

  var small = document.getElementById("smallstats");

  small.children[0].children[0].innerText = data.seasonId;
  small.children[1].children[0].innerText = data.latest.mpg;
  small.children[2].children[0].innerText = data.latest.fgp + "%";
  small.children[3].children[0].innerText = data.latest.fg3p + "%";
  small.children[4].children[0].innerText = data.latest.ftp + "%";
  small.children[5].children[0].innerText = data.latest.spg;
  small.children[6].children[0].innerText = data.latest.bpg;
  small.children[7].children[0].innerText = data.latest.tpg;
  small.children[8].children[0].innerText = (data.latest.fouls / data.latest.played).toFixed(1);
  small.children[9].children[0].innerText = "n/a";

  renderCareerChart(data);

  renderCareer(data);

  renderCareerTotals(data);

} // renderPlayerStats


function renderRosterStats(data) {

  var id = document.getElementById("players");

  for(var i = 0; i < data.players.length; i++) {

    var tr = document.createElement("tr");

    var p0 = document.createElement("td");
    p0.className = "text-right";
    p0.innerText = data.players[i].first + " " + data.players[i].last;

    var p1 = document.createElement("td");
    p1.className = "text-right";
    p1.innerText = data.players[i].ppg;

    var p2 = document.createElement("td");
    p2.className = "text-right";
    p2.innerText = data.players[i].rpg;

    var p3 = document.createElement("td");
    p3.className = "text-right";
    p3.innerText = data.players[i].apg;

    var p4 = document.createElement("td");
    p4.className = "text-right";
    p4.innerText = data.players[i].spg;

    var p5 = document.createElement("td");
    p5.className = "text-right";
    p5.innerText = data.players[i].bpg;

    var p6 = document.createElement("td");
    p6.className = "text-right";
    p6.innerText = data.players[i].tpg;

    var p7 = document.createElement("td");
    p7.className = "text-right";
    p7.innerText = data.players[i].fgp + "%";

    var p8 = document.createElement("td");
    p8.className = "text-right";
    p8.innerText = data.players[i].fg3p + "%";

    var p9 = document.createElement("td");
    p9.className = "text-right";
    p9.innerText = data.players[i].ftp + "%";

    tr.appendChild(p0);
    tr.appendChild(p1);
    tr.appendChild(p2);
    tr.appendChild(p3);
    tr.appendChild(p4);
    tr.appendChild(p5);
    tr.appendChild(p6);
    tr.appendChild(p7);
    tr.appendChild(p8);
    tr.appendChild(p9);

    id.appendChild(tr);

  }

} // renderRosterStats


function renderTeamStats(data) {

  var name = document.getElementById("name");

  var teamName = data.name.toLowerCase();

  name.innerText = NBA_TEAMS[teamName];

  var logo = document.getElementById("logo");

  logo.setAttribute("src", ESPN_TEAM_LOGO + data.name + PNG_FORMAT);
  logo.setAttribute("width", "256");

  var big = document.getElementById("bigstats");

  big.children[0].children[1].innerText = data.seasonId;
  big.children[1].children[0].innerText = data.ranks.ppg;
  big.children[2].children[0].innerText = data.ranks.oppg;
  big.children[3].children[0].innerText = "n/a";

  var small = document.getElementById("smallstats");

  small.children[0].children[0].innerText = (data.ranks.fgp * 100).toFixed(1) + "%";
  small.children[1].children[0].innerText = (data.ranks.fg3p * 100).toFixed(1) + "%";
  small.children[2].children[0].innerText = (data.ranks.ftp * 100).toFixed(1) + "%";
  small.children[3].children[0].innerText = data.ranks.trpg;
  small.children[4].children[0].innerText = data.ranks.apg;
  small.children[5].children[0].innerText = data.ranks.spg;
  small.children[6].children[0].innerText = data.ranks.bpg;
  small.children[7].children[0].innerText = data.ranks.tpg;
  small.children[8].children[0].innerText = data.ranks.fpg;

  renderRosterStats(data);

} // renderTeamStats


function renderMiniStats(t, h) {

  var tbody = null;
  var team = null;

  if(h) {
    tbody = document.getElementById("homeStats");
    team = t.home;
  } else {
    tbody = document.getElementById("awayStats");
    team = t.away;
  }

  for(var i = 0; i < t.players.length; i++) {

    var tr = document.createElement("tr");

    var p0 = document.createElement("td");
    p0.setAttribute("href", "/players/" + namekey(t.players[i].name));
    p0.innerText = t.players[i].name;

    var p1 = document.createElement("td");
    p1.innerText = t.players[i].minutes + ":" + padInt(t.players[i].seconds);
    p1.className = "text-right";

    var p2 = document.createElement("td");
    p2.innerText = t.players[i].points;
    p2.className = "text-right";

    var p3 = document.createElement("td");
    p3.innerText = t.players[i].treb;
    p3.className = "text-right";

    var p4 = document.createElement("td");
    p4.innerText = t.players[i].assists;
    p4.className = "text-right";

    var p5 = document.createElement("td");
    p5.innerText = t.players[i].steals;
    p5.className = "text-right";

    var p6 = document.createElement("td");
    p6.innerText = t.players[i].blocks;
    p6.className = "text-right";

    var p7 = document.createElement("td");
    p7.innerText = t.players[i].turnovers;
    p7.className = "text-right";

    var p8 = document.createElement("td");
    p8.innerText = t.players[i].fouls;
    p8.className = "text-right";

    tr.appendChild(p0);
    tr.appendChild(p1);
    tr.appendChild(p2);
    tr.appendChild(p3);
    tr.appendChild(p4);
    tr.appendChild(p5);
    tr.appendChild(p6);
    tr.appendChild(p7);
    tr.appendChild(p8);

    tbody.appendChild(tr);

  }

} // renderMiniStats


function renderPlays(p) {

  var plays = document.getElementById("plays");

  for(var i = 0; i < p.length; i++) {

    var lgi   = document.createElement("div");
    lgi.className = "list-group-item bg-gray-black rounded"

    var media = document.createElement("div");
    media.className = "media";

    var img   = document.createElement("img");
    img.setAttribute("src", ESPN_TEAM_LOGO + p.teamId + PNG_FORMAT + ESPN_24x24);

    var mb    = document.createElement("div");
    mb.className = "media-body ml-2";

    var play  = document.createElement("div");
    play.className = "mb-1";
    play.innerText = p[i].formatted;

    var t     = document.createElement("small");
    t.innerText = p[i].clock;

    mb.appendChild(play);

    media.appendChild(img);
    media.appendChild(mb);
    media.appendChild(t);

    lgi.appendChild(media);

    plays.appendChild(lgi);

  }

} // renderPlays


function renderLiveGame(data) {

  var as = document.getElementById("away");

  as.children[0].setAttribute("src", ESPN_TEAM_LOGO + data.away.name + PNG_FORMAT);
  as.children[0].setAttribute("width", "128");

  as.children[1].children[0].innerText = data.away.name;
  as.children[1].children[1].innerText = data.away.score;

  var hs = document.getElementById("home");

  hs.children[1].setAttribute("src", ESPN_TEAM_LOGO + data.home.name + PNG_FORMAT);
  hs.children[1].setAttribute("width", "128");

  hs.children[0].children[0].innerText = data.home.name;
  hs.children[0].children[1].innerText = data.home.score;

  renderPeriods(data);

  renderMiniStats(data.away, false);
  renderMiniStats(data.home, true);

  renderPlays(data.plays.reverse());

} // renderLiveGame


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


function getLiveScores() {

  var url = GAMES_API;

  fetch(url)
  .then((res) => res.json())
  .then(function(data) {
    renderLiveScores(data);
  }).catch(function(err) {
    console.log(err);
    getScores();
  });

} // getLiveScores


function analyzePlayers(p) {

  var ret = {
    scoring: null,
    rebounding: null,
    double: null,
    triple: null
  };

  if(p === null) {
    return null;
  }

  s = p
  s.sort(function(a, b) {
    return b.points - a.points;
  });

  ret.scoring = s;
/*
  r = p
  p.sort(function(a, b) {
    return a.treb - b.treb;
  })

  console.log(p.reverse());

  ret.rebounding = p.reverse();
*/
  //for(var i = 0; i < p.length; i++) {
  //}

  return ret;

} // analyzePlayers


function generateSummary(g) {

  // TODO: comeback, down by
  // TODO: lead changes
  // TODO: top scorers
  // TODO: rebounds, assists
  // TODO: by quarter breakdown
  // TODO: playoff hopes
  // all starters double figures, without stars, double double, triple double

  var sum = "";

  var pa = analyzePlayers(g.home.players);
  // analyzePlayers (offense/defense, best/worst)
  // analyzeTeam
  // gameAnalysis
  // gameSignificance standings, rankings, playoff spot, trends in terms of L10, home vs away, streaks

  console.log(g);

  if(g.home.score > g.away.score) {
    sum += "A hot shooting " + NBA_TEAMS[g.home.name] + " team shot a scorching " + (g.home.summary.fgm/g.home.summary.fga * 100).toFixed(1) + "% from the field and beat the " + NBA_TEAMS[g.away.name] + " at home.";
    sum += "  " + pa.scoring[0].name + " led the team with " + pa.scoring[0].points + " points shooting " + pa.scoring[0].fg3m + " for " + pa.scoring[0].fg3a + " (" + parseFloat(pa.scoring[0].fg3m/pa.scoring[0].fg3a*100).toFixed(1) + "%) from three point range.";
    //for(var i = 0; i < g.home.)
  } else {
    sum += "The " + NBA_TEAMS[g.away.name] + " shot " + parseFloat(g.away.summary.fgm/g.away.summary.fga * 100).toFixed(1) + "% from the field and beat the " + NBA_TEAMS[g.home.name] + " on the road.";
  }



  return sum

} // generateSummary


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


function getGame() {

  var toks = location.pathname.split("/");

  var team = toks[toks.length - 1];
  var date = toks[toks.length - 2];

  var url = GAMES_API + "/" + date + "/teams/" + team;

  fetch(url)
  .then((res) => res.json())
  .then(function(data) {
    renderGame(data);
  }).catch(function(err) {
    console.log(err);
  });

} // getGame


function checkLiveScores() {

  var url = GAMES_API;

  fetch(url)
  .then((res) => res.json())
  .then(function(data) {

    getLiveScores();

    setInterval(function() {
      getLiveScores();
    }, 30000);

  }).catch(function(err) {
    console.log(err);
    getScores();
  });

} // checkLiveScores


function getTeam() {

  var toks = location.pathname.split("/");

  var team = toks[toks.length - 1];

  fetch(TEAMS_API + "/" + team)
  .then((res) => res.json())
  .then(function(data) {

    if(data === null) {
      //window.location = "/notfound";
    } else {
      renderTeam(data);
    }

  }).catch(function(err) {
    console.log(err);
  });

} // getTeam


function getDownloads() {

  fetch(DOWNLOADS_API)
  .then((res) => res.json())
  .then(function(data) {

    if(data === null) {
      //window.location = "/notfound";
    } else {
      renderTeam(data);
    }

  }).catch(function(err) {
    console.log(err);
  });

} // getDownloads


function syncSeason(s) {

  fetch(DOWNLOADS_API + "/" + s, {
    method: "PUT"
  })
  .then((res) => res.json())
  .then(function(data) {

  }).catch(function(err) {
    console.log(err);
  });

} // syncSeason


function showDownloads(days) {

  var id = document.getElementById("downloads");

  var str = "";

  for(var day in days) {
    str += day + " ";
  }

  id.innerText = str;

} // showDownloads


function checkDownloads() {

  fetch(DOWNLOADS_API)
  .then((res) => res.json())
  .then(function(data) {

    var id = document.getElementById("remaining");

    var count = 0;

    for(var year in data) {

      count += Object.keys(data[year]).length;

    }

    id.innerText = count + " days in download queue.";

  }).catch(function(err) {
    console.log(err);
  });



} // checkDownloads


function downloadSeason() {

  fetch(DOWNLOADS_API, {
    method: "PUT"
  })
  .then((res) => res.json())
  .then(function(data) {

    //showDownloads(data);

  }).catch(function(err) {
    console.log(err);
  });

} // downloadSeason


function getPlayerStats() {

  var toks = location.pathname.split("/");

  var player = toks[toks.length - 1];

  fetch(PLAYERS_API + "/" + player)
  .then((res) => res.json())
  .then(function(data) {

    renderPlayerStats(data);

  }).catch(function(err) {
    console.log(err);
  });

} // getPlayerStats


function getTeamStats() {

  var toks = location.pathname.split("/");

  var team = toks[toks.length - 1];

  fetch(TEAMS_API + "/" + team)
  .then((res) => res.json())
  .then(function(data) {

    renderTeamStats(data);

  }).catch(function(err) {
    console.log(err);
  });

} // getTeamStats


function getLiveGame() {

  var toks = location.pathname.split("/");

  var gameId = toks[toks.length - 1];

  fetch(LIVE_API + "/" + gameId)
  .then((res) => res.json())
  .then(function(data) {

    renderLiveGame(data);

  }).catch(function(err) {
    console.log(err);
  });

} // getLiveGame
