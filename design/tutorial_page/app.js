const closeSidebarButton = document.getElementById("closeSidebarButton");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
closeSidebarButton.addEventListener("click", event => {
    sidebar.classList.add("hidden");
    content.classList.add("expanded");
});
