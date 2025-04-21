// Sticky Navigation
let lastScrollTop = 0;
const stickyNav = document.querySelector('.sticky-nav');
const banner = document.querySelector('.banner');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const bannerBottom = banner.offsetTop + banner.offsetHeight;

    // Show sticky nav when scrolled past banner
    if (scrollTop > bannerBottom) {
        stickyNav.classList.add('visible');
        
        // Hide on scroll down, show on scroll up
        if (scrollTop > lastScrollTop) {
            stickyNav.style.transform = 'translateY(-100%)';
        } else {
            stickyNav.style.transform = 'translateY(0)';
        }
    } else {
        stickyNav.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
}); 