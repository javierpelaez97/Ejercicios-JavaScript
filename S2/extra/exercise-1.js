/*  Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`.  */


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categorias = new Array();

for(let movie of movies){
    if(movie.categories.includes('comedia')){
        categorias.push(movie.categories);
    }else if(movie.categories.includes('aventura')){
        categorias.push(movie.categories);
    }else if(movie.categories.includes('acción')){
        categorias.push(movie.categories);
    }else if(movie.categories.includes('thriller')){
        categorias.push(movie.categories);
    }else{
        console.log('No hay categorias')
    }

}
console.log(categorias)