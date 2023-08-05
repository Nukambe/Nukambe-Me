import * as actions from './actions.js';

window.onload = () => {
    console.log('script loaded');

    // save page elements
    const head = {
        title: document.getElementsByTagName('title')[0]
    }

    const home = {
        button: document.getElementById('home-button'),
        title: document.getElementById('h1-wrapper'),
        signature: document.getElementById('signature-wrapper')
    }
    const about = {
        button: document.getElementById('about-button')
    }
    const work = {
        button: document.getElementById('work-button')
    }
    const contact = {
        button: document.getElementById('contact-button')
    }

    // initial load
    setTimeout(actions.showHome, 500, home, head);

    //listeners
    home.button.addEventListener('click', event => {
        actions.hideAbout(about);
        actions.hideWork(work);
        actions.hideContact(contact);

        actions.showHome(home, head);
    });

    about.button.addEventListener('click', event => {
        actions.hideHome(home);
        actions.hideWork(work);
        actions.hideContact(contact);

        actions.showAbout(about, head);
    });

    work.button.addEventListener('click', event => {
        actions.hideHome(home);
        actions.hideAbout(about);
        actions.hideContact(contact);

        actions.showWork(work, head);
    });

    contact.button.addEventListener('click', event => {
        actions.hideHome(home);
        actions.hideAbout(about);
        actions.hideWork(work);

        actions.showContact(contact, head);
    });
}
