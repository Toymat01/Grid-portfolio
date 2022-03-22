const viewBtn = document.querySelector('.welcome-text .button');
const skillBtn = document.querySelector('.skill-li')
const contactBtn = document.querySelector('.contact-li');
const portBtn = document.querySelector('.port-li');
const sections = document.querySelectorAll('section');


    for(let i=0; i<sections.length; i++){
        viewBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            sections[1].classList.add('active');
            sections[2].classList.remove('active');
            sections[3].classList.remove('active');
            sections[0].classList.add('hide')
        })
        contactBtn.addEventListener('click',(e) =>{
            e.preventDefault();
            sections[3].classList.add('active');
            sections[1].classList.remove('active');
            sections[2].classList.remove('active')
            sections[0].classList.add('hide')
        })
        skillBtn.addEventListener('click',(e) =>{
            e.preventDefault();
            sections[2].classList.add('active');
            sections[3].classList.remove('active')
            sections[1].classList.remove('active')
            sections[0].classList.add('hide')

        })
        portBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            sections[0].classList.remove('hide')
            sections[3].classList.remove('active')
            sections[1].classList.remove('active')
            sections[2].classList.remove('active')
        })
        
    }