/* Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' 
para hacer un .fetch() y recibir los datos que devuelve. 
Imprimelo mediante un console.log(); */

'use strict';

const request = fetch(`https://api.agify.io?name=michael`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


