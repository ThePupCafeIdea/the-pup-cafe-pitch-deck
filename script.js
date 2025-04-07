let chart;

function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tab-button');

  tabContents.forEach(tab => tab.classList.remove('active'));
  tabButtons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');

  // Optional: update chart based on scenario
  if (tabName === 'underperforming') updateChart('default');
  if (tabName === 'average') updateChart('survival');
  if (tabName === 'overperforming') updateChart('grant');
}

const presets = {
  default: [40, 30, 15, 5],
  survival: [25, 25, 15, 5],
  grant: [45, 25, 25, 5]
};

function updateChart(presetName) {
  const values = presets[presetName] || presets["default"];
  chart.data.datasets[0].data = values;
  chart.update();
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("profitChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
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
