// change background header//
const scrollHeader = () => {
    const header =document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
// swiper products///////////
let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides : true,
    slidesPreView: 'auto',
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
      },
  });
// scroll section active link////////
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY =window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' +sectionId)
        if(scrollY>sectionTop && scrollY <=sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

////////////scroll-up/////////////
const scrollUp = () =>{
    const scrollUp =document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

///////////////Dark light theme////////////////
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

////////////(if user selected previous topic)////////////
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain current theme that the interface has by validating the dark-theme class////////
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//////we validate if the user previously chose a topic////////////
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' :'remove'](iconTheme)
}

//active or deactive theme manually with btn
themeButton.addEventListener('click',()=>{
    //add or remove dark btn /icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save thheme and the current icon
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-theme',getCurrentIcon())
})

const sr= ScrollReveal({
    origin : 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
 sr.reveal(`.home__data`)
 sr.reveal(`.home__images`,{delay: 600,origin: 'buttom'})
 sr.reveal(`.new__card`,{interval: 100})
 sr.reveal(`.collection__explore:nth-child(1)`,{origin: 'right'})
 sr.reveal(`.collection__explore:nth-child(2)`,{origin: 'left'})
 sr.reveal(`.products__container`)
 sr.reveal(`.brand__img`,{interval: 100})
 sr.reveal(`.footer__container`)
