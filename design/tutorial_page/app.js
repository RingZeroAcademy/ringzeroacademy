const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const toggleSidebarButton = document.getElementById("toggleSidebarButton");
toggleSidebarButton.addEventListener("click", event => {
    sidebar.classList.toggle("display");
    content.classList.toggle("shrink");
});

// Sidebar responsiveness.
const windowSizeQuery = window.matchMedia("(min-width: 641px)");
function toggleSidebar(event) {
    /*
    Hides or displays the sidebar based on the screen size.
    The sidebar is hidden for screens less than 641px and displayed
    for larger screens.

    Param event:
        A MediaQueryList or MediaQueryListEvent object returned from
        a media query with this media query string "(min-width: 641px)".
    */
    if (event.matches) {
        sidebar.classList.add("display");
        content.classList.add("shrink");
    } else {
        sidebar.classList.remove("display");
        content.classList.remove("shrink");
    }
}
toggleSidebar(windowSizeQuery);
windowSizeQuery.addEventListener("change", toggleSidebar);

