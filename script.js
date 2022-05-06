'use strict'


// localStorage.setItem('number', 5);
//
// //localStorage.getItem('number');
// // localStorage.removeItem('number');
//
// localStorage.clear();
//
// console.log(localStorage.getItem('number'));
//


const checkbox = document.querySelector('#checkbox'),
        form = document.querySelector('form'),
    change = document.querySelector('#color');

if(localStorage.getItem('isChecked')) {
checkbox.checked = true;
}   if(localStorage.getItem('bg')==='changed') { //Если айтем уже присутствует в localstorage, мы его удаляем
    form.style.backgroundColor = 'red'
}

checkbox.addEventListener('change', ()=> {
localStorage.setItem('isChecked', true);
});


change.addEventListener('click', ()=> {
    if(localStorage.getItem('bg')==='changed') { //Если айтем уже присутствует в localstorage, мы его удаляем
form.style.backgroundColor = '#fff'
    } else {
        localStorage.setItem('bg', 'changed'); // если айтема нет в localstorage, то мы его добавляем
        form.style.backgroundColor = 'red';
    }
})


/*Переводим полученные данные в формат JSON*/

const person = {
   name: 'Alex',
    age: 25
};


const serializedPerson = JSON.stringify(person);

localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));