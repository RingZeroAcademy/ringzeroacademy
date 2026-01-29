const openSidebarButton = document.getElementById("openSidebarButton");
const closeSidebarButton = document.getElementById("closeSidebarButton");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

closeSidebarButton.addEventListener("click", event => {
    sidebar.classList.add("hidden");
    content.classList.add("expanded");
});

openSidebarButton.addEventListener("click", event => {
    sidebar.classList.remove("hidden");
    content.classList.remove("expanded");
});
