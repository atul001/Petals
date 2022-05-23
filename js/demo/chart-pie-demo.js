// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["New Admission", "Cancel"],
    datasets: [{
      data: [78, 22],
      backgroundColor: ['#3db24b', '#ff6700'],
      hoverBackgroundColor: ['#3db24b', '#ff6700' ],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
// Pie Chart Example2
var ctx = document.getElementById("myPieChart_2");
var myPieChart_2 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Fee Pay", "Fee due"],
    datasets: [{
      data: [78, 22],
      backgroundColor: ['#3db24b', '#ff6700'],
      hoverBackgroundColor: ['#3db24b', '#ff6700' ],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

// Pie Chart Example3
var ctx = document.getElementById("myPieChart_3");
var myPieChart_3 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Excelent", "Good", "Avarage", "Average"],
    datasets: [{
      data: [75, 10, 10, 5],
      backgroundColor: ['#3db24b', '#ff6700', '#c4515b', '#ff878d'],
      hoverBackgroundColor: ['#3db24b', '#ff6700', '#ddd', '#555'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
