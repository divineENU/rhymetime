document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollButton');
    const navBar = document.querySelector('.tree-branch-nav');
    
    // Function for sticky navigation bar
    window.addEventListener("scroll", function () {
        const nav = document.querySelector(".tree-branch-nav");
        const banner = document.querySelector(".banner");

        if (!banner || !nav) return; // Safety check to prevent errors

        const bannerHeight = banner.offsetHeight;

        if (window.scrollY >= bannerHeight) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });

    // Function to scroll to content
    function scrollToContent() {
        const navBarHeight = navBar.offsetHeight;
        const currentScroll = window.pageYOffset;
        const additionalScroll = currentScroll * 3; // Scroll 3 times more
        const scrollPosition = currentScroll + navBarHeight + additionalScroll;
        
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    }
    
    // Add click event listener to the scroll button
    scrollButton.addEventListener('click', scrollToContent);
    
    // Hide/show scroll button based on scroll position
    window.addEventListener('scroll', function() {
        const navBarBottom = navBar.getBoundingClientRect().bottom;
        if (navBarBottom < 0) {
            scrollButton.style.opacity = '0';
            scrollButton.style.pointerEvents = 'none';
        } else {
            scrollButton.style.opacity = '1';
            scrollButton.style.pointerEvents = 'auto';
        }
    });
});
