burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlst = document.querySelector('.nav-lst')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () =>{
    rightNav.classList.toggle('v-class')
    navlst.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')
})