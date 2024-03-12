document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.menu');

    function handleScroll () {
        
        if(window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled')
        }
    }
    window.addEventListener('scroll', handleScroll);
});

