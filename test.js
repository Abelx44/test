var data = generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, {
  min: 30,
  max: 90
});
var options1 = {
  chart: {
    id: "chart2",
    type: "area",
    height: 230,
    foreColor: "#ccc",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#00BAEC"],
  stroke: {
    width: 3
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },
  markers: {
    size: 0, // Set the size to 0 to remove the dots
    colors: ["#000524"],
    strokeColor: "#00BAEC",
    strokeWidth: 3
  },
  series: [
    {
      data: data
    }
  ],
  tooltip: {
    theme: "dark"
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    tickAmount: 4
  }
};


var chart1 = new ApexCharts(document.querySelector("#chart-area"), options1);

chart1.render();

// Sample volume data for 4-25-2024
var dummyVolumeDataHigh = [200, 100, 500, 300, 400, 600, 150, 200]; // Assuming the first value corresponds to 4-25-2024

// Determine the color for each bar based on volume values
var colors = dummyVolumeDataHigh.map(value => {
  return value >= 150 ? "#20D82D" : "#FF0000"; // Green for values >= 150, red otherwise
});

// Dummy price data (for visualization purposes)
var dummyVolumeDataLow = [50, 80, 250, 150, 200, 300, 50, 150]; // Sample price data corresponding to dummyVolumeDataHigh

var options2 = {
  chart: {
    id: "chart1",
    height: 230,
    type: "bar",
    foreColor: "#ccc",
  },
  colors: colors, // Use dynamically determined colors
  series: [
    {
      name: "High Volume", // High Volume series name
      data: dummyVolumeDataHigh // High Volume data for 4-25-2024
    },
    {
      name: "Low Volume", // Low Volume series name
      data: dummyVolumeDataLow // Low Volume data for visualization
    }
  ],
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: 0,
            to: 150,
            color: "#FF0000" // Red color for low values
          },
          {
            from: 151,
            to: 300,
            color: "#20D82D" // Green color for high values
          }
        ]
      }
    }
  },
  stroke: {
    width: 2
  },
  grid: {
    borderColor: "#444"
  },
  markers: {
    size: 0
  },
  xaxis: {
    categories: ['Volume', 'Volume'], // Dummy categories for bars
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 4
  }
};


var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);

chart2.render();

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
