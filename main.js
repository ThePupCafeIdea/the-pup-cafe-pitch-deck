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