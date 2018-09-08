// Select the DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// /set initial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
//remove and add class to the items

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //set menu state back to true
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuBtn.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    //set menu state back to false
    showMenu = false;
  }
}
