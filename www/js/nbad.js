/* nbad.js */

function playerTrend(n) {

  var ctx = document.getElementById(n).getContext("2d");

  var c = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["atl", "bos", "cle", "sas", "orl"],
      datasets: [{
        label: "pts",
        data: [34, 48, 17, 21, 18],
        borderColor: [
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)"          
        ],
        backgroundColor: [
          "rgba(0, 255, 0, 0.1)",
          "rgba(0, 255, 0, 0.1)",
          "rgba(0, 255, 0, 0.1)",
          "rgba(0, 255, 0, 0.1)",
          "rgba(0, 255, 0, 0.1)"
        ],
        borderWidth: 1,
        //pointRadius: 0,
        fill: true
      },
      {
        label: "rebs",
        data: [11, 5, 9, 8, 7],
        borderColor: [
          "rgba(0, 0, 255, 0.2)",
          "rgba(0, 0, 255, 0.2)",
          "rgba(0, 0, 255, 0.2)",
          "rgba(0, 0, 255, 0.2)",
          "rgba(0, 0, 255, 0.2)",
        ],
        backgroundColor: [
          "rgba(0, 0, 255, 0.1)",
          "rgba(0, 0, 255, 0.1)",
          "rgba(0, 0, 255, 0.1)",
          "rgba(0, 0, 255, 0.1)",
          "rgba(0, 0, 255, 0.1)",
        ],
        borderWidth: 1,
        //pointRadius: 0,
        fill: true      
      },
      {
        label: "asts",
        data: [3, 8, 3, 3, 5],
        borderColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(255, 0, 0, 0.2)",
          "rgba(255, 0, 0, 0.2)",
          "rgba(255, 0, 0, 0.2)",
          "rgba(255, 0, 0, 0.2)"
        ],
        backgroundColor: [
          "rgba(255, 0, 0, 0.1)",
          "rgba(255, 0, 0, 0.1)",
          "rgba(255, 0, 0, 0.1)",
          "rgba(255, 0, 0, 0.1)",
          "rgba(255, 0, 0, 0.1)"
        ],
        borderWidth: 1,
        //pointRadius: 0,
        fill: true      
      }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          /*ticks: {
            beginAtZero: true,
            stepSize: 20,
            
          },
          gridLines: {
            display: false,
          },
          drawBorder: true*/
          stacked: true
        }],
        xAxes: [{
          /*gridLines: {
            display: false,
          }*/
          stacked: true
        }]
      }
    }
  });

} // playerTrend
