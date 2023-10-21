// JavaScript para abrir/fechar o menu
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('nav-open');
});
