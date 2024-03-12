document.addEventListener('DOMContentLoaded', function(){
    const front = document.querySelector('.front-end')
    const back = document.querySelector('.back-end')
    const versionamento = document.querySelector('.versionamento')
    const prompt = document.querySelector('.prompt-comando')

    function handleScroll() {
        const sectionScroll = document.querySelector('.grid-one');
        const topSectionScroll = sectionScroll.getBoundingClientRect().top;
        console.log(topSectionScroll);
        console.log(window.innerHeight);

        if(Math.abs(topSectionScroll) < window.innerHeight / 2) {
            front.classList.add('active');           
            back.classList.add('active');           
            versionamento.classList.add('active');           
            prompt.classList.add('active');      
        }

    }
    
    handleScroll();

    window.addEventListener('scroll', handleScroll);
});
  