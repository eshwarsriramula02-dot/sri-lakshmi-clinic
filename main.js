/**
 * Sri Laxmi Dental Clinic - Premium Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const animateElements = document.querySelectorAll('.animate-fade-in');

    // Scroll Effects for Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sceneObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.classList.add('visible'); // Optional: hook for more CSS animations
                sceneObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        sceneObserver.observe(el);
    });

    // Smooth Scrolling for Mobile Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dynamic Review Carousel (Simple Auto-Scroll logic if needed)
    const reviewScroll = document.querySelector('.reviews-scroll');
    if (reviewScroll) {
        let isDown = false;
        let startX;
        let scrollLeft;

        reviewScroll.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - reviewScroll.offsetLeft;
            scrollLeft = reviewScroll.scrollLeft;
        });
        reviewScroll.addEventListener('mouseleave', () => isDown = false);
        reviewScroll.addEventListener('mouseup', () => isDown = false);
        reviewScroll.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - reviewScroll.offsetLeft;
            const walk = (x - startX) * 2;
            reviewScroll.scrollLeft = scrollLeft - walk;
        });
    }
});
