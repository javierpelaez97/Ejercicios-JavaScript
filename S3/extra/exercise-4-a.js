/* Dado el siguiente array de objetos. 
Crea dinamicamente en el html una lista de div que contenga un 
elemento h4 para el titulo y otro elemento img para la imagen. 
 */

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

let div1 = document.createElement('div');
document.body.appendChild(div1);

let tabla = document.createElement('ul')
div1.appendChild(tabla)

countries.forEach(country=>{
    
    let headerList = document.createElement('h4')
    headerList.innerHTML= country.title;
    tabla.appendChild(headerList)

    let imgList = document.createElement('img')
    imgList.innerHTML= country.imgUrl;
    headerList.appendChild(imgList)
})