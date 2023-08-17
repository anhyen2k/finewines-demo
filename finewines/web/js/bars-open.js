
    var navbarToggleButton = document.getElementById("navbar-toggle-button");
    var navBars = document.querySelector(".nav-bars");
    var navbarOverlay = document.getElementById("navbar-overlay");
    var closeButtons = document.querySelector(".close");

    navbarToggleButton.onclick = function () {

        navBars.classList.remove("close-nav")
        navbarOverlay.classList.remove("close-nav")

        navBars.classList.add("open-nav")
        navbarOverlay.classList.add("open-nav")
    };

    closeButtons.onclick = function () {
        navBars.classList.add("close-nav")
        navbarOverlay.classList.add("close-nav")

        navBars.classList.remove("open-nav")
        navbarOverlay.classList.remove("open-nav")
    }

    navbarOverlay.onclick = function () {
        navBars.classList.add("close-nav")
        navbarOverlay.classList.add("close-nav")

        navBars.classList.remove("open-nav")
        navbarOverlay.classList.remove("open-nav")
    }


