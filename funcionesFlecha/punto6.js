let crearAprendiz = (nombre,planeta,edad,estatura,clasificarAprendiz) => {

    let datosAprendiz = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura:estatura
    }
    clasificarAprendiz(datosAprendiz)
}

crearAprendiz('Daniel','Tierra', 15, 1.72, (aprendiz) =>{
    if(aprendiz.edad>=15){
        console.log("Usted se va para la clase de sable de luz")
    }
    else {
        console.log("Usted se va para la clase de la fuerza")
    }
})