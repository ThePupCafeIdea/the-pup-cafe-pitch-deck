// Function to handle tab switching for financial scenarios
function openTab(evt, tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-button");

  tabs.forEach((tab) => tab.classList.remove("active"));
  buttons.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");

  // Update charts if needed based on the scenario selected
  updateProfitChart(tabId);
  updateRevenueChart(tabId);
}

// Chart presets for profit distribution
const profitPresets = {
  underperforming: [40, 30, 20, 10],
  average: [33, 33, 28, 6],
  overperforming: [45, 25, 20, 10]
};

// Revenue data for three years scenarios
const revenueData = {
  underperforming: {
    labels: ['Year 1', 'Year 2', 'Year 3'],
    data: [85000, 125000, 165000]
  },
  average: {
    labels: ['Year 1', 'Year 2', 'Year 3'],
    data: [150000, 210000, 280000]
  },
  overperforming: {
    labels: ['Year 1', 'Year 2', 'Year 3'],
    data: [250000, 320000, 450000]
  }
};

let profitChart, revenueChart;

// Initialize charts once the document is ready
document.addEventListener("DOMContentLoaded", () => {
  const profitCtx = document.getElementById("profitChart").getContext("2d");
  profitChart = new Chart(profitCtx, {
    type: "pie",
    data: {
      labels: ["Dog Care & Rescue", "Worker Profit Share", "Social Good Investments", "Founder Draw"],
      datasets: [{
        data: profitPresets.underperforming,
        backgroundColor: ["#f4a261", "#8ecae6", "#90be6d", "#ffb703"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  });

  const revenueCtx = document.getElementById("revenueChart").getContext("2d");
  revenueChart = new Chart(revenueCtx, {
    type: "bar",
    data: {
      labels: revenueData.underperforming.labels,
      datasets: [{
        label: "Revenue",
        data: revenueData.underperforming.data,
        backgroundColor: "#8ecae6"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) { return '$' + value.toLocaleString(); }
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
});

// Update the profit chart data based on scenario
function updateProfitChart(scenario) {
  const newData = profitPresets[scenario] || profitPresets.underperforming;
  profitChart.data.datasets[0].data = newData;
  profitChart.update();
}

// Update the revenue chart data based on scenario
function updateRevenueChart(scenario) {
  const newRevenue = revenueData[scenario] || revenueData.underperforming;
  revenueChart.data.labels = newRevenue.labels;
  revenueChart.data.datasets[0].data = newRevenue.data;
  revenueChart.update();
}
