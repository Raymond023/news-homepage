'use strict'

const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const navBar = document.querySelector('nav');
const navDialog = document.querySelector('#nav-dialog')
const body = document.body;

openNav.addEventListener('click', () => {
    body.classList.toggle('overlay');
    openNav.setAttribute('aria-expanded', 'true');
    navDialog.showModal();
});

closeNav.addEventListener('click', () => {
    body.classList.toggle('overlay');
    openNav.setAttribute('aria-expanded', 'false');
    navDialog.close();
});

navDialog.addEventListener('click', (e) =>{
    if(e.target === navDialog) {
        navDialog.close();
        body.classList.toggle('overlay');
    }
})