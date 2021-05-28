const button = document.querySelector('#klik');
const nav = document.querySelector('nav');

button.addEventListener('click', (e) => {
    nav.classList.toggle('show');
})

