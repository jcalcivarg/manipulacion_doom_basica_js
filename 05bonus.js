

/* es en si  un return  en un if para que no siga otros pasos **/

function miemnbro (xtipo ) {
    if (xtipo =='basic') {
        console.log(" es basico ") ;
        return ;
    }

    if (xtipo =='intermedio') {
        console.log(" es  intermedio ") ;
        return ;
    }

    if (xtipo =='avanzado') {
        console.log(" es  avanzado ");
        return ;

    }


    /*en caso de no cumplir presneta este mensaje con icono de aletar  */
    console.warn("no esta definido");
    
}

miemnbro("basic");





/*----- BOMUS ----*/

/*definir un objeto  para luego llmar por medio de un if por el tipo */
let tipocurso  = {
    basic :"es un cuso basico",
    intermedio: "es un curso intermedio",
    avanzado: "es curso avanzado"
}

tipocurso;

/* formas de hacer referencia a un elmento del bjeto */ 
tipocurso.basic ;
tipocurso["basic"];



function presentarTipoMiembro(xtipoCurso) {
    if (tipocurso[xtipoCurso])  {
       console.log("curdo seleccinado " + tipocurso[xtipoCurso] ) ;
       return;
    }
    console.warn("no esta definido"); /*en caso mensaje de error */
}


presentarTipoMiembro("intermeddio") ;




