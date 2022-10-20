let arreglo = [] ;

let arreglo2 = [1,2,3,4,-1];

let arreglo3 = ["juan","luis", "pedro"] ;

let objeto1 = {
    nombe:"juan",
    edad: 47 
};


for (let ind1 =0 ;  ind1 < arreglo2.length ; ind1++) {
    console.log(arreglo2[ind1]); 
}

for (let ind1 =0 ;  ind1 < arreglo3.length ; ind1++) {
    console.log(arreglo3[ind1]); 
}





/*2mostrar todo el objeto */

const object = {
    name: "goku",
    age: 110,
    poder: "Kamehame haaaaaaaaaa",
    debilidad: "Jeringas",
    comidad : ["pollo","bolon","encebollado"]
}


Object.values(object);
/*para crear un arreglo de un objeto   propiedad   Object.values(nombre_objeto)*/
/*['goku', 110, 'Kamehame haaaaaaaaaa', 'Jeringas', Array(3)]  */ 



/*tenr un objeto y convertir en arreglo para luego en el for mostrar sus elementos */
function  mostrarElementos(obj) {
    let arr = Object.values(obj)
    for (let ind1 =0 ;  ind1 < arr.length ; ind1++) {
        console.log(arr[ind1]); 
    }    
}


/*mostrar los elementos llamando a la funcion */
mostrarElementos(object);







console.log(Object.entries(object));   /*crea un arreglo del objecto con sus atributos */

////////////////////////////// resultado:
/*
[
  [ 'name', 'goku' ],
  [ 'age', 110 ],
  [ 'poder', 'Kamehame haaaaaaaaaa' ],
  [ 'debilidad', 'Jeringas' ]
] */