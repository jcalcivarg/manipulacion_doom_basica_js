//console.log("hola, world   xxxx  yy zz ");

/**asi es en ccs  */
//h1 {color:red} 
// .parrafito {...}
// #pid {...}
/**--- */


/*este script se esta usando con  index2.html */


const h1 = document.querySelector('h1');
const p  = document.querySelector('p'); /*parra obtener por el nombre del elemento */
const p2  = document.querySelectorAll('p'); /*para obtener una lista de todos loe elementos del parrado(clase, id, elemento , etc  ) */
const parrafito  = document.querySelector('.parrafito'); /*parra obtener por el nombre de la clase */
const pid   = document.querySelector('#pid'); /*parra obtener por el nombre del id  */
const input = document.querySelector('input'); /*parra obtener todo lo qu etenga input */


/*  querySelector  me permite obtener toda la propiedad del objeto 
 es el que se usa mas */


const px1 = document.getElementById('p'); 


console.log(h1);   /*de esta manera muestro el elemento h1 */
console.log(px1);   /*de esta manera muestro el elemento h1 */
console.log({h1,p,parrafito,pid,input});  /* de forma de objeto muestro cada obejto con sus propiedades */









