
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navmenu');


hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

