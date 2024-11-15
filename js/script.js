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
// 
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  const labLinks = document.querySelectorAll(".lab-link");

  // Hàm hiển thị tab
  const showTab = (tabId) => {
      tabContents.forEach(content => content.classList.remove("active"));
      tabs.forEach(tab => tab.classList.remove("active"));

      const activeTabContent = document.getElementById(tabId);
      const activeTabButton = document.querySelector(`.tab[data-tab="${tabId}"]`);

      if (activeTabContent && activeTabButton) {
          activeTabContent.classList.add("active");
          activeTabButton.classList.add("active");
      }
  };

  // Xử lý click vào tab
  tabs.forEach(tab => {
      tab.addEventListener("click", () => {
          const targetTab = tab.dataset.tab;
          showTab(targetTab);
          history.pushState({ tab: targetTab }, "", `#${targetTab}`);
      });
  });

  // Xử lý click vào lab link
  labLinks.forEach(link => {
      link.addEventListener("click", (event) => {
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          const labUrl = link.href;

          // Chuyển hướng tới lab
          window.location.href = labUrl;

          // Lưu trạng thái để quay lại đúng tab
          history.pushState({ tab: "tab2" }, "", "#tab2");
      });
  });

  // Xử lý khi nhấn nút "Back"
  window.addEventListener("popstate", (event) => {
      const tabId = event.state?.tab || "tab1";
      showTab(tabId);
  });

  // Hiển thị tab dựa trên URL ban đầu
  const initialTab = location.hash.replace("#", "") || "tab1";
  showTab(initialTab);
});

