
      var options = {
          series: [{
          name: 'Painting',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Artists',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#my-revenue"), options);
        chart.render();

        var options = {
          series: [{
          data:[11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC'],
        title: {
          text: '$424,652',
          offsetX: 0,
          style: {
            fontSize: '24px',
          }
        },
        subtitle: {
          text: 'Sales',
          offsetX: 0,
          style: {
            fontSize: '14px',
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart-spark1"), options);
        chart.render();
      
        var optionsSpark2 = {
          series: [{
          data:[11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC'],
        title: {
          text: '$235,312',
          offsetX: 0,
          style: {
            fontSize: '24px',
          }
        },
        subtitle: {
          text: 'Expenses',
          offsetX: 0,
          style: {
            fontSize: '14px',
          }
        }
        };

        var chartSpark2 = new ApexCharts(document.querySelector("#chart-spark2"), optionsSpark2);
        chartSpark2.render();
      
        var optionsSpark3 = {
          series: [{
          data:[11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        xaxis: {
          crosshairs: {
            width: 1
          },
        },
        yaxis: {
          min: 0
        },
        title: {
          text: '$135,965',
          offsetX: 0,
          style: {
            fontSize: '24px',
          }
        },
        subtitle: {
          text: 'Profits',
          offsetX: 0,
          style: {
            fontSize: '14px',
          }
        }
        };

        var chartSpark3 = new ApexCharts(document.querySelector("#chart-spark3"), optionsSpark3);
        chartSpark3.render();
