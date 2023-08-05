const fadeIn = function (element, fade) {
    element.classList.add(fade);
}

const fadeOut = function (element, fade) {
    element.classList.remove(fade);
}

const attachToParent = function (element, parent) {
    parent.append(element);
}

// HOME
export const showHome = function (home, head) {
    head.title.innerText = 'Wesley Chappell - Software Engineer';

    fadeIn(home.title, 'fadein-right');
    fadeIn(home.signature, 'faded-in');
}

export const hideHome = function (home) {
    fadeOut(home.title, 'fadein-right');
    fadeOut(home.signature, 'faded-in');
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
    fadeIn(contact.qr, 'faded-in');
    fadeIn(contact.details, 'faded-in');
    fadeIn(contact.socials, 'faded-in');
    return;
}

export const hideContact = function (contact) {
    fadeOut(contact.qr, 'faded-in');
    fadeOut(contact.details, 'faded-in');
    fadeOut(contact.socials, 'faded-in');
    return;
}

export const ShowLinkDescription = function (link, description) {
    fadeIn(description, '--visible');
    attachToParent(description, link);
}

export const hideLinkDescription = function (description) {
    fadeOut(description, '--visible');
}
