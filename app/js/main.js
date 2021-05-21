const mediaSmallScreen = window.matchMedia("(max-width: 820px)");
const mediaDesktopScreen = window.matchMedia("(min-width: 821px)");

function toSmallScreen(mediaQuery) {
    if (mediaQuery.matches) {
        let headlineContent = document.querySelector(".headline__content");
        headlineContent.prepend(headlineContent.querySelector(".headline__title"));
    }
}

function toDesktopScreen(mediaQuery) {
    if (mediaQuery.matches) {
        document.querySelector(".headline__column-content")
            .prepend(document.querySelector(".headline__title"));
    }
}
toSmallScreen(mediaSmallScreen);
mediaSmallScreen.addListener(toSmallScreen);
mediaDesktopScreen.addListener(toDesktopScreen)



const mediaWideToMedium = window.matchMedia("(max-width: 1170px)");
function wideToMediumScreen(mediaQuery) {
    if (mediaQuery.matches) {
        document.querySelector(".top .container").append(document.querySelector(".top__link"));
    }
}
wideToMediumScreen(mediaWideToMedium);
mediaWideToMedium.addListener(wideToMediumScreen);


let navMenu = document.querySelector(".header__nav-menu");
// const mediaHideNavMenu = window.matchMedia("(max-width: 660px)");
// function hideNavMenu(mediaQuery) {
//     if (mediaQuery.matches) {
//         navMenu.classList.add("nav-menu_hidden");
//     }
// }
// hideNavMenu(mediaHideNavMenu);
// mediaHideNavMenu.addListener(hideNavMenu);

function openCloseMenu() {
    navMenu.classList.toggle("nav-menu_visible");
}
document.querySelector(".header__menu-btn").addEventListener("click", openCloseMenu);