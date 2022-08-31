window.onload = function (){
    let dropMenu = document.querySelector('.header__menu__inner');
    let btn = document.querySelector('.menu-btn');
    btn.addEventListener('click', function(){
        dropMenu.classList.toggle('active');
    });
    
}