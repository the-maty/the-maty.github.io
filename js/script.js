const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
navBar.classList.toggle('burger-hide-btn');       
});

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('navbar a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active-link');
    console.log(link);
  }
})