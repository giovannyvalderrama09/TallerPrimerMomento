function calcularDistancia (x1,y1,x2,y2){
    return (Math.sqrt(Math.pow(x2-x1,2)+ Math.pow(y2-y1,2)))
}

//LAMAR A LA FUNCION
let distancia=calcularDistancia(0,15,12,3)
console.log(`La distancia calculada fue ${distancia}`)
