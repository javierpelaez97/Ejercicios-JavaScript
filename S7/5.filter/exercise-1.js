/* Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayores18 = ages.filter(persona =>{
    if(persona > 18){
        return persona
    }
})
console.log(mayores18)
