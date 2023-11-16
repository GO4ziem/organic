const menuBar = document.getElementById('menu-bar')
const mobileMenuContainer = document.getElementById('mobile-nav-container')

menuBar.addEventListener('click', () => {
    mobileMenuContainer.classList.toggle('active')
})