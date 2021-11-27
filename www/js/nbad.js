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
const F8YELLOW        = "rgba(255, 255, 0, 0.8)";

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
const F1YELLOW        = "rgba(255, 255, 0, 0.1)";

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

const API                     = "/api";
const DOWNLOADS_API           = API + "/downloads";
const GAMES_API               = API + "/games";
const LIVE_API                = API + "/live";
const NEWS_API                = API + "/news";
const PLAYERS_API             = API + "/players";
const FAVORITE_PLAYERS_API    = API + "/players?favorite=true";
const SCORES_API              = API + "/scores";
const STANDINGS_API           = API + "/standings";
const TEAMS_API               = API + "/teams";
const FAVORITE_TEAMS_API      = API + "/teams?favorite=true";

const ESPN_LOGO               = "https://a.espncdn.com/combiner/i?img=/i/mobile/website/img/espn_app_72@2x.png&w=24&h=24&scale=crop&cquality=80&location=origin";
const ESPN_NBA_LOGO           = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png?w=24&h=24&transparent=true";
const ESPN_TEAM_LOGO          = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/";
const ESPN_24x24              = "&w=24&h=24";
const ESPN_160x220            = "&h=160&w=220&scale=crop";
const ESPN_PLAYER_ICON        = "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/";

const AP_LOGO                 = "https://www.ap.org/assets/images/ap.svg";
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

const NBA_EAST = ["atl", "bkn", "bos", "cha", "chi", "cle", "det",
  "ind", "mia", "mil", "nyk", "orl", "phi", "tor", "was"];

const NBA_WEST = ["dal", "den", "gsw", "hou", "lac", "lal", "mem",
  "min", "nop", "okc", "phx", "por", "sac", "sas", "uta"];

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


function niceRank(r) {

  if(r === 1 || r === 21) {
    return r + "st";
  } else if(r === 2 || r === 22) {
    return r + "nd";
  } else if(r === 3 || r === 23) {
    return r + "rd";
  } else {
    return r + "th";
  }

} // niceRank


function niceDate(s) {

  if(s.length === 8) {

    var mon  = s.substring(4, 6);
    var day  = s.substring(6, 8);

    return IMONTH[mon] + " " + day;

  } else {
    return s;
  }

} // niceDate


function nicePlay(s) {

  if(s !== undefined || s !== "" || s.length > 5) {

    if(s[4] === "-") {
      return s.substr(5);
    } else {
      return s;
    }

  }

} // nicePlay


function clearNode(n) {

  if(n !== undefined && n.children.length > 0) {
    while(n.firstChild) {
      n.removeChild(n.firstChild);
    }
  }

  return n;

} // clearNode


function perGame(s, g) {

  if(g === 0) {
    return "0.0";
  } else {
    return (s/g).toFixed(1);
  }

} // perGame


function pct(m, a) {

  if(a === 0) {
    return "0.0%";
  } else {
    return (m/a*100).toFixed(1) + "%";
  }

} // pct


function sortStandings(data, east) {

  var teams = [];

  for(var key in data.records) {

    if(east) {

      if(NBA_EAST.indexOf(key) !== -1) {
        teams.push(data.records[key]);
      }

    } else {

      if(NBA_WEST.indexOf(key) !== -1) {
        teams.push(data.records[key]);
      }

    }

  }

  teams.sort(function(a, b) {
    return a.rank - b.rank;
  });

  return teams;

} // sortStandings


function playerSeasonStats(n, d) {

  var ctx = document.getElementById(n).getContext(CHART_2D);

  var points    = d.seasons.map(function(e) { return e.summary.points; });
  var rebounds  = d.seasons.map(function(e) { return e.summary.treb; });
  var assists   = d.seasons.map(function(e) { return e.summary.assists; });
  var fgm       = d.seasons.map(function(e) { return e.summary.fgm; });
  var fg3m      = d.seasons.map(function(e) { return e.summary.fg3m; });
  var ftm       = d.seasons.map(function(e) { return e.summary.ftm; });

  var labels = d.seasons.map(function(e) { return e.seasonId; });

  var c = new Chart(ctx, {
    type: CHART_BAR,
    data: {
      labels: labels.reverse(),
      datasets: [{
        label: "Points",
        data: points.reverse(),
        borderColor: F8GREEN,
        backgroundColor: F1GREEN,
        hoverBackgroundColor: F8GREEN,
        borderWidth: 1,
        fill: true
      },
      {
        label: "Rebounds",
        data: rebounds.reverse(),
        borderColor: F8BLUE2,
        backgroundColor: F1BLUE2,
        hoverBackgroundColor: F8BLUE2,
        borderWidth: 1,
        fill: true
      },
      {
        label: "Assists",
        data: assists.reverse(),
        borderColor: F8WHITE,
        backgroundColor: F1WHITE,
        hoverBackgroundColor: F8WHITE,
        borderWidth: 1,
        fill: true
      },
      {
        label: "FGM",
        data: fgm.reverse(),
        borderColor: F8BLUE5,
        backgroundColor: F1BLUE5,
        hoverBackgroundColor: F8BLUE5,
        borderWidth: 1,
        fill: true
      },
      {
        label: "3PTM",
        data: fg3m.reverse(),
        borderColor: F8CHARCOAL,
        backgroundColor: F1CHARCOAL,
        hoverBackgroundColor: F8CHARCOAL,
        borderWidth: 1,
        fill: true
      },
      {
        label: "FTM",
        data: ftm.reverse(),
        borderColor: F8BLUE7,
        backgroundColor: F1BLUE7,
        hoverBackgroundColor: F8BLUE7,
        borderWidth: 1,
        fill: true
      }
    ]},
    options: {
      scales: {
        yAxes: [{
          stacked: true
        }],
        xAxes: [{
          stacked: true
        }],
      },
      title: {
        text: "Season comparison",
        display: true,
      },
    }
  });

} // playerSeasonStats


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
        borderColor: F8GREEN,
        backgroundColor: F1GREEN,
        hoverBackgroundColor: F8GREEN,
        borderWidth: 1,
        fill: true
      },
      {
        label: "REB",
        data: d.rebounds,
        borderColor: F8BLUE4,
        backgroundColor: F1BLUE4,
        hoverBackgroundColor: F8BLUE4,
        borderWidth: 1,
        fill: true
      },
      {
        label: "AST",
        data: d.assists,
        borderColor: F8WHITE,
        backgroundColor: F1WHITE,
        hoverBackgroundColor: F8WHITE,
        borderWidth: 1,
        fill: true
      }
      ]
    },
    options: {
      title: {
        text: "Last 10 games",
        display: true
      },
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


function setScore(div, g, live) {

  if(g === null || g === undefined) {
    div.className = "invisible";
  } else {

    if(live) {
      div.children[0].setAttribute("href", "/live/" + g.id);
    } else {
      div.children[0].setAttribute("href", gamekey(g));
    }

    div.children[0].children[0].children[0].setAttribute("src",
      ESPN_TEAM_LOGO + filterTeamName(g.away.name) + PNG_FORMAT + ESPN_24x24);
    div.children[0].children[0].children[1].innerText = g.away.score;

    div.children[0].children[1].children[0].setAttribute("src",
      ESPN_TEAM_LOGO + filterTeamName(g.home.name) + PNG_FORMAT + ESPN_24x24);
    div.children[0].children[1].children[1].innerText = g.home.score;

  }

} // setScore


function quickStats(p) {

  var pct = {
    fgm: 0,
    fga: 0,
    fgp: 0.0,
    fgps: "",
    fg3m: 0,
    fg3a: 0,
    fg3p: 0.0,
    ftm: 0,
    fta: 0,
    ftp: 0.0,
    reb: 0,
    ast: 0,
  }

  for(var i = 0; i < p.length; i++) {

    pct.fgm   += p[i].fgm;
    pct.fga   += p[i].fga;

    pct.fg3m  += p[i].fg3m;
    pct.fg3a  += p[i].fg3a;
    pct.fg3ps  = "(" + p[i].fg3m + "-" + p[i].fg3a + ")";
    pct.ftm   += p[i].ftm;
    pct.fta   += p[i].fta;
    pct.ftps   = "(" + p[i].ftm + "-" + p[i].fta + ")";
    pct.reb   += p[i].treb;
    pct.ast   += p[i].assists;

  }

  if(pct.fga !== 0) {
    pct.fgp  = (pct.fgm/pct.fga*100).toFixed(1);
    pct.fgps = "(" + pct.fgm + "-" + pct.fga + ")";
  } else {
    pct.fgp = "0.0%";
    pct.fgps = "(0-0)";
  }

  if(pct.fg3a !== 0) {
    pct.fg3p  = (pct.fg3m/pct.fg3a*100).toFixed(1);
    pct.fg3ps = "(" + pct.fg3m + "-" + pct.fg3a + ")";
  } else {
    pct.fg3p = "0.0%";
    pct.fg3ps = "(0-0)";
  }

  if(pct.fta !== 0) {
    pct.ftp   = (pct.ftm/pct.fta*100).toFixed(1);
    pct.ftps  = "(" + pct.ftm + "-" + pct.fta + ")";
  } else {
    pct.ftp   = "0.0%";
    pct.ftps  = "(0-0)";
  }

  return pct;

} // quickStats


function createRows(items) {

  var len = Object.keys(items).length;

  var rowCount = Math.floor(len / 4);
  var rowRem   = len % 4;

  if(rowRem !== 0) {
    rowCount +=1;
  }

  var rows = [];

  for(var i = 0; i < rowCount; i++) {

    var div = document.createElement("div");
    div.className = "card-group mt-3";

    rows.push(div);

  }

  return rows;

} // createLists


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


function renderFavoritePlayerList(players) {

  var id = document.getElementById("players");

  var rows = createRows(players);

  var count = 0;

  for(var key in players) {

    var card      = document.createElement("div");
    card.className = "card bg-gray-black";

    var cardBody  = document.createElement("div");
    cardBody.className = "card-body";

    var a   = document.createElement("a");
    a.setAttribute("href", "/players/" + namekey(key) );
    a.innerText = key;

    var img = document.createElement("img");
    img.setAttribute("src", players[key].icon);
    img.setAttribute("width", "128");

    var h6 = document.createElement("h6");
    h6.className = "card-subtitle";

    card.appendChild(img);
    card.appendChild(cardBody);

    h6.appendChild(a);

    cardBody.appendChild(h6);

    if(count < 4) {
      rows[0].appendChild(card);
    } else if(count > 3 && count < 8) {
      rows[1].appendChild(card);
    } else if(count > 7 && count < 12) {
      rows[2].appendChild(card);
    } else {
      rows[3].appendChild(card);
    }

    count = count + 1;
    //div.appendChild(a);

  }

  for(var i = 0; i < rows.length; i++) {
    id.appendChild(rows[i]);
  }

} // renderFavoritePlayerList


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


function renderTeamLastGames(teams) {

  var id = document.getElementById("teams");

  var count = 0;

  for(var key in teams) {

    var a = document.createElement("a");

    a.className = "list-group-item list-group-item-action rounded bg-gray-black mt-3";
    //a.setAttribute("href", "/games/" + key);

    var mediaBody   = document.createElement("div");
    mediaBody.className = "media-body";

    var h5          = document.createElement("h5");
    h5.className = "mb-0 blue";
    h5.innerText = key;

    mediaBody.appendChild(h5);
    mediaBody.appendChild(lgh1);
    mediaBody.appendChild(lgh2);

    media.appendChild(img);
    media.appendChild(mediaBody);

    a.appendChild(media);

    id.appendChild(a);

    count = count + 1;

  }

} // renderTeamLastGames


function renderFavoriteTeamList(teams) {

  var id = document.getElementById("teams");

  var rows = createRows(teams);

  var count = 0;

  for(var key in teams) {

    var card = document.createElement("div");
    card.className = "card bg-gray-black";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var a = document.createElement("a");
    a.className = "list-group-item list-group-item-action rounded bg-gray-black mt-3";
    a.setAttribute("href", "/teams/" + key);
    a.innerText = key;

    var img = document.createElement("img");
    img.className = "mr-3";
    img.setAttribute("src", teams[key].icon);
    img.setAttribute("width", "128");

    card.appendChild(img);
    card.appendChild(cardBody);

    var cardTitle = document.createElement("div");
    cardTitle.className = "card-subtitle";

    cardTitle.appendChild(a);

    cardBody.appendChild(cardTitle);

    if(count < 4) {
      rows[0].appendChild(card);
    } else if(count > 3 && count < 8) {
      rows[1].appendChild(card);
    } else if(count > 7 && count < 12) {
      rows[2].appendChild(card);
    } else {
      rows[3].appendChild(card);
    }

    count = count + 1;

  }

  for(var i = 0; i < rows.length; i++) {
    id.appendChild(rows[i]);
  }

} // renderFavoriteTeamList


function renderNews(articles) {

  var id = document.getElementById("news");

  for(var i = 0; i < articles.length; i++) {

    var media = document.createElement("li");
    media.className = "media mt-3";

    var img = document.createElement("img");
    img.className = "mr-3";
    //img.setAttribute("src", ESPN_LOGO);
    img.setAttribute("width", "24");

    var mediaBody = document.createElement("div");
    mediaBody.className = "media-body";

    var a = document.createElement("a");
    a.setAttribute("href", articles[i].link);
    a.className = "mt-0 mb-1";
    a.innerText = articles[i].title;

    if(articles[i].link.includes("espn")) {
      img.setAttribute("src", ESPN_LOGO);
    } else {
      img.setAttribute("src", AP_LOGO);
    }

    var small = document.createElement("small");
    small.innerText = articles[i].date;
    small.className = "ml-2";
    //small.innerText = "5s";

    mediaBody.appendChild(a);
    mediaBody.appendChild(small);

    media.appendChild(img);
    media.appendChild(mediaBody);
    //media.appendChild(small);

    id.appendChild(media);

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
      setScore(id.children[index], games[key], true);
    }

    index += 1;

  }

} // renderLiveScores


function renderScores(games) {

  if(games === null) {
    return;
  }

  var id = document.getElementById("scores");

  for(var i = 0; i < id.children.length; i++) {

    if(i > games.length) {
      setScore(id.children[i], null, false);
    } else {
      setScore(id.children[i], games[i], false);
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

  id = clearNode(id);

  var div1  = document.createElement("div");
  div1.className = "list-group-item rounded-left bg-darker-blue";

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

  for(var i = 0; i < g.away.periods.length; i++) {

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

  var g = new Gotg(g);
/*
  var x = g.doubleOrTriple(true);

  console.log(x);

  var y = g.doubleOrTriple(false);

  console.log(y);

  g.scorers(true);

  console.log(g.winner());
*/
  summary.innerText = g.summary();

} // renderSummary


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
    var pi = document.createElement("td");
    pi.className = "text-right";
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
      pi.innerText = data.career.mpg;
      p1.innerText = data.career.ppg;
      p2.innerText = data.career.rpg;
      p3.innerText = data.career.apg;
      p4.innerText = data.career.spg;
      p5.innerText = data.career.bpg;
      p6.innerText = data.career.tpg.toFixed(1);
      p7.innerText = data.career.fgp + "%";
      p8.innerText = data.career.fg3p + "%";
      p9.innerText = data.career.ftp + "%";

    } else {

      p0.innerText = data.seasons[i-1].seasonId;
      pi.innerText = data.seasons[i-1].summary.mpg.toFixed(1);
      p1.innerText = data.seasons[i-1].summary.ppg.toFixed(1);
      p2.innerText = data.seasons[i-1].summary.rpg.toFixed(1);
      p3.innerText = data.seasons[i-1].summary.apg.toFixed(1);
      p4.innerText = data.seasons[i-1].summary.spg.toFixed(1);
      p5.innerText = data.seasons[i-1].summary.bpg.toFixed(1);
      p6.innerText = data.seasons[i-1].summary.tpg.toFixed(1);
      p7.innerText = data.seasons[i-1].summary.fgp.toFixed(1) + "%";
      p8.innerText = data.seasons[i-1].summary.fg3p.toFixed(1) + "%";
      p9.innerText = data.seasons[i-1].summary.ftp.toFixed(1) + "%";

    }

    tr.appendChild(p0);
    tr.appendChild(pi);
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

  var totals = document.getElementById("totals");

  for(var i = 0; i < data.seasons.length+1; i++) {

    var d = null;

    if(i === 0) {
      d = data.career;
    } else {
      d = data.seasons[i-1].summary;
    }

    var tr = document.createElement("tr");

    var p0 = document.createElement("td");
    p0.className = "text-right";

    if(i === 0) {
      p0.innerText = "Career";
    } else {
      p0.innerText = data.seasons[i-1].seasonId;
    }

    var p1 = document.createElement("td");
    p1.className = "text-right";
    p1.innerText = d.played;

    var p2 = document.createElement("td");
    p2.className = "text-right";
    p2.innerText = d.mpg;

    var p3 = document.createElement("td");
    p3.className = "text-right";
    p3.innerText = d.minutes;

    var p4 = document.createElement("td");
    p4.className = "text-right";
    p4.innerText = d.ppg;

    var p5 = document.createElement("td");
    p5.className = "text-right";
    p5.innerText = d.points;

    var p7 = document.createElement("td");
    p7.className = "text-right";
    p7.innerText = (d.fgm - d.fg3m) + "-" + (d.fga - d.fg3a);

    var s1 = document.createElement("small");
    s1.innerText =  " (" + pct(d.fgm - d.fg3m, d.fga - d.fg3a) + ")";

    p7.appendChild(s1);

    var p9 = document.createElement("td");
    p9.className = "text-right";
    p9.innerText = d.fg3m + "-" + d.fg3a;

    var s2 = document.createElement("small");
    s2.innerText = " (" + pct(d.fg3m, d.fg3a) + ")";

    p9.appendChild(s2);

    var p11 = document.createElement("td");
    p11.className = "text-right";
    p11.innerText = d.ftm + "-" + d.fta;

    var s3 = document.createElement("small");
    s3.innerText = " (" + d.ftp + "%)";

    p11.appendChild(s3);

    var p12 = document.createElement("td");
    p12.className = "text-right";
    p12.innerText = d.rpg;

    var p13 = document.createElement("td");
    p13.className = "text-right";
    p13.innerText = d.treb;

    var p14 = document.createElement("td");
    p14.className = "text-right";
    p14.innerText = d.apg;

    var p15 = document.createElement("td");
    p15.className = "text-right";
    p15.innerText = d.assists;

    var p16 = document.createElement("td");
    p16.className = "text-right";
    p16.innerText = d.spg;

    var p17 = document.createElement("td");
    p17.className = "text-right";
    p17.innerText = d.steals;

    var p18 = document.createElement("td");
    p18.className = "text-right";
    p18.innerText = d.bpg;

    var p19 = document.createElement("td");
    p19.className = "text-right";
    p19.innerText = d.blocks;

    var p20 = document.createElement("td");
    p20.className = "text-right";

    if(i === 0) {
      p20.innerText = perGame(d.turnovers, d.played);
    } else {
      p20.innerText = d.tpg;
    }

    var p21 = document.createElement("td");
    p21.className = "text-right";
    p21.innerText = d.turnovers;

    var p22 = document.createElement("td");
    p22.className = "text-right";
    p22.innerText = perGame(d.fouls, d.played);

    var p23 = document.createElement("td");
    p23.className = "text-right";
    p23.innerText = d.fouls;

    tr.appendChild(p0);
    tr.appendChild(p1);
    tr.appendChild(p2);
    tr.appendChild(p3);
    tr.appendChild(p4);
    tr.appendChild(p5);
    tr.appendChild(p7);
    tr.appendChild(p9);
    tr.appendChild(p11);
    tr.appendChild(p12);
    tr.appendChild(p13);
    tr.appendChild(p14);
    tr.appendChild(p15);
    tr.appendChild(p16);
    tr.appendChild(p17);
    tr.appendChild(p18);
    tr.appendChild(p19);
    tr.appendChild(p20);
    tr.appendChild(p21);
    tr.appendChild(p22);
    tr.appendChild(p23);

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


function renderLastTenChart(data) {

  var opponents = data.games.map(function(e) { return e.opponent; });
  var points    = data.games.map(function(e) { return e.summary.points; });
  var rebounds  = data.games.map(function(e) { return e.summary.treb; });
  var assists   = data.games.map(function(e) { return e.summary.assists; });
  var turnovers = data.games.map(function(e) { return e.summary.turnovers; });

  var ctx = document.getElementById("last10").getContext(CHART_2D);

  var c = new Chart(ctx, {
    type: CHART_BAR,
    data: {
      labels: opponents.reverse(),
      datasets: [{
        label: "Points",
        data: points,
        borderColor: F8GREEN,
        backgroundColor: F1GREEN,
        hoverBackgroundColor: F8GREEN,
        borderWidth: 1,
        fill: false
      },
      {
        label: "Rebounds",
        data: rebounds.reverse(),
        borderColor: F8BLUE4,
        backgroundColor: F1BLUE4,
        hoverBackgroundColor: F8BLUE4,
        borderWidth: 1,
        fill: false
      },
      {
        label: "Assists",
        data: assists.reverse(),
        borderColor: F8WHITE,
        backgroundColor: F1WHITE,
        hoverBackgroundColor: F8WHITE,
        borderWidth: 1,
        fill: true
      },
      {
        label: "Turnovers",
        data: turnovers.reverse(),
        borderColor: F8BLUE7,
        backgroundColor: F1BLUE7,
        hoverBackgroundColor: F8BLUE7,
        borderWidth: 1,
        fill: true
      }
    ]},
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

} // renderLastTenChart


function renderMinutesChart(data) {

  var players = data.players.map(function(e) { return e.first + " " + e.last; });
  var minutes = data.players.map(function(e) { return e.minutes; });

  var ctx = document.getElementById("minutes").getContext(CHART_2D);

  var c = new Chart(ctx, {
    type: CHART_DOUGHNUT,
    data: {
      labels: players,
      datasets: [{
        data: minutes,
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
        text: "Minutes distribution",
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

} // renderMinutesChart


function renderPlayerLastTen(data) {

  var id = document.getElementById("last10");

  for(var i = 0; i < data.lastGames.length; i++) {

    var tr = document.createElement("tr");

    var p0 = document.createElement("td");
    p0.className = "text-right";
    p0.innerText = data.lastGames[i].opponent;

    var p1 = document.createElement("td");
    p1.className = "text-right";
    p1.innerText = data.lastGames[i].minutes + ":" + padInt(data.lastGames[i].seconds);

    var p2 = document.createElement("td");
    p2.className = "text-right";
    p2.innerText = data.lastGames[i].points;

    var p3 = document.createElement("td");
    p3.className = "text-right";
    p3.innerText = (data.lastGames[i].fgm - data.lastGames[i].fg3m) + "-" + (data.lastGames[i].fga - data.lastGames[i].fg3a);

    var p4 = document.createElement("td");
    p4.className = "text-right";
    p4.innerText = data.lastGames[i].fg3m + "-" + data.lastGames[i].fg3a;

    var p5 = document.createElement("td");
    p5.className = "text-right";
    p5.innerText = data.lastGames[i].ftm + "-" + data.lastGames[i].fta;

    var p6 = document.createElement("td");
    p6.className = "text-right";
    p6.innerText = data.lastGames[i].treb;

    var p7 = document.createElement("td");
    p7.className = "text-right";
    p7.innerText = data.lastGames[i].assists;

    var p8 = document.createElement("td");
    p8.className = "text-right";
    p8.innerText = data.lastGames[i].steals;

    var p9 = document.createElement("td");
    p9.className = "text-right";
    p9.innerText = data.lastGames[i].blocks;

    var p10 = document.createElement("td");
    p10.className = "text-right";
    p10.innerText = data.lastGames[i].turnovers;

    var p11 = document.createElement("td");
    p11.className = "text-right";
    p11.innerText = data.lastGames[i].fouls;

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
    tr.appendChild(p10);
    tr.appendChild(p11);

    id.appendChild(tr);
  }

} // renderPlayerLastTen


function renderPlayerStats(data) {

  var name = document.getElementById("name");

  name.innerText = data.first + " " + data.last;

  var team = document.getElementById("team");

  team.innerText = data.teamName;

  var logo = document.getElementById("logo");

  logo.setAttribute("src", NBA_PLAYER_ICON + data.id + PNG_FORMAT);

  var big = document.getElementById("bigstats");

  big.children[0].children[0].innerText = data.seasonId;
  big.children[1].children[1].innerText = data.latest.ppg;
  big.children[2].children[1].innerText = data.latest.rpg;

  if(data.latest.tpg === 0) {
    big.children[3].children[1].innerText = "0.0";
  } else {
    big.children[3].children[1].innerText = (data.latest.apg/data.latest.tpg).toFixed(1);
  }

  big.children[4].children[1].innerText = data.latest.plusMinus;

  var small = document.getElementById("smallstats");

  small.children[0].children[0].innerText = data.seasonId;
  small.children[1].children[1].innerText = data.latest.mpg;
  small.children[2].children[1].innerText = data.latest.fgp + "%";
  small.children[3].children[1].innerText = data.latest.fg3p + "%";
  small.children[4].children[1].innerText = data.latest.ftp + "%";
  small.children[5].children[1].innerText = data.latest.spg;
  small.children[6].children[1].innerText = data.latest.bpg;
  //small.children[7].children[1].innerText = data.latest.tpg;
  small.children[7].children[1].innerText = (data.latest.fouls / data.latest.played).toFixed(1);
  small.children[8].children[1].innerText = "n/a";

  playerSeasonStats("careerChart", data);

  //renderCareerChart(data);

  //renderCareer(data);

  renderCareerTotals(data);

  favoritePlayerCharts(data.lastGames, "lastGames");

  renderPlayerLastTen(data);

} // renderPlayerStats


function renderLastTenStats(data) {

  var id = document.getElementById("games");

  for(var i = 0; i < data.games.length; i++) {

    var tr = document.createElement("tr");

    var result = "";

    if(data.games[i].win) {
      result = "W";
    } else {
      result = "L";
    }

    var p0 = document.createElement("td");

    var a = document.createElement("a");
    //a.className = "";
    //a.setAttribute("href", "/games/" + data)
    p0.className = "text-right";
    p0.innerText = NBA_TEAMS[data.games[i].opponent];

    var p1 = document.createElement("td");
    p1.innerText = result + " " + data.games[i].score + "-" + data.games[i].opponentScore;

    var p2 = document.createElement("td");
    p2.className = "text-right";
    p2.innerText = data.games[i].summary.treb;

    var p3 = document.createElement("td");
    p3.className = "text-right";
    p3.innerText = data.games[i].summary.assists;

    var p4 = document.createElement("td");
    p4.className = "text-right";
    p4.innerText = data.games[i].summary.steals;

    var p5 = document.createElement("td");
    p5.className = "text-right";
    p5.innerText = data.games[i].summary.blocks;

    var p6 = document.createElement("td");
    p6.className = "text-right";
    p6.innerText = data.games[i].summary.turnovers;

    var p7 = document.createElement("td");
    p7.className = "text-right";

    if(data.games[i].summary.fga === 0) {
      p7.innerText = "0%";
    } else {
      p7.innerText = ((data.games[i].summary.fgm - data.games[i].summary.fg3m)/
      (data.games[i].summary.fga - data.games[i].summary.fg3a)*100).toFixed(1) + "%";
    }

    var p8 = document.createElement("td");
    p8.className = "text-right";

    if(data.games[i].summary.fga === 0) {
      p8.innerText = "0%";
    } else {
      p8.innerText = (data.games[i].summary.fg3m/data.games[i].summary.fg3a*100).toFixed(1) + "%";
    }

    var p9 = document.createElement("td");
    p9.className = "text-right";

    if(data.games[i].summary.fga === 0) {
      p9.innerText = "0%";
    } else {
      p9.innerText = (data.games[i].summary.ftm/data.games[i].summary.fta*100).toFixed(1) + "%";
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

    id.appendChild(tr);

  }

} // renderLastTenStats


function renderRosterStats(data) {

  var id = document.getElementById("players");

  for(var i = 0; i < data.players.length; i++) {

    var tr = document.createElement("tr");

    var p0 = document.createElement("td");
    p0.className = "text-right";
    var a = document.createElement("a");
    a.setAttribute("href", "/players/" + namekey(data.players[i].first + data.players[i].last));
    a.innerText = data.players[i].first + " " + data.players[i].last;

    p0.appendChild(a);

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

  logo.setAttribute("src", ESPN_TEAM_LOGO + filterTeamName(data.name) + PNG_FORMAT);
  logo.setAttribute("width", "192");

  var big = document.getElementById("bigstats");

  big.children[0].children[0].innerText = data.seasonId;
  big.children[1].children[1].innerText = niceRank(data.standings.records[data.name].rank);
  big.children[2].children[1].innerText = data.standings.records[data.name].w + "-" + data.standings.records[data.name].l;
  big.children[3].children[1].innerText = data.standings.records[data.name].gb;
  big.children[4].children[1].innerText = data.standings.records[data.name].l10w + "-" + data.standings.records[data.name].l10l;
  big.children[5].children[1].innerText = data.standings.records[data.name].streakText;

  var small = document.getElementById("smallstats");

  small.children[0].children[1].innerText = data.ranks.ppg.val;
  small.children[0].children[2].innerText = niceRank(data.ranks.ppg.rank);

  small.children[1].children[1].innerText = data.ranks.oppg.val;
  small.children[1].children[2].innerText = niceRank(data.ranks.oppg.rank);

  small.children[2].children[1].innerText = (data.ranks.fgp.val * 100).toFixed(1) + "%";
  small.children[2].children[2].innerText = niceRank(data.ranks.fgp.rank);

  small.children[3].children[1].innerText = (data.ranks.fg3p.val * 100).toFixed(1) + "%";
  small.children[3].children[2].innerText = niceRank(data.ranks.fg3p.rank);

  small.children[4].children[1].innerText = (data.ranks.ftp.val * 100).toFixed(1) + "%";
  small.children[4].children[2].innerText = niceRank(data.ranks.ftp.rank);

  small.children[5].children[1].innerText = data.ranks.trpg.val;
  small.children[5].children[2].innerText = niceRank(data.ranks.trpg.rank);

  small.children[6].children[1].innerText = data.ranks.apg.val;
  small.children[6].children[2].innerText = niceRank(data.ranks.apg.rank);

  small.children[7].children[1].innerText = data.ranks.spg.val;
  small.children[7].children[2].innerText = niceRank(data.ranks.spg.rank);

  small.children[8].children[1].innerText = data.ranks.bpg.val;
  small.children[8].children[2].innerText = niceRank(data.ranks.bpg.rank);

  small.children[9].children[1].innerText = data.ranks.tpg.val;
  small.children[9].children[2].innerText = niceRank(data.ranks.tpg.rank);

  small.children[10].children[1].innerText = data.ranks.fpg.val;
  small.children[10].children[2].innerText = niceRank(data.ranks.fpg.rank);

  renderRosterStats(data);

  renderMinutesChart(data);

  renderLastTenChart(data);

  renderLastTenStats(data);

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

  tbody = clearNode(tbody);

  for(var i = 0; i < t.players.length; i++) {

    var tr = document.createElement("tr");

    var p0 = document.createElement("td");

    var a = document.createElement("a");
    a.setAttribute("href", "/players/" + namekey(t.players[i].name));
    a.innerText = t.players[i].name;

    p0.appendChild(a);

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

  plays = clearNode(plays);

  for(var i = 0; i < p.length; i++) {

    var lgi   = document.createElement("div");
    lgi.className = "list-group-item bg-gray-black rounded"

    var media = document.createElement("div");
    media.className = "media";

    var img   = document.createElement("img");

    if(p[i].teamName !== "") {
      img.setAttribute("src", ESPN_TEAM_LOGO + p[i].teamName + PNG_FORMAT + ESPN_24x24);
    } else {
      img.setAttribute("src", ESPN_NBA_LOGO);
    }

    var mb    = document.createElement("div");
    mb.className = "media-body ml-2";

    var play  = document.createElement("div");
    play.className = "mb-1";
    play.innerText = nicePlay(p[i].formatted);

    var t     = document.createElement("small");
    t.innerText = "(Q" + p[i].period + ") " + p[i].clock;

    mb.appendChild(play);

    media.appendChild(img);
    media.appendChild(mb);
    media.appendChild(t);

    lgi.appendChild(media);

    plays.appendChild(lgi);

  }

} // renderPlays


function renderLiveGameSummary(data) {

  var hpct = quickStats(data.home.players);
  var apct = quickStats(data.away.players);

  var p0 = document.getElementById("afgp");
  p0.innerText = apct.fgp;

  var p0a = document.getElementById("afgps");
  p0a.innerText = apct.fgps;

  var p1 = document.getElementById("afg3p");
  p1.innerText = apct.fg3p;

  var p1a = document.getElementById("afg3ps");
  p1a.innerText = apct.fg3ps;

  var p2 = document.getElementById("aftp");
  p2.innerText = apct.ftp;

  var p2a = document.getElementById("aftps");
  p2a.innerText = apct.ftps;

  var p3 = document.getElementById("ar");
  p3.innerText = apct.reb;

  var p4 = document.getElementById("aa");
  p4.innerText = apct.ast;

  var p5 = document.getElementById("hfgp");
  p5.innerText = hpct.fgp;

  var p5a = document.getElementById("hfgps");
  p5a.innerText = hpct.fgps;

  var p6 = document.getElementById("hfg3p");
  p6.innerText = hpct.fg3p;

  var p6a = document.getElementById("hfg3ps");
  p6a.innerText = hpct.fg3ps;

  var p7 = document.getElementById("hftp");
  p7.innerText = hpct.ftp;

  var p7a = document.getElementById("hftps");
  p7a.innerText = hpct.ftps;

  var p8 = document.getElementById("hr");
  p8.innerText = hpct.reb;

  var p9 = document.getElementById("ha");
  p9.innerText = hpct.ast;

} // renderLiveGameSummary


function renderLiveGame(data) {

  var as = document.getElementById("away");

  as.children[0].setAttribute("src", ESPN_TEAM_LOGO + filterTeamName(data.away.name) + PNG_FORMAT);
  as.children[0].setAttribute("width", "128");

  as.children[1].children[0].innerText = data.away.name;
  as.children[1].children[1].innerText = data.away.score;

  var hs = document.getElementById("home");

  hs.children[1].setAttribute("src", ESPN_TEAM_LOGO + filterTeamName(data.home.name) + PNG_FORMAT);
  hs.children[1].setAttribute("width", "128");

  hs.children[0].children[0].innerText = data.home.name;
  hs.children[0].children[1].innerText = data.home.score;

  renderPeriods(data);

  renderLiveGameSummary(data);

  renderMiniStats(data.away, false);
  renderMiniStats(data.home, true);

  renderPlays(data.plays.reverse());

} // renderLiveGame


function renderStandings(data) {

  var east = sortStandings(data, true);
  var west = sortStandings(data, false);

  var id = document.getElementById("standings");

  for(var i = 0; i < east.length; i++) {

    var tr = document.createElement("tr");

    if(i === 7) {
      tr.className = "green-bottom";
    }

    var n1 = document.createElement("td");
    n1.innerText = i+1;
    n1.className = "text-right";

    var p0 = document.createElement("td");
    p0.className = "text-right";

    var a = document.createElement("a");
    a.setAttribute("href", "/teams/" + east[i].name);
    a.innerText = east[i].name;

    p0.appendChild(a);

    var p1 = document.createElement("td");
    p1.innerText = east[i].w;
    p1.className = "text-right";

    var p2 = document.createElement("td");
    p2.innerText = east[i].l;
    p2.className = "text-right";

    var p3 = document.createElement("td");
    p3.innerText = east[i].gb;
    p3.className = "text-right";

    var p4 = document.createElement("td");
    p4.innerText = east[i].l10w + "-" + east[i].l10l;
    p4.className = "text-right";

    var space = document.createElement("td");

    var n2 = document.createElement("td");
    n2.innerText = i+1;
    n2.className = "text-right";

    var p5 = document.createElement("td");
    p5.className = "text-right";

    var aw = document.createElement("a");
    aw.setAttribute("href", "/teams/" + west[i].name);
    aw.innerText = west[i].name;

    p5.appendChild(aw);

    var p6 = document.createElement("td");
    p6.innerText = west[i].w;
    p6.className = "text-right";

    var p7 = document.createElement("td");
    p7.innerText = west[i].l;
    p7.className = "text-right";

    var p8 = document.createElement("td");
    p8.innerText = west[i].gb;
    p8.className = "text-right";

    var p9 = document.createElement("td");
    p9.innerText = west[i].l10w + "-" + west[i].l10l;
    p9.className = "text-right";

    tr.appendChild(n1);
    tr.appendChild(p0);
    tr.appendChild(p1);
    tr.appendChild(p2);
    tr.appendChild(p3);
    tr.appendChild(p4);
    tr.appendChild(space);
    tr.appendChild(n2);
    tr.appendChild(p5);
    tr.appendChild(p6);
    tr.appendChild(p7);
    tr.appendChild(p8);
    tr.appendChild(p9);

    id.appendChild(tr);

  }

} // renderStandings


function favoritePlayers() {

  fetch(FAVORITE_PLAYERS_API)
  .then((res) => res.json())
  .then(function(data) {
    renderFavoritePlayerList(data);
  }).catch(function(err) {
    console.log(err);
  });

} // favoritePlayers


function favoriteTeams() {

  fetch(FAVORITE_TEAMS_API)
  .then((res) => res.json())
  .then(function(data) {
    renderFavoriteTeamList(data);
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
  // TODO: by quarter breakdown (plus/minus per quarter)
  // TODO: playoff hopes
  // all starters double figures, without stars, double double, triple double

  var sum = "";

  var pa = analyzePlayers(g.home.players);
  // analyzePlayers (offense/defense, best/worst)
  // analyzeTeam
  // gameAnalysis
  // gameSignificance standings, rankings, playoff spot, trends in terms of L10, home vs away, streaks

  //console.log(g);

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

  fetch(GAMES_API)
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


function getStandings() {

  fetch(STANDINGS_API)
  .then((res) => res.json())
  .then(function(data) {

    renderStandings(data);

  }).catch(function(err) {
    console.log(err);
  });

} // getStandings
