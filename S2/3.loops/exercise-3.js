/*Usa un bucle for para recorrer todos los destinos del array y elimina los 
elementos que tengan el id 11 y 40. Imprime en un console log el array.*/

const placesToTravel = [
    {id: 5, name: 'Japan'}, 
{id: 11, name: 'Venecia'}, 
{id: 23, name: 'Murcia'}, 
{id: 40, name: 'Santander'}, 
{id: 44, name: 'Filipinas'}, 
{id: 59, name: 'Madagascar'}
];


for (var i = placesToTravel.length - 1; i >= 0; i--) {
    var destino = placesToTravel[i];
    if (destino.id === 11 || destino.id === 40) {   
        placesToTravel.splice(i, 1);
    }
}
console.log(placesToTravel)
