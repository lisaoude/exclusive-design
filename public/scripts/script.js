const buttonShowMenu = document.querySelector('#klik');
const menuDisabilities = document.querySelector('nav');
const hideMenu = document.querySelector('nav ul a');

buttonShowMenu.addEventListener('click', () => {
    menuDisabilities.classList.toggle('show');
})

hideMenu.addEventListener('click', (e) => {
    e.preventDefault
    if(menuDisabilities.classList.contains('show')){
        menuDisabilities.classList.remove('show');
    }
})
