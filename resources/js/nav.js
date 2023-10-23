const hamburgerBtn = document.querySelector('.hamburger')

const navCollapse = document.querySelector('.overlay')
const navCollapseList = document.querySelector('.overlay ul')

const logoCenter = document.querySelector('.logo-center')
const logoLeft = document.querySelector('.logo-left')
const navList = document.querySelector('.nav-list')
const navSocial = document.querySelector('.nav-social')

const hamburgerHandler = ()=>{
    hamburgerBtn.classList.toggle('is-active')
    navCollapse.classList.toggle('left-0');
    navCollapse.classList.toggle('-left-[-800px]');
    
    // document.body.classList.toggle('overflow-hidden')
navCollapseList.classList.toggle('fixed')
    
}

hamburgerBtn.addEventListener('click',hamburgerHandler)


function obslugaScrolla() {
    // Pobierz aktualną pozycję scrolla w pionie
    var pozycjaScrolla = window.scrollY || window.pageYOffset;
  
    // Jeżeli pozycja scrolla osiągnęła lub przekroczyła 200 pikseli
    if (pozycjaScrolla >= 200) {
        // Przesuń div "logoCenter" w górę o 100px i usuń przesunięcie z "logoLeft" oraz "navSocial", oraz pokaż "navList"
        logoCenter.classList.add('translate-y-[-150px]');
        logoLeft.classList.remove('translate-x-[-250px]');
        logoLeft.classList.remove('invisible');
        navSocial.classList.remove('invisible');
        navSocial.classList.remove('translate-x-[250px]');
        navList.classList.remove('opacity-0');
    } else {
        // Przywróć div "logoCenter" do pierwotnej pozycji, dodaj przesunięcie do "logoLeft" i "navSocial", oraz ukryj "navList"
        logoCenter.classList.remove('translate-y-[-150px]');
        logoLeft.classList.add('translate-x-[-250px]');
        navSocial.classList.add('translate-x-[250px]');
        navList.classList.add('opacity-0');
    }
}

// Dodaj nasłuchiwanie scrolla, które wywoła funkcję obslugaScrolla
window.addEventListener('scroll', obslugaScrolla);