/* Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.
 */

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

 let user2 = new Array(); 
const nombres2 = users.map(user => user.name);
/* const nombres = users.map(user => user.name[0]== 'A'? 'Anacleto' : user.name); */

  /* console.log(nombres)  */
   for(let i = 0; i< nombres2.length; i++){ 
    /* console.log(nombres2[i].charAt(0)) */
    if(nombres2[i].charAt(0) == 'A'){
      user2.push('Anacleto')
    }else{
      user2.push(nombres2[i])
    }

  } 
  console.log(user2)

 

 
