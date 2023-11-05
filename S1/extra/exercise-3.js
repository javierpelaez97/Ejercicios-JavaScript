/* Usa un bucle para crear 3 arrays de peliculas filtrados 
por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, 
igual o mas de 100 minutos y menos de 200 y pelicula grande, 
mas de 200 minutos. Imprime cada array en por consola.
 */
const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];
const min = new Array();
const med = new Array();
const grande = new Array();

movies.forEach(element =>{
    if(element.durationInMinutes < 100){
        min.push(element);
    }else if((element.durationInMinutes >= 100) && (element.durationInMinutes < 200)){
        med.push(element);
    }else if(element.durationInMinutes >= 200){
        grande.push(element);
    }else{
        
    }
    

})
console.log("Array peliculas Pequeñas ", min)
console.log("Array peliculas medianas ", med)
console.log("Array peliculas grandes ", grande)