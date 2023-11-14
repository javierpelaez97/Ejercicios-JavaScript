/* En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. 
Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.
 */


const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const name = car.name;

const itv = car.itv;

const itvYear1 = car.itv[0];

const itvYear2 = car.itv[1];

const itvYear3 = car.itv[2];

console.log(`El nombre ${name} y las itv son en: ${car.itv} la primera es en; ${itvYear1} la segunda: ${itvYear2} la tercera: ${itvYear3}`)