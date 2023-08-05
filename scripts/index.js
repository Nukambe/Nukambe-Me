window.onload = () => {
    console.log('script loaded');
    const title = document.getElementsByTagName('h1')[0];

    const fadeIn = function (element) {
        element.classList.remove('faded-right');
    }

    fadeIn(title);
}
