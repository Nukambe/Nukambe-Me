import * as actions from './actions.js';

window.onload = () => {
    console.log('script loaded');

    // save page elements
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
    setTimeout(actions.showHome, 500, home);


    home.button.addEventListener('click', event => {
        actions.showHome(home);
    })

    about.button.addEventListener('click', event => {
        actions.hideHome(home);
    });

    work.button.addEventListener('click', event => {
        actions.hideHome(home);
    });

    contact.button.addEventListener('click', event => {
        actions.hideHome(home);
    });
}
