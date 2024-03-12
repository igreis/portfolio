document.addEventListener('DOMContentLoaded', function(){
    const introTxt = document.querySelector('.intro-text-effect')
    const introImg = document.querySelector('.intro-img');
    const introDev = document.querySelector('.intro-dev');
    let handle = false;

    function handleScroll() {
        const sectionScroll = document.querySelector('.section-scroll');
        const topSectionScroll = sectionScroll.getBoundingClientRect().top;

        if(Math.abs(topSectionScroll) < window.innerHeight / 2) {
            introTxt.classList.add('active');
            introImg.classList.add('active');
            introDev.classList.add('active');
        }

    }

    window.addEventListener('scroll', handleScroll);
});
  



