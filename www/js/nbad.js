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


function getColors(c, b) {

  if(c > 0) {

  }

} // getColors


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
