let sables= [-2,-6,11,9,22,-3]

let cont=0

sables.forEach( sable => {
    if (sable<0) {
        cont ++
        console.log("El sable de luz está defectuoso"+sable)
    }
})
console.log("la cantidad de sables defectuosos con energía son: "+cont)