const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Delay para ações da página //
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
})

//sr.reveal('.text',{delay: 100, origin: 'top'})
//sr.reveal('.form-container form',{delay: 500, origin: 'left'})
//sr.reveal('.heading',{delay: 500, origin: 'top'})
//sr.reveal('.ride-container .box',{delay: 300, origin: 'top'})
sr.reveal('.services-container .box',{delay: 300, origin: 'top'})
//sr.reveal('.about-container .box',{delay: 300, origin: 'top'})
//sr.reveal('.reviews-container',{delay: 300, origin: 'top'})
//sr.reveal('.newsletter .box',{delay: 100, origin: 'bottom'})

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});