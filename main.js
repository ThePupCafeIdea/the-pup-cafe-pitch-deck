document.addEventListener("DOMContentLoaded", function () {
  // Element references
  const sliders = {
    dogCare: document.getElementById("dog-care"),
    workerShare: document.getElementById("worker-share"),
    socialGood: document.getElementById("social-good"),
    founderDraw: document.getElementById("founder-draw")
  };

  const values = {
    dogCare: document.getElementById("dog-care-value"),
    workerShare: document.getElementById("worker-share-value"),
    socialGood: document.getElementById("social-good-value"),
    founderDraw: document.getElementById("founder-draw-value")
  };

  const defaultValues = {
    dogCare: 40,
    workerShare: 30,
    socialGood: 15,
    founderDraw: 5
  };

  // Initialize Chart.js
  const ctx = document.getElementById("profit-chart").getContext("2d");
  const profitChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Dog Care", "Worker Share", "Social Good", "Founder Draw"],
      datasets: [{
        data: [
          defaultValues.dogCare,
          defaultValues.workerShare,
          defaultValues.socialGood,
          defaultValues.founderDraw
        ],
        backgroundColor: ["#ffda9e", "#a8dadc", "#bde0fe", "#cdb4db"],
        borderWidth: 1
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

  // Update display + chart when sliders change
  Object.keys(sliders).forEach(key => {
    sliders[key].addEventListener("input", () => {
      values[key].textContent = `${sliders[key].value}%`;
      updateChart();
    });
  });

  function updateChart() {
    profitChart.data.datasets[0].data = [
      parseInt(sliders.dogCare.value),
      parseInt(sliders.workerShare.value),
      parseInt(sliders.socialGood.value),
      parseInt(sliders.founderDraw.value)
    ];
    profitChart.update();
  }

  // Reset button
  document.getElementById("reset-values").addEventListener("click", () => {
    Object.keys(sliders).forEach(key => {
      sliders[key].value = defaultValues[key];
      values[key].textContent = `${defaultValues[key]}%`;
    });
    updateChart();
  });

  // Fade-in effect on scroll
  const fadeSections = document.querySelectorAll(".slide");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  fadeSections.forEach(section => {
    observer.observe(section);
  });
});