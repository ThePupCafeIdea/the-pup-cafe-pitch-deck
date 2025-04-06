document.addEventListener("DOMContentLoaded", function () {
  const sliders = {
    dogCare: document.getElementById("dog-care"),
    workerShare: document.getElementById("worker-share"),
    socialGood: document.getElementById("social-good"),
    communityInitiatives: document.getElementById("community-initiatives"),
    sustainability: document.getElementById("sustainability")
  };

  const labels = {
    dogCare: document.getElementById("dog-care-value"),
    workerShare: document.getElementById("worker-share-value"),
    socialGood: document.getElementById("social-good-value"),
    communityInitiatives: document.getElementById("community-initiatives-value"),
    sustainability: document.getElementById("sustainability-value")
  };

  const defaultValues = {
    dogCare: 40,
    workerShare: 30,
    socialGood: 15,
    communityInitiatives: 10,
    sustainability: 5
  };

  // Chart setup
  const ctx = document.getElementById("profit-chart").getContext("2d");
  const profitChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: [
        "Dog Care",
        "Worker Share",
        "Social Good",
        "Community Initiatives",
        "Sustainability"
      ],
      datasets: [{
        data: Object.values(defaultValues),
        backgroundColor: [
          "#ffda9e", "#a8dadc", "#bde0fe", "#ffd6e0", "#d8f3dc"
        ],
        borderColor: "#fff",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#444",
            font: { size: 14 }
          }
        }
      }
    }
  });

  // Update chart + label on slider input
  Object.keys(sliders).forEach(key => {
    sliders[key].addEventListener("input", () => {
      const value = parseInt(sliders[key].value);
      labels[key].textContent = `${value}%`;
      updateChart();
    });
  });

  function updateChart() {
    const newData = Object.keys(sliders).map(key => parseInt(sliders[key].value));
    profitChart.data.datasets[0].data = newData;
    profitChart.update();
  }

  // Reset values
  document.getElementById("reset-values").addEventListener("click", () => {
    Object.keys(defaultValues).forEach(key => {
      sliders[key].value = defaultValues[key];
      labels[key].textContent = `${defaultValues[key]}%`;
    });
    updateChart();
  });

  // Fade-in scroll animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".slide").forEach(slide => observer.observe(slide));
});