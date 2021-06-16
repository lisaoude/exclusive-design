const menuDisabilities = document.querySelector('nav');
const buttonShowMenu = document.querySelector('#klik');
const hideMenu = document.querySelector('nav ul a');
const selectBody = document.querySelector('body');

const buttonMacula = document.querySelector('#macula');
const maculaFilter = document.getElementById("maculaFilter");

const buttonConcentration = document.querySelector('#concentratie');

const buttonVasilis = document.querySelector('#vasilis');
const selectForVasilis = document.querySelectorAll('main section');


buttonMacula.addEventListener('click', () => {

    maculaFilter.classList.remove('hideMacula');

    selectBody.addEventListener('mousemove', (e) => {
        var e = e || window.event;
        var x = event.clientX;
        var y = event.clientY;
        maculaFilter.style.left = (e.clientX - 600) + 'px';
        maculaFilter.style.top = (e.clientY - 600) + 'px';
    })
})


buttonConcentration.addEventListener('click', () => {
    selectBody.classList.toggle('concentratie');
})

buttonShowMenu.addEventListener('click', () => {
    menuDisabilities.classList.toggle('show');
})

hideMenu.addEventListener('click', (e) => {
    e.preventDefault
    if(menuDisabilities.classList.contains('show')){
        menuDisabilities.classList.remove('show');
    }
})

buttonVasilis.addEventListener('click', () => {
    selectForVasilis.forEach(element => element.classList.toggle('vasilisOn'))
})