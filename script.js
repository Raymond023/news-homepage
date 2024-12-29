'use strict'

const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const navBar = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

openNav.addEventListener('click', () => {
    overlay.classList.add('show-overlay');
    navBar.classList.add('show');
});

closeNav.addEventListener('click', () => {
    overlay.classList.remove('show-overlay');
    navBar.classList.remove('show');
});