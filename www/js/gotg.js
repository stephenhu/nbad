// gotgame.js

const MASK_PTS = 1;
const MASK_REB = 2;
const MASK_AST = 4;
const MASK_BLK = 8;

const SHOOTING_VERBS = ["draining", "hitting", "nailing", "shooting"];
const REBOUNDING_VERBS = ["grabbing", "hauling", "securing", "snatching"];

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

// quarterly comparison
//
// multiple double figures scoring

class Gotg {

  constructor(game) {
    this.game = game;
  }

  summary() {

    var sum = "";
    var win = null;
    var lose = null;

    if(this.winner()) {
      win   = this.game.home;
      lose  = this.game.away;
    } else {
      win   = this.game.away;
      lose  = this.game.home;
    }

    sum +=  "The " + NBA_TEAMS[win.name] + " beat the " + NBA_TEAMS[lose.name];

    if(this.winner()) {
      sum += " at home ";
    } else {
      sum += " on the road ";
    }

    if(this.overtime()) {
      sum += "in overtime";
    }

    sum += " by the score of " + win.score + " - " + lose.score + ".\t";

    sum += this.notables(win);

    sum += this.notables(lose);

    return sum;

  } // summary


  winner() {

    if(this.game.home.score > this.game.away.score) {
      return true;
    } else {
      return false;
    }

  } // winner


  delta() {

    var diff = this.game.away.score - this.game.home.score;

    if(diff > 0) {
      return diff;
    } else {
      return diff * -1;
    }

  } // delta


  numDoubles(mask) {

    var n = mask;
    var count = 0;

    while(n) {
      count += n & 1;
      n >>= 1;
    }

    return count;

  } // numDoubles


  doubleOrTriple(players) {

    var ret = [];

    for(var i = 0; i < players.length; i++) {

      var p = {
        name: players[i].name,
        points: players[i].points,
        rebounds: players[i].treb,
        assists: players[i].assists,
        blocks: players[i].blocks,
        mask: 0,
        triple: false,
      }

      if(players[i].points > 9) {
        p.mask |= MASK_PTS
      }

      if(players[i].treb > 9) {
        p.mask |= MASK_REB
      }

      if(players[i].assists > 9) {
        p.mask |= MASK_AST
      }

      if(players[i].blocks > 9) {
        p.mask |= MASK_BLK
      }

      var doubles = this.numDoubles(p.mask);

      if(doubles > 1) {

        if(doubles === 3) {
          p.triple = true;
        }

        ret.push(p);

      }

    }

    return ret;

  } // doubleOrTriple


  doubleTripleList(t) {

    var ret = [];

    if(t.mask & MASK_PTS) {
      ret.push(t.points + " points");
    }

    if(t.mask & MASK_REB) {
      ret.push(t.rebounds + " rebounds");
    }

    if(t.mask & MASK_AST) {
      ret.push("dished out " + t.assists + " assists");
    }

    if(t.mask & MASK_BLK) {
      ret.push(t.blocks + " blocks");
    }

    return ret;

  } // tripleList


  doubleTripleText(d) {

    var str = "";

    if(d.triple) {
      str += d.name + " had a triple-double scoring ";
    } else {
      str += d.name + " had a double-double scoring ";
    }

    var ret = this.doubleTripleList(d);

    if(d.triple && ret.length === 3) {
      str += ret[0] + ", " + ret[1] + ", and " + ret[2] + ".\t";
    } else if(ret.length === 2) {
      str += ret[0] + " and " + ret[1] + ".\t";
    }

    return str;

  } // doubleTripleText


  allScorers() {

    var merged = [...this.game.home.players, ...this.game.away.players];

    merged.sort(function(a, b) {
      return b.points - a.points;
    });

    return merged;

  } // allScorers


  scorers(players) {

    players.sort(function(a, b) {
      return b.points - a.points;
    });

    return players;

  } // scorers


  randomVerb() {

  } // randomVerb


  randomAdj() {

  } // randomAdj


  overtime() {

    if(this.game.away.periods.length > 4) {
      return true;
    } else {
      return false;
    }

  } // overtime


  analyzePlayer(p) {

    var str = [];

    var fgp   = 0.0;
    var fg3p  = 0.0;
    var ftp   = 0.0;

    if((p.fga-p.fg3a) !== 0) {
      fgp = ((p.fgm-p.fg3m)/(p.fga-p.fg3a)*100).toFixed(1);
    }

    if(p.fg3a !== 0) {
      fg3p = (p.fg3m/p.fg3a*100).toFixed(1);
    }

    if(p.fta !== 0) {
      ftp = (p.ftm/p.fta*100).toFixed(1);
    }

    str.push(p.points + " points");

    if(p.fg3m > 3) {
      str.push("drained " + p.fg3m + " of " + p.fg3a + " (" + fg3p + "%) from behind the arc");
    } else if(p.fgm > 7) {
      str.push("shot " + (p.fgm-p.fg3m) + " of " + (p.fga-p.fg3a) + " (" + fgp + "%) from 2 point range");
    } else if(p.ftm > 8) {
      str.push("shot " + p.ftm + " of " + p.fta + " (" + ftp + "%) from the line");
    }

    if(p.treb >= p.assists && p.treb >= p.blocks && p.treb >= p.steals && p.treb > 5) {
      str.push("grabbed " + p.treb + " rebounds");
    } else if(p.assists >= p.treb && p.assists >= p.blocks && p.assists >= p.steals && p.assists > 4) {
      str.push("dished out " + p.assists + " assists");
    } else if(p.steals >= p.treb && p.steals >= p.assists && p.steals >= p.blocks && p.steals > 2) {
      str.push("along with " + p.steals + " steals");
    } else if(p.blocks >= p.treb && p.blocks >= p.assists && p.blocks >= p.steals && p.blocks > 2) {
      str.push("along with " + p.blocks + " monster blocks");
    }

    return str;

  } // analyzePlayer


  quarters() {

  } // quarters


  notables(team) {

    var str = "";

    var top = this.scorers(team.players);
    var dd  = this.doubleOrTriple(team.players);

    if(top !== undefined && dd !== undefined && top.length > 0 && dd.length > 0) {

      if(top[0].name === dd[0].name) {

        str += this.doubleTripleText(dd[0]);

        if(dd.length > 1) {

          str += this.doubleTripleText(dd[1]);

        } else {

          var ret = this.analyzePlayer(top[1]);

          if(ret.length === 1) {
            str += ret[0] + ".\t";
          } else if(ret.length > 1) {
            str += ret[0] + " and " + ret[1] + ".\t";
          }

        }

      }

    } else {

      str += top[0].name + " scored a team high of " + top[0].points + " points for ";

      str += team.name;

      var ret = this.analyzePlayer(top[0]);

      if(ret.length >= 3) {
        str += ", " + ret[1] + ", and " + ret[2] + ".\t";
      } else if(ret.length === 2) {
        str += " and " + ret[1] + ".\t";
      }

      str += top[1].name + " contributed ";

      var ret2 = this.analyzePlayer(top[1]);

      if(ret2.length > 1) {
        str += ret2[0] + " and " + ret2[1] + ".\t";
      }

    }

    return str;

  } // notables


  anomalies(home) {

  } // anomalies


  // analyze how important this game is to the team in terms of playoffs
  significance() {
  } // significance


  injuries() {

  } // injuries


} // Gotg
