// script.js

window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    let scrollPosition = window.pageYOffset;

    parallaxElements.forEach(function(el) {
        let depth = el.getAttribute('data-depth');
        let movement = -(scrollPosition * depth);
        el.style.transform = `translateY(${movement}px)`;
    });
});
