const open = document.getElementById('open');
const nav = document.getElementById('nav');
open.addEventListener('click', menu);

function menu() {
    open.classList.toggle('close');
    nav.classList.toggle('nav')

}