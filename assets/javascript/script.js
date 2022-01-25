

//**********// MENU //**********//


let buttonMenu = document.getElementById('header-menu--button');
let listButtonMenu_1 = document.getElementById('header-menu--button--span-1');
let listButtonMenu_2 = document.getElementById('header-menu--button--span-2');
let listButtonMenu_3 = document.getElementById('header-menu--button--span-3');
let navMenu = document.getElementById('nav-menu');


let toggleMenu = false;

buttonMenu.addEventListener("click", menuShow);

function menuShow(){

    let tl = gsap.timeline({}); 

    if(toggleMenu){
        console.log('yes');

        tl
        .add("start")
        .to([listButtonMenu_1, listButtonMenu_2, listButtonMenu_3], {duration:.3, rotation:0}, 'start')
        .to(listButtonMenu_1, {duration:.3, y:0})
        .to(listButtonMenu_3, {duration:.3, y:0},'<')

        .to(navMenu, {duration:.3, left:"-100%"}, 'start')
        .to('.overlay-menu', {duration:.3, autoAlpha:'0'}, '<')

        toggleMenu = false

    } else {
        console.log('nope');

        tl
        .add("start")
        .to(listButtonMenu_1, {duration:.3, y:10}, 'start')
        .to(listButtonMenu_3, {duration:.3, y:-10},'<')
        .to([listButtonMenu_1, listButtonMenu_2], {duration:.3, rotation:45}, '>')
        .to([listButtonMenu_3], {duration:.3, rotation:-45}, '<')

        .to(navMenu, {duration:.3, left:0}, 'start')
        .to('.overlay-menu', {duration:.3, autoAlpha:'1'}, '<')

        toggleMenu = true
    }

}


