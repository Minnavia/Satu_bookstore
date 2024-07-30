
function menuToggle() {
    const menuButton = document.getElementById("menu_button")
    const mainNavigation = document.getElementById("nav_main")
    const firstLink = document.getElementById("focus")
    if (mainNavigation.className === "nav_main") {
        mainNavigation.className += " responsive";
        menuButton.setAttribute('aria-expanded', "true");
        firstLink.focus()
    } else {
        mainNavigation.className = "nav_main";
        menuButton.setAttribute('aria-expanded', "false")
    }
}

document.addEventListener("keydown", function(e) {
    const menuButton = document.getElementById("menu_button")
    const mainNavigation = document.getElementById("nav_main")
    if (e.key == "Escape") {
        mainNavigation.className = "nav_main";
        menuButton.setAttribute('aria-expanded', "false")
        menuButton.focus();
    }
})

function submitSurvey() {
    alert('Thanks for answering our survey!');
}