/* Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.
 */

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


let body = document.querySelector('body');

let list = document.createElement('ul');
body.appendChild(list);



apps.forEach(app =>{
    let filas = document.createElement('li');
    filas.innerHTML = app;
    list.appendChild(filas);
})

