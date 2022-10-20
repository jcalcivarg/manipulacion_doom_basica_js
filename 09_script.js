//console.log("hola, world   xxxx  yy zz ");

/**asi es en ccs  */
//h1 {color:red} 
// .parrafito {...}
// #pid {...}
/**--- */


/*-------------------------------*/
/*Clase 13  de practicas de js / addeventlistener */
/*-------------------------------*/


/*este script se esta usando con  index5.html */


const h1    = document.querySelector('h1');

const p     = document.querySelector('#result'); /*parra obtener el elemeto del parrato result */


const input1 = document.querySelector('#calculo1'); /*parra obtener todo lo qu etenga input */
const input2 = document.querySelector('#calculo2'); /*parra obtener todo lo qu etenga input */
const btn    = document.querySelector('#btnCalcular'); /*parra obtener todo lo qu etenga  en botton */
const btn2    = document.querySelector('#btn2'); /*parra obtener todo lo qu etenga  en botton */


/*creando un evento en el elemento */
btn.addEventListener('click',btnClick) ; /*el nombre de la función va sin los parentesis  y son las comillas*/
btn2.addEventListener('click',btn2Click) ; /*el nombre de la función va sin los parentesis  y son las comillas*/




function btnClick() {
   /* console.log("dio click desde funcion") ; */
   /*   console.log(input1.value+ input2.value); */   /*concatenando los 2 input y mostrar en la consola */

   let result = input1.value+ input2.value ;
   //p.innerHTML = "El resultado es : " + result ; 
   p.innerText = "El resultado es : " + result ; 

}

function btn2Click() {
    console.log("dio click boton 2 ") ;
}










