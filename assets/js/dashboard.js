( function ( $ ) {
  "use strict";

  // Yaşa Göre Depresyon Oranları
  var ctx = document.getElementById('sales-chart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "79", "80", "82", "89"],
      datasets: [{
        label: "Kadınlarda Depresyon Seviyesi",
        data: [40.949495, 40.554795, 39.375820, 38.693699, 37.510006, 35.952401, 35.151482, 35.251521, 34.649645, 34.811955, 35.135704, 34.719346, 34.691433, 34.363537, 33.700521, 34.489028, 32.068136, 32.051454, 31.133956, 31.693750, 31.252669, 31.097778, 33.439614, 29.919255, 31.768212, 31.151899, 31.439024, 30.936170, 30.578313, 30.724138, 32.750000, 31.687500, 29.607843, 31.012987, 31.782609, 30.039474, 30.732143, 32.310811, 30.717391, 28.125000, 32.276596, 29.840909, 32.081081, 29.787879, 32.810811, 31.424242, 35.550000, 31.208333, 29.857143, 25.000000, 36.153846, 26.733333, 33.733333, 28.375000, 31.666667, 29.000000, 28.000000, 42.000000, 33.600000, 28.142857, 38.000000, 24.000000, 55.000000, 14.666667, 37.000000, 34.500000, 30.500000, 31.000000],
        backgroundColor: 'transparent',
        borderColor: 'rgba(220,53,69,0.75)',
        borderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 4,
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'rgba(220,53,69,0.75)',
      },
      {
        label: "Erkeklerde Depresyon Seviyesi",
        data: [37.822581, 39.454545, 37.361011, 36.472648, 36.781065, 35.684292, 34.250712, 34.563131, 33.657312, 34.523726, 34.145957, 33.916859, 34.743386, 32.705085, 32.889796, 32.781095, 33.860294, 33.418605, 33.974790, 32.090909, 30.445455, 33.172840, 30.845238, 28.173333, 34.387755, 31.140845, 31.500000, 31.800000, 31.268293, 31.230769, 31.562500, 37.189189, 32.976744, 34.625000, 33.829787, 32.793103, 36.187500, 32.511628, 35.047619, 30.805556, 33.333333, 29.178571, 32.760870, 34.500000, 33.900000, 34.909091, 31.133333, 26.562500, 31.157895, 30.526316, 24.384615, 28.875000, 28.750000, 31.000000, 29.714286, 29.375000, 16.333333, 39.833333, 19.333333, 26.000000, 32.500000, 23.000000, 19.571429, 20.000000, 14.000000, 21.500000, 27.500000, 24.000000, 23.000000],
        backgroundColor: 'transparent',
        borderColor: 'rgba(0,123,255,0.75)',
        borderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 4,
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'rgba(0,123,255,0.75)',
      }]
    },
    options: {
      responsive: true,
  legend: {
        display: true,
        position: 'top',
        labels: {
          fontFamily: 'Montserrat',
          fontSize: 12
        }
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            display: true,
            drawBorder: false,
            color: 'rgba(0,0,0,0.1)'
          },
          ticks: {
            fontFamily: 'Montserrat',
            fontSize: 11
          }
        }],
        yAxes: [{
          display: true,
          gridLines: {
            display: true,
            drawBorder: false,
            color: 'rgba(0,0,0,0.1)'
          },
          scaleLabel: {
            display: true,
            labelString: 'Depresyon Seviyesi',
            fontFamily: 'Montserrat',
            fontSize: 12
          },
          ticks: {
            beginAtZero: false,
            max: 60,
            min: 0,
            fontFamily: 'Montserrat',
            fontSize: 11
          }
        }]
      }
    }
  });

  // Eğitim Seviyesine Göre Ortalama Stres Skoru
  var ctx = document.getElementById("singelBarChart");
  ctx.height = 300;
  var myChart = new Chart(ctx, {
    type: 'bar',
        data: {
      labels: ["İlkokul", "Ortaokul", "Lise", "Üniversite"],
          datasets: [{
        label: "Ortalama Stres Skoru",
        data: [31.05, 29.26, 27.66, 26.40],
        borderColor: "rgba(0, 194, 146, 0.9)",
        borderWidth: "0",
        backgroundColor: "rgba(0, 194, 146, 0.5)"
          }]
        },
        options: {
      responsive: true,
          legend: {
        display: true,
        position: 'top',
        labels: {
          fontFamily: 'Montserrat',
          fontSize: 12
        }
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: {
            fontFamily: 'Montserrat',
            fontSize: 11,
            maxRotation: 45,
            minRotation: 45
          }
            }],
            yAxes: [{
              display: true,
              gridLines: {
            display: true,
            drawBorder: false,
            color: 'rgba(0,0,0,0.1)'
          },
          ticks: {
            beginAtZero: true,
            fontFamily: 'Montserrat',
            fontSize: 11
          },
          scaleLabel: {
            display: true,
            labelString: 'Stres Skoru',
            fontFamily: 'Montserrat',
            fontSize: 12
            }
        }]
          }
        }
      });

  // En Çok Aynı Cevabı Alan Sorular
  var ctx = document.getElementById("radarChart");
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["Q1A", "Q2A", "Q3A", "Q4A", "Q5A", "Q6A", "Q7A", "Q8A", "Q9A", "Q10A",
               "Q11A", "Q12A", "Q13A", "Q14A", "Q15A", "Q16A", "Q17A", "Q18A", "Q19A", "Q20A",
               "Q21A", "Q22A", "Q23A", "Q24A", "Q25A", "Q26A", "Q27A", "Q28A", "Q29A", "Q30A",
               "Q31A", "Q32A", "Q33A", "Q34A", "Q35A", "Q36A", "Q37A", "Q38A", "Q39A", "Q40A",
               "Q41A", "Q42A"],
      datasets: [{
        label: "Soru Tekrar Sayıları",
        data: [13320, 14385, 14062, 17757, 12794, 13291, 18092, 13471, 11788, 11007,
               13598, 12601, 13922, 12535, 19587, 11696, 13509, 12789, 18506, 11946,
               12694, 14327, 25111, 13790, 13569, 11979, 12889, 12734, 12280, 12535,
               14022, 14441, 13146, 13064, 15373, 12517, 11580, 12551, 14405, 12219,
               17323, 12886],
        borderColor: "rgba(0, 194, 146, 0.6)",
        borderWidth: "1",
        backgroundColor: "rgba(0, 194, 146, 0.4)"
      }]
    },
    options: {
      responsive: true,
      legend: {
        display: true,
        position: 'top',
        labels: {
          fontFamily: 'Montserrat',
          fontSize: 12
        }
      },
      scale: {
        ticks: {
          beginAtZero: true,
          fontFamily: 'Montserrat',
          fontSize: 11
        }
      }
    }
  });

})(jQuery);