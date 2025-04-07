let chart;

const presets = {
  default: [40, 30, 15, 5],
  co_op: [33, 33, 33, 1],
  survival: [25, 15, 5, 10],
  grant: [45, 20, 25, 0]
};

function updateChart(presetName) {
  const values = presets[presetName] || presets["default"];
  chart.data.datasets[0].data = values;
  chart.update();
}

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("profitChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: [
        "Dog Care & Rescue",
        "Worker Profit Share",
        "Social Good Investments",
        "Founder Draw"
      ],
      datasets: [{
        data: presets.default,
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
});
