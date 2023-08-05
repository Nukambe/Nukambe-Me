export const fadeIn = function (element, fade) {
    element.classList.remove(fade);
}

export const fadeOut = function (element, fade) {
    element.classList.add(fade);
}

export const showHome = function (home) {
    fadeIn(home.title, 'faded-right');
    fadeIn(home.signature, 'faded-out');
}

export const hideHome = function (home) {
    fadeOut(home.title, 'faded-right');
    fadeOut(home.signature, 'faded-out');
}
