// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Impressions by Country Area Chart
var ctx = document.getElementById("imTrendAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Impressions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Country Bar Chart
var ctx = document.getElementById("imTrendBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Impressions",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Country Area Chart
var ctx = document.getElementById("imCountryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Impressions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Country Bar Chart
var ctx = document.getElementById("imCountryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Impressions",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by OS Area Chart
var ctx = document.getElementById("imOSAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Impressions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by OS Bar Chart
var ctx = document.getElementById("imOSBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Impressions",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Manufacturer Area Chart
var ctx = document.getElementById("imManufacturerAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Impressions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Manufacturer Bar Chart
var ctx = document.getElementById("imManufacturerBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Impressions",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Category Area Chart
var ctx = document.getElementById("imCategoryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Impressions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Category Bar Chart
var ctx = document.getElementById("imCategoryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Impressions",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Language Area Chart
var ctx = document.getElementById("imLanguageAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Impressions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Language Bar Chart
var ctx = document.getElementById("imLanguageBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Impressions",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks Trend Area Chart
var ctx = document.getElementById("clTrendAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Clicks",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks Trend Bar Chart
var ctx = document.getElementById("clTrendBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Clicks",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by Country Area Chart
var ctx = document.getElementById("clCountryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Clicks",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by Country Bar Chart
var ctx = document.getElementById("clCountryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Clicks",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by OS Area Chart
var ctx = document.getElementById("clOSAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Clicks",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by OS Bar Chart
var ctx = document.getElementById("clOSBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Clicks",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by Manufacturer Area Chart
var ctx = document.getElementById("clManufacturerAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Clicks",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by Manufacturer Bar Chart
var ctx = document.getElementById("clManufacturerBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Clicks",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by Category Area Chart
var ctx = document.getElementById("clCategoryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Clicks",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by Category Bar Chart
var ctx = document.getElementById("clCategoryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Clicks",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by Language Area Chart
var ctx = document.getElementById("clLanguageAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "Clicks",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Clicks by Language Bar Chart
var ctx = document.getElementById("clLanguageBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "Clicks",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// -- CTR Trend Area Chart
var ctx = document.getElementById("ctrTrendAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CTR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR Trend Bar Chart
var ctx = document.getElementById("ctrTrendBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CTR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by Country Area Chart
var ctx = document.getElementById("ctrCountryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CTR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by Country Bar Chart
var ctx = document.getElementById("ctrCountryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CTR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by OS Area Chart
var ctx = document.getElementById("ctrOSAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CTR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by OS Bar Chart
var ctx = document.getElementById("ctrOSBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CTR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by Manufacturer Area Chart
var ctx = document.getElementById("ctrManufacturerAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CTR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by Manufacturer Bar Chart
var ctx = document.getElementById("ctrManufacturerBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CTR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by Category Area Chart
var ctx = document.getElementById("ctrCategoryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CTR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by Category Bar Chart
var ctx = document.getElementById("ctrCategoryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CTR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by Language Area Chart
var ctx = document.getElementById("ctrLanguageAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CTR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CTR by Language Bar Chart
var ctx = document.getElementById("ctrLanguageBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CTR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


// -- CPC Trend Area Chart
var ctx = document.getElementById("cpcTrendAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "IBA",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CPC Trend Bar Chart
var ctx = document.getElementById("cpcTrendBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "IBA",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR Trend Area Chart
var ctx = document.getElementById("cvrTrendAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CVR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR Trend Bar Chart
var ctx = document.getElementById("cvrTrendBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CVR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by Country Area Chart
var ctx = document.getElementById("cvrCountryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CVR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by Country Bar Chart
var ctx = document.getElementById("cvrCountryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CVR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by OS Area Chart
var ctx = document.getElementById("cvrOSAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CVR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by OS Bar Chart
var ctx = document.getElementById("cvrOSBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CVR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by Manufacturer Area Chart
var ctx = document.getElementById("cvrManufacturerAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CVR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by Manufacturer Bar Chart
var ctx = document.getElementById("cvrManufacturerBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CVR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by Category Area Chart
var ctx = document.getElementById("cvrCategoryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CVR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by Category Bar Chart
var ctx = document.getElementById("cvrCategoryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CVR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by Language Area Chart
var ctx = document.getElementById("cvrLanguageAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "CVR",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- CVR by Language Bar Chart
var ctx = document.getElementById("cvrLanguageBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "CVR",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// -- Spend Trend Area Chart
var ctx = document.getElementById("spnTrendAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "IBA",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend Trend Bar Chart
var ctx = document.getElementById("spnTrendBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "IBA",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by Country Area Chart
var ctx = document.getElementById("spnCountryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "IBA",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by Country Bar Chart
var ctx = document.getElementById("spnCountryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "IBA",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by OS Area Chart
var ctx = document.getElementById("spnOSAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "IBA",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by OS Bar Chart
var ctx = document.getElementById("spnOSBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "IBA",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by Manufacturer Area Chart
var ctx = document.getElementById("spnManufacturerAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "IBA",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by Manufacturer Bar Chart
var ctx = document.getElementById("spnManufacturerBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "IBA",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by Category Area Chart
var ctx = document.getElementById("spnCategoryAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "IBA",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by Category Bar Chart
var ctx = document.getElementById("spnCategoryBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "IBA",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by Language Area Chart
var ctx = document.getElementById("spnLanguageAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["August 1", "August 2", "August 3", "August 4", "August 5", "August 6"],
    datasets: [{
      label: "IBA",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Spend by Language Bar Chart
var ctx = document.getElementById("spnLanguageBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["July 2018", "August 2018", "September 2018", "October 2018", "November 2018", "December 2018"],
    datasets: [{
      label: "IBA",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 9821, 6251, 7841, 5312, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Impressions by Country Pie Chart
var ctx = document.getElementById("imCountryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["United States", "United Kingdom", "China", "Russia"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- Clicks by Country Pie Chart
var ctx = document.getElementById("clCountryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["United States", "United Kingdom", "China", "Russia"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- CTR by Country Pie Chart
var ctx = document.getElementById("ctrCountryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["United States", "United Kingdom", "China", "Russia"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- Spend by Country Pie Chart
var ctx = document.getElementById("spnCountryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["United States", "United Kingdom", "China", "Russia"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- CVR by Country Pie Chart
var ctx = document.getElementById("cvrCountryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["United States", "United Kingdom", "China", "Russia"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- Impressions by Manufacturer Pie Chart
var ctx = document.getElementById("imManufacturerPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Apple", "Samsung", "Xiaomi", "Meizu"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- Clicks by Manufacturer Pie Chart
var ctx = document.getElementById("clManufacturerPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Apple", "Samsung", "Xiaomi", "Meizu"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- CTR by Manufacturer Pie Chart
var ctx = document.getElementById("ctrManufacturerPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Apple", "Samsung", "Xiaomi", "Meizu"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- Spend by Manufacturer Pie Chart
var ctx = document.getElementById("spnManufacturerPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Apple", "Samsung", "Xiaomi", "Meizu"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- CVR by Manufacturer Pie Chart
var ctx = document.getElementById("cvrManufacturerPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Apple", "Samsung", "Xiaomi", "Meizu"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});



// -- Impressions by Category Pie Chart
var ctx = document.getElementById("imCategoryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Business", "Communication", "Education", "Finance"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- Clicks by Category Pie Chart
var ctx = document.getElementById("clCategoryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Business", "Communication", "Education", "Finance"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- CTR by Category Pie Chart
var ctx = document.getElementById("ctrCategoryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Business", "Communication", "Education", "Finance"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- Spend by Category Pie Chart
var ctx = document.getElementById("spnCategoryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Business", "Communication", "Education", "Finance"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- CVR by Category Pie Chart
var ctx = document.getElementById("cvrCategoryPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Business", "Communication", "Education", "Finance"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});



// -- Impressions by Language Pie Chart
var ctx = document.getElementById("imLanguagePieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["English", "Chinese", "Spanish", "French"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- Clicks by Language Pie Chart
var ctx = document.getElementById("clLanguagePieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["English", "Chinese", "Spanish", "French"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- CTR by Language Pie Chart
var ctx = document.getElementById("ctrLanguagePieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["English", "Chinese", "Spanish", "French"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- Spend by Language Pie Chart
var ctx = document.getElementById("spnLanguagePieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["English", "Chinese", "Spanish", "French"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});

// -- CVR by Language Pie Chart
var ctx = document.getElementById("cvrLanguagePieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["English", "Chinese", "Spanish", "French"],
    datasets: [{
      data: [43, 26, 19, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});


// -- Impressions by OS Pie Chart
var ctx = document.getElementById("imOSPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["iOS", "Android"],
    datasets: [{
      data: [50, 50],
      backgroundColor: ['#007bff', '#dc3545'],
    }],
  },
});

// -- Clicks by OS Pie Chart
var ctx = document.getElementById("clOSPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["iOS", "Android"],
    datasets: [{
      data: [50, 50],
      backgroundColor: ['#007bff', '#dc3545'],
    }],
  },
});

// -- CTR by OS Pie Chart
var ctx = document.getElementById("ctrOSPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["iOS", "Android"],
    datasets: [{
      data: [50, 50],
      backgroundColor: ['#007bff', '#dc3545'],
    }],
  },
});

// -- Spend by OS Pie Chart
var ctx = document.getElementById("spnOSPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["iOS", "Android"],
    datasets: [{
      data: [50, 50],
      backgroundColor: ['#007bff', '#dc3545'],
    }],
  },
});

// -- CVR by OS Pie Chart
var ctx = document.getElementById("cvrOSPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["iOS", "Android"],
    datasets: [{
      data: [50, 50],
      backgroundColor: ['#007bff', '#dc3545'],
    }],
  },
});