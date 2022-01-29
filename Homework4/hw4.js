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

// arr.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent=item;
//     ul.appendChild(li);
// });

for(let item of arr){
    const li = document.createElement('li');
    li.textContent=item;
    ul.appendChild(...li);
}

mdiv.appendChild(ul);
console.log(ul);