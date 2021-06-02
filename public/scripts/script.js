const button = document.querySelector('#klik');
const nav = document.querySelector('nav');
const link = document.querySelector('nav ul a');

button.addEventListener('click', () => {
    nav.classList.toggle('show');
})

link.addEventListener('click', (e) => {
    e.preventDefault
    if(nav.classList.contains('show')){
        nav.classList.remove('show');
    }
})
