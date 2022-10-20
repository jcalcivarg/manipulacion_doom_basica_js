//console.log("hola, world   xxxx  yy zz ");

/**asi es en ccs  */
//h1 {color:red} 
// .parrafito {...}
// #pid {...}
/**--- */


/*-------------------------------*/
/*Clase 13  de practicas de js / addeventlistener */
/*-------------------------------*/


/*este script se esta usando con  index6.html */


const h1    = document.querySelector('h1');

const p     = document.querySelector('#result'); /*parra obtener el elemeto del parrato result */


const form   = document.querySelector('#form'); /*parra obtener  el elemento del formulario */
const input1 = document.querySelector('#calculo1'); /*parra obtener todo lo qu etenga input */
const input2 = document.querySelector('#calculo2'); /*parra obtener todo lo qu etenga input */
const btn    = document.querySelector('#btnCalcular'); /*parra obtener todo lo qu etenga  en botton */


/*creando un evento en el elemento */
//btn.addEventListener('click',btnClick) ; /*el nombre de la función va sin los parentesis  y son las comillas*/





/* comentamos por un momenro para probar con el boton */
//form.addEventListener('submit',sumarInputValues) ; /*el nombre de la función con  form */
//function sumarInputValues(event) {
   
  // event.preventDefault();   /*esto permite que el formulario al recargar no se pierda los valores */

  // let result = input1.value+ input2.value ;
      //p.innerHTML = "El resultado es : " + result ; 
  // p.innerText = "El resultado es : " + result ; 
//}



btn.addEventListener('click',sumarInputValues) ; /*el nombre de la función con  form */

/*<button type ="button" id="btnCalcular"> Calcular </button> */   /*y se especifica en el html que el boton en el formulario es tipo boton y no submit para que ese eejcute como boton y no envio formulario */


function sumarInputValues(event) {
   
  // event.preventDefault();   /*en el caso de boton no lleva esta linea, ya que no es una formulario  */

   let result = input1.value+ input2.value ;
   //p.innerHTML = "El resultado es : " + result ; 
   p.innerText = "El resultado es : " + result ; 
}









