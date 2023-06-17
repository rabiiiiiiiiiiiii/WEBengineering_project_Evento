// bars image
let menu = document.querySelector('.fa-bars');
// navlist
let navbar = document.querySelector('.navbar');


// when you click on bars:
menu.addEventListener('click',function(){

    // cross button appear you can now open and close list!
    // cross icon
    menu.classList.toggle('fa-times');
    //show nav bar 
    navbar.classList.toggle('nav-toggle');
});
// when you scroll navbar will be removed!

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});