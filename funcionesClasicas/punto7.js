//declarando la funcion
function filtrarPlanos(planos,arrancar){
    let filtro=
    planos.filter(function(plano){
        return(plano>=1 && plano<=10)

    })
    arrancar(filtro)
}
let planos =[1,100,200,300,400,500]
filtrarPlanos(planos,function(filtro){
let cuenta= filtro.length
if(cuenta >0 ){
    console.log("Arrancando la nave")
    
}
else{
    console.log("Nos quedamos ")
}
}
);
