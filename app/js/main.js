const mediaSmallScreen = window.matchMedia("(max-width: 820px)");
function toSmallScreen(mediaQuery) {
    if (mediaQuery.matches) {
        let headlineContent = document.querySelector(".headline__content");
        headlineContent.prepend(headlineContent.querySelector(".headline__title"));
    }
}
toSmallScreen(mediaSmallScreen);
mediaSmallScreen.addListener(toSmallScreen);
