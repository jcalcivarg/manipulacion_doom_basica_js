//console.log("hola, world   xxxx  yy zz ");

/**asi es en ccs  */
//h1 {color:red} 
// .parrafito {...}
// #pid {...}
/**--- */


/*-------------------------------*/
/*Clase 12  de practicas de js  */
/*-------------------------------*/


/*este script se esta usando con  index4.html */



const h1    = document.querySelector('h1');

const p     = document.querySelector('#result'); /*parra obtener el elemeto del parrato result */


const input1 = document.querySelector('#calculo1'); /*parra obtener todo lo qu etenga input */
const input2 = document.querySelector('#calculo2'); /*parra obtener todo lo qu etenga input */
const btn    = document.querySelector('#btnCalcular'); /*parra obtener todo lo qu etenga  en botton */

//console.log(pid);

function btnClick() {
   /* console.log("dio click desde funcion") ; */
   /*   console.log(input1.value+ input2.value); */   /*concatenando los 2 input y mostrar en la consola */

   let result = input1.value+ input2.value ;
   //p.innerHTML = "El resultado es : " + result ; 
   p.innerText = "El resultado es : " + result ; 

}











