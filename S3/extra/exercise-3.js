const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div1 = document.querySelector('[data-function="printHere"]');

let list = document.createElement('ul');
div1.appendChild(list);



for(let car of cars){
    let elements = document.createElement('li');
    elements.innerHTML= car;
    list.appendChild(elements);
}