import createHomePage from "./home";
import createMenuPage from './menu';
import createContactPage from './contact';
import './styles.css'

function setActiveButton(button) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function loadPage(pageFunction) {
    clearContent();
    const content = document.getElementById('content');
    content.appendChild(pageFunction());
}

function initializePage() {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('about-btn');

    homeBtn.addEventListener('click', (e) => {
        setActiveButton(e.target);
        loadPage(createHomePage);
    });

    menuBtn.addEventListener('click', (e) => {
        setActiveButton(e.target);
        loadPage(createMenuPage);
    });

    contactBtn.addEventListener('click', (e) => {
        setActiveButton(e.target);
        loadPage(createContactPage);
    });

    // Load home page by default
    loadPage(createHomePage);
    setActiveButton(homeBtn);
}

document.addEventListener('DOMContentLoaded', initializePage);