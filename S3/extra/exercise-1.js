/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
 */

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let lista = document.createElement('ul');
document.body.appendChild(lista);



for(country of countries){
    let param = document.createElement('li');
    param.innerHTML= country
    lista.appendChild(param)
}