document.addEventListener('DOMContentLoaded', (event) => {
    // Animate service cards
    anime({
        targets: '.service-card',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(100),
        easing: 'easeOutQuad',
        duration: 800
    });

    // Animate screenshots
    anime({
        targets: '.screenshot',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(100),
        easing: 'easeOutQuad',
        duration: 800
    });

    // Animate buttons
    anime({
        targets: '.service-button',
        scale: [0.9, 1],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, .8)',
        duration: 1000,
        delay: 500
    });

    // Add floating animation to screenshots
    document.querySelectorAll('.screenshot').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('float');
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});