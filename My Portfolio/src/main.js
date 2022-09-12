/* TOGGLE MENU */

const toggleMenu = document.querySelector('#toggle-menu');
const toggleMenuIcon = toggleMenu.querySelector('img');
const menu = document.querySelector('#menu');
toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-y-[-200%]')
    changeMenuIcon()
});

/* Close Menu When click menu list */

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(navLink =>{
    navLink.addEventListener('click', () => {
        menu.classList.add('translate-y-[-200%]')
        changeMenuIcon()
    })
})

function changeMenuIcon() {
    const isContainTranslate = menu.classList.contains('translate-y-[-200%]')
    const icon = isContainTranslate ? 'icon-menu' : 'icon-close'
    toggleMenuIcon.src = `/images/icons/${icon}.svg`
}


/* Toggle Theme */

const html = document.querySelector('html');
const toggleTheme = document.querySelector('#toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img');
toggleTheme.addEventListener('click', () =>{
    html.classList.toggle('dark')
    const isDark = html.classList.contains('dark')
    const themeIcon = isDark ? 'light' : 'dark'
    toggleThemeIcon.src = `/images/icons/icon-${themeIcon}.svg`
})

/* Title Animation */

var typingEffect = new Typed(".multitext",{
    strings : ["Frontend Developer","Civil Engineer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})

