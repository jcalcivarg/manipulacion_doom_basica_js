//console.log("hola, world   xxxx  yy zz ");

/**asi es en ccs  */
//h1 {color:red} 
// .parrafito {...}
// #pid {...}
/**--- */


/*-------------------------------*/
/*Clase 11  de practicas de js  */
/*-------------------------------*/


/*este script se esta usando con  index3.html */



const h1 = document.querySelector('h1');
const p  = document.querySelector('p'); /*parra obtener por el nombre del elemento */
const parrafito  = document.querySelector('.parrafito'); /*parra obtener por el nombre de la clase */
const pid   = document.getElementById('pid'); /*parra obtener por el nombre del id  */
const input = document.querySelector('input'); /*parra obtener todo lo qu etenga input */



/*  querySelector  me permite obtener toda la propiedad del objeto 
 es el que se usa mas */


console.log(h1);   /*de esta manera muestro el elemento h1 */
console.log(p);   /*de esta manera muestro el elemento h1 */
console.log({h1,p,parrafito,pid,input});  /* de forma de objeto muestro cada obejto con sus propiedades */


h1.innerHTML ='Nuevo Titulo <br> Pepa ';     /*cambiar el texto del elemento */
h1.innerText ='Nuevo Titulo <br> Pepa ';     /*cambiar el texto del elemento  es una forma de  proteger  y solo cambiar el texto y no indicar el html
                                                gente malicionsa */
p.innerHTML = 'parrafo nuevo';    /*cambiar el texto del elemento */


/*obtener  y cambiar atributo de un elemento */
h1.getAttribute("pantalla");
//h1.setAttribute() ; 

console.log(h1);   /*de esta manera muestro el elemento h1 */

console.log(h1.getAttribute("pantalla"));   /*de esta manera muestro el elemento h1 */
console.log(p.getAttribute("class"));   /*de esta manera muestro el elemento h1 */


h1.setAttribute('pantalla','concolorY');   /*cambiar el atributo a un elemento */

h1.classList.add("conborde");   /*agregar una clase al  elemento h1  */
/*<h1 pantalla="concolorY" class="conborde">Nuevo Titulo &lt;br&gt; Pepa </h1> */

h1.classList.remove("conborde");   /*elimina  una clase al  elemento h1  */
/*<h1 pantalla="concolorY" class="">Nuevo Titulo &lt;br&gt; Pepa </h1>*/



/*crear un elemento */
const div = document.createElement("div");
div.className = "foo";

console.log({div});
console.log(div);

/*elmiar la clase en el div y agragra otra clase */
div.classList.remove("foo");
div.classList.add("anotherclass");
console.log(div);


// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
/*<div class="anotherclass foo bar baz visible"></div> */

div.classList.remove("foo", "bar", "baz");
console.log(div);

/*devuelve true o false  si el div contiene foo */
console.log(div.classList.contains("foo"));


// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

/*poner un valor en el input*/ 
input.value = 'jcag';




/**----- creacion de elementos */
/*crear un elemento */
const img1  = document.createElement("img");
const span1 = document.createElement("span");
console.log(span1);

/*adicionar un atributo de imagem  y una imagen al elemento creado */
img1.setAttribute('src','https://practicum.com/es-ecu/web/tild3463-3739-4966-a637-653839333835__cards.png');
console.log(img1);

pid.append(img1);  /*mostrar la imagenen el parafo */ 



pid.innerHTML='';  /*quitamos el texto del parrafo  para solo ver la imagen */
pid.append(img1);  /*mostrar la imagenen el parafo */ 

console.log(pid);








