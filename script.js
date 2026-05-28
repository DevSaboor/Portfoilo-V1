
// Show/hide scroll-to-top button
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const homeSection = document.getElementById('home');
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;

    if (homeSectionBottom < 0) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', () => {
        const splashScreen = document.getElementById('splash-screen');
        const portfolioContent = document.getElementById('portfolio-content');
        const splashLogo = document.querySelector('.splash-logo');
        
        // Wait for the logo's animation to finish
        splashLogo.addEventListener('animationend', () => {
            // Add the 'fade-out' class to the splash screen
            splashScreen.classList.add('fade-out');

            // Listen for the splash screen fade-out to finish
            splashScreen.addEventListener('animationend', () => {
                // Hide the splash screen completely
                splashScreen.style.display = 'none';

                // Make the portfolio content visible
                portfolioContent.style.display = 'block';

                // Re-enable scrolling on the body
                document.body.style.overflow = 'auto';
            });
        });
    });

   
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        document.addEventListener('DOMContentLoaded', () => {
            // Other existing code...
        
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
        
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        });

        // Fade-in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });
        
        // Testimonials slider navigation
        let isDown = false;
        let startX;
        let scrollLeft;
        const slider = document.querySelector('.testimonials-slider');
        
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
        
        // Touch events for mobile
        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('touchend', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        
        slider.addEventListener('touchcancel', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        
        slider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });