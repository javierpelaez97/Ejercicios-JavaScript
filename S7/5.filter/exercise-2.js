/* Dado el siguiente array, utiliza .filter() para generar un nuevo array
 con los valores que sean par.*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages.filter(par =>{
    if(par % 2 === 0 ){
        return par;
        
    }
})

console.log(pares)