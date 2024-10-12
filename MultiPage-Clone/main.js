const burger = document.querySelector(".navimage");
const nav = document.querySelector(".nav-links");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll('.nav-links a');

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");

  if (nav.classList.contains("nav-active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

function openPage(buttonId){
  if(buttonId === 'btn-resume'){
    window.location.href = "resume.html";
  }else if(buttonId === 'btn-project'){
    window.location.href ='project.html'
  }
}
