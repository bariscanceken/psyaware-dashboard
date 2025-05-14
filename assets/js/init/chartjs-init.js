( function ( $ ) {
    "use strict";

    //Team chart
    var ctx = document.getElementById( "team-chart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2012", "2013", "2014", "2015", "2016", "2017", "2018" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                data: [ 0, 7, 3, 5, 2, 8, 6 ],
                label: "Expense",
                backgroundColor: 'rgba(0,200,155,.35)',
                borderColor: 'rgba(0,200,155,0.60)',
                borderWidth: 3.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(0,200,155,0.60)',
                    },
                    {
                data: [ 0, 6, 3, 4, 3, 7, 10 ],
                label: "Profit",
                backgroundColor: 'rgba(0,194,146,.25)',
                borderColor: 'rgba(0,194,146,0.5)',
                borderWidth: 3.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(0,194,146,0.5)',
                    }, ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                        } ]
            },
            title: {
                display: false,
            }
        }
    } );


    //Sales chart
    var ctx = document.getElementById( "sales-chart" );
    ctx.height = 300;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "79", "80", "82", "89"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
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
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                    padding: 20,
                    boxWidth: 10
                },
            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Yaş',
                        fontFamily: 'Montserrat',
                        fontSize: 12
                    },
                    ticks: {
                        fontFamily: 'Montserrat',
                        fontSize: 11,
                        maxTicksLimit: 10
                    }
                }],
                yAxes: [ {
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
            },
            title: {
                display: false
            }
        }
    } );







    //line chart
    var ctx = document.getElementById( "lineChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "January", "February", "March", "April", "May", "June", "July" ],
            datasets: [
                {
                    label: "My First dataset",
                    borderColor: "rgba(0,0,0,.09)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0,0,0,.07)",
                    data: [ 20, 47, 35, 43, 65, 45, 35 ]
                            },
                {
                    label: "My Second dataset",
                    borderColor: "rgba(0, 194, 146, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 194, 146, 0.5)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [ 16, 32, 18, 27, 42, 33, 44 ]
                            }
                        ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    } );


    //bar chart
    var ctx = document.getElementById( "barChart" );
    //    ctx.height = 200;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 65, 59, 80, 81, 56, 55, 45 ],
                    borderColor: "rgba(0, 194, 146, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 194, 146, 0.5)"
                            },
                {
                    label: "My Second dataset",
                    data: [ 28, 48, 40, 19, 86, 27, 76 ],
                    borderColor: "rgba(0,0,0,0.09)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0,0,0,0.07)"
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                                } ]
            }
        }
    } );

    //radar chart
    var ctx = document.getElementById( "radarChart" );
    ctx.height = 160;
    var myChart = new Chart( ctx, {
        type: 'radar',
        data: {
            labels: [ [ "Eating", "Dinner" ], [ "Drinking", "Water" ], "Sleeping", [ "Designing", "Graphics" ], "Coding", "Cycling", "Running" ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 65, 70, 66, 45, 5, 55, 40 ],
                    borderColor: "rgba(0, 194, 146, 0.6)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 194, 146, 0.4)"
                            },
                {
                    label: "My Second dataset",
                    data: [ 28, 5, 55, 19, 63, 27, 68 ],
                    borderColor: "rgba(0, 194, 146, 0.7",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 194, 146, 0.5)"
                            }
                        ]
        },
        options: {
            legend: {
                position: 'top'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });


    //pie chart
    var ctx = document.getElementById( "pieChart" );
    ctx.height = 300;
    var myChart = new Chart( ctx, {
        type: 'pie',
        data: {
            datasets: [ {
                data: [ 45, 25, 20, 10 ],
                backgroundColor: [
                                    "rgba(0, 194, 146,0.9)",
                                    "rgba(0, 194, 146,0.7)",
                                    "rgba(0, 194, 146,0.5)",
                                    "rgba(0,0,0,0.07)"
                                ],
                hoverBackgroundColor: [
                                    "rgba(0, 194, 146,0.9)",
                                    "rgba(0, 194, 146,0.7)",
                                    "rgba(0, 194, 146,0.5)",
                                    "rgba(0,0,0,0.07)"
                                ]

                            } ],
            labels: [
                            "green",
                            "green",
                            "green"
                        ]
        },
        options: {
            responsive: true
        }
    } );

    //doughut chart
    var ctx = document.getElementById( "doughutChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'doughnut',
        data: {
            datasets: [ {
                data: [ 35, 40, 20, 5 ],
                backgroundColor: [
                                    "rgba(0, 194, 146,0.9)",
                                    "rgba(0, 194, 146,0.7)",
                                    "rgba(0, 194, 146,0.5)",
                                    "rgba(0,0,0,0.07)"
                                ],
                hoverBackgroundColor: [
                                    "rgba(0, 194, 146,0.9)",
                                    "rgba(0, 194, 146,0.7)",
                                    "rgba(0, 194, 146,0.5)",
                                    "rgba(0,0,0,0.07)"
                                ]

                            } ],
            labels: [
                            "green",
                            "green",
                            "green",
                            "green"
                        ]
        },
        options: {
            responsive: true
        }
    } );

    //polar chart
    var ctx = document.getElementById( "polarChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'polarArea',
        data: {
            datasets: [ {
                data: [ 15, 18, 10, 7, 19],
                backgroundColor: [
                                    "rgba(0, 194, 146,0.9)",
                                    "rgba(0, 194, 146,0.8)",
                                    "rgba(0, 194, 146,0.7)",
                                    "rgba(0,0,0,0.2)",
                                    "rgba(0, 194, 146,0.5)"
                                ]

                            } ],
            labels: [
                            "green",
                            "green",
                            "green",
                            "green"
                        ]
        },
        options: {
            responsive: true
        }
    } );

    // single bar chart
    var ctx = document.getElementById( "singelBarChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat" ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 55, 50, 75, 80, 56, 55, 60 ],
                    borderColor: "rgba(0, 194, 146, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 194, 146, 0.5)"
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    }
                                } ]
            }
        }
    } );




} )( jQuery );