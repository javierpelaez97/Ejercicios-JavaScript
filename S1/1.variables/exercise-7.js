/*Dado el siguiente javascript, actualiza el valor de la variable ``globalBasePrice`` a 25000 y actualiza la propiedad ``finalPrice`` 
de todos los coches con el valor de su propiedad */

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice= car1.finalPrice + globalBasePrice;
car2.finalPrice= car2.finalPrice + globalBasePrice;

console.log(car1.finalPrice, car2.finalPrice); 