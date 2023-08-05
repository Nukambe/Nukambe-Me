export const fadeIn = function (element, fade) {
    element.classList.remove(fade);
}

export const fadeOut = function (element, fade) {
    element.classList.add(fade);
}

// HOME
export const showHome = function (home, head) {
    head.title.innerText = 'Wesley Chappell - Software Engineer';

    fadeIn(home.title, 'faded-right');
    fadeIn(home.signature, 'faded-out');
}

export const hideHome = function (home) {
    fadeOut(home.title, 'faded-right');
    fadeOut(home.signature, 'faded-out');
}

// ABOUT
export const showAbout = function (about, head) {
    head.title.innerText = 'Wesley Chappell - About';
}

export const hideAbout = function (about) {
    return;
}

//WORK
export const showWork = function (work, head) {
    head.title.innerText = 'Wesley Chappell - Work';
    return;
}

export const hideWork = function (work) {
    return;
}

//CONTACT
export const showContact = function (contact, head) {
    head.title.innerText = 'Wesley Chappell - Contact';
    return;
}

export const hideContact = function (contact) {
    return;
}
