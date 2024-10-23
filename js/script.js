// JavaScript for tab functionality
const tabs = document.querySelectorAll(".tab");
console.log(tabs);
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove 'active' class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Remove 'active' class from all content
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add 'active' class to the clicked tab and corresponding content
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
