function showsidebar() {
    const sidebarDiv = document.getElementById("navbarNavDropdown")
    sidebarDiv.classList.add('sidebar')
}

window.addEventListener("resize", screenSize);

function screenSize() {
    const availableWidth = window.innerWidth;
    const sidebarDiv = document.getElementById("navbarNavDropdown")
    if (availableWidth >= 992) {
        sidebarDiv.classList.remove('sidebar')
    } else {
        sidebarDiv.classList.add('sidebar')
    }

}
