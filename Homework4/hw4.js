const arr =[
    {
        username: 'Sandro',
        age: 17
    },
    {
        username: 'Giorgi',
        age: 20
    },
    {
        username: 'Mariami',
        age: 27 
    }
];

const mdiv = document.querySelector('.mdiv');
const ul = document.createElement('ul');
const li = document.createElement('li');
console.log(ul);
mdiv.appendChild(ul);
ul.appendChild(li);
li.textContent= arr;