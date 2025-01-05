'use strict'

const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const navBar = document.querySelector('nav');
const navDialog = document.querySelector('#nav-dialog')
const body = document.body;

openNav.addEventListener('click', () => {
    body.classList.toggle('overlay');
    navDialog.showModal();
});

closeNav.addEventListener('click', () => {
    body.classList.toggle('overlay');
    navDialog.close();
});
