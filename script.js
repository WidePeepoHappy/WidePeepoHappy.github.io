const toggleSwitch = document.querySelector('input[type="checkbox"]');
const navbar = document.querySelector('.navbar');
const toggleIcon = document.getElementById('toggle-icon-theme');
const image1 = document.getElementById('image1');
const links = document.getElementsByClassName('links');
const arrLinks = [...links];
const navHome = document.getElementById('nav-home');
const navProjects = document.getElementById('nav-projects');
const navContact = document.getElementById('nav-contact');
const homeH1 = document.getElementById('home-h1');
const projectsH1 = document.getElementById('projects-h1');
const websiteLinks = document.getElementsByClassName('website-links')
const language = document.getElementsByName('language');

function toggleDarkMode(isDark) {
  navbar.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  themeSwitchLanguage(isDark);
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
}

function themeSwitchLanguage(isDark) {
  if(isDark) {
    if(language[0].checked) {
      toggleIcon.children[0].textContent = 'Тёмная тема';
    } else {
      toggleIcon.children[0].textContent = 'Dark Theme';
    }
  } else {
    if(language[0].checked) {
      toggleIcon.children[0].textContent = 'Светлая Тема';
    } else {
      toggleIcon.children[0].textContent = 'Light Theme';
    }
  }
}

function switchTheme(e) {
  if(e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleDarkMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleDarkMode(false);
  }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if(currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkMode(true);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('language') === 'russian') {
    language[0].checked = true;
    languageChange();
  } else if(localStorage.getItem('language') === 'english') {
    language[1].checked = true;
    languageChange();
  }
});

for(let i = 0; i < language.length; i++) {
  language[i].addEventListener('change', languageChange);
}

function languageChange() {
  themeSwitchLanguage(toggleSwitch.checked);
  if(language[0].checked) {
    navHome.innerText = 'Главная';
    navProjects.innerText = 'Проекты';
    navContact.innerText = 'Связаться';
    homeH1.innerText = 'Добро пожаловать на мой сайт';
    projectsH1.innerText = 'Мои проекты';
    arrLinks.forEach(link => {
      link.getElementsByTagName('a')[0].innerHTML = 'Сайт';
    })
    image1.src = 'projects preview/quote-generator-eng.JPG';
    localStorage.setItem('language', 'russian');
  } else {
    navHome.innerText = 'Home';
    navProjects.innerText = 'Projects';
    navContact.innerText = 'Contact';
    homeH1.innerText = 'Welcome to my website';
    projectsH1.innerText = 'My projects';
    arrLinks.forEach(link => {
      link.getElementsByTagName('a')[0].innerHTML = 'Website';
    })
    image1.src = 'projects preview/quote-generator.JPG';
    localStorage.setItem('language', 'english');
  }
}
