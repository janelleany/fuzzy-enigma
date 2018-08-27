// variables: QUERY & NAME THE DOM ELEMENTS WE NEED TO WORK WITH
let menuIcon = document.querySelector('.mobile-nav-button');
let sidecarNav = document.querySelector('.sidecar-nav');


// function: TOGGLES EXISTING DOM ELEMENT'S CLASS
let toggle = (element, className) => {
  element.classList.toggle(className);
}

// function: CLICK ON MENU ICON EVENT HANDLER
let clickMenu = (event) => {
  toggle(sidecarNav, 'display-none');
}

menuIcon.addEventListener('click', clickMenu);

// === HTTP service ===
const express = require('express');
const app = express();
const path = require('path');
const serveStatic = require('serve-static');

// maps contents of root directory to the site's root
app.use(serveStatic('./'));


// start listening 
app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});