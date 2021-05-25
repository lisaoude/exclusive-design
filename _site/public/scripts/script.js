console.log('hello')

const button = document.querySelector('#klik');
const nav = document.querySelector('nav');

button.addEventListener('click', (e) => {
    console.log('klik')
    nav.classList.toggle('show');
})

