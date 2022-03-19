article.addEventListener('click', () => window.alert('article'));
division.addEventListener('click', () => window.alert('division'));
p.addEventListener('click', () => window.alert('p'));
button.addEventListener('click', (event) => {
    event.stopProgagation();
    window.alert('button')
});

const div = document.querySelector('div');
const ul = document.querySelector('ul');

div.addEventListener('click', (event) => {
    console.error('DIV에 이벤트 발생');
    event.target.style.background = 'blue';
})

ul.addEventListener('click', (event) => {
    console.warn('UL에 이벤트 발생');
    event.target.style.background = 'red';
})

const items = document.querySelectorAll('li');
items.forEach((item) => item.addEventListener('click', console.log('li clicked')));