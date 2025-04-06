// Default values
const defaultValues = {
  dogCare: 40,
  workerShare: 30,
  socialGood: 15,
  founderDraw: 5
};

// Elements
const dogInput = document.getElementById("dog-care");
const workerInput = document.getElementById("worker-share");
const socialInput = document.getElementById("social-good");
const founderInput = document.getElementById("founder-draw");

const dogValue = document.getElementById("dog-care-value");
const workerValue = document.getElementById("worker-share-value");
const socialValue = document.getElementById("social-good-value");
const founderValue = document.getElementById("founder-draw-value");

const resetBtn = document.getElementById("reset-values");

// Update text labels + chart
function updateLabels() {
  dogValue.textContent = `${dogInput.value}%`;
  workerValue.textContent = `${workerInput.value}%`;
  socialValue.textContent = `${socialInput.value}%`;
  founderValue.textContent = `${founderInput.value}%`;

  updateChart();
}

// Reset to defaults
resetBtn.addEventListener("click", () => {
  dogInput.value = defaultValues.dogCare;
  workerInput.value = defaultValues.workerShare;
  socialInput.value = defaultValues.socialGood;
  founderInput.value = defaultValues.founderDraw;
  updateLabels();
});

// Event listeners
[dogInput, workerInput, socialInput, founderInput].forEach(input => {
  input.addEventListener("input", updateLabels);
});

// Chart.js setup
let chart;
function updateChart() {
  const data = {
    labels: ["Dog Care", "Worker Share", "Social Good", "Founder Draw"],
    datasets: [{
      data: [
        parseInt(dogInput.value),
        parseInt(workerInput.value),
        parseInt(socialInput.value),
        parseInt(founderInput.value)
      ],
      backgroundColor: ["#d4a373", "#8ecae6", "#90be6d", "#f28482"]
    }]
  };

  if (chart) {
    chart.data = data;
    chart.update();
  } else {
    const ctx = document.getElementById("profit-chart").getContext("2d");
    chart = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom"
          }
        }
      }
    });
  }
}

// Initialize on load
window.addEventListener("DOMContentLoaded", () => {
  updateLabels();
});
