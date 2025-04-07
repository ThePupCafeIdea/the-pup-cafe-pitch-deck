function openTab(evt, tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-button");

  tabs.forEach((tab) => tab.classList.remove("active"));
  buttons.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}
