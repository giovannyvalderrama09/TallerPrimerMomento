function obtenerNombre(codigo){
    let nombre = codigo.split(":")[1]
    return nombre
}


//llamando a la funcion 

let resultado = obtenerNombre("48561274 : Camilo Sanchez")
console.log(resultado)

let obtenerNombre = codigo=> codigo.split(":")[1]