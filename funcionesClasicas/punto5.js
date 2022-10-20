let salariomensual = 3500000

let cantLicencias = 0
let comision = (cantLicencias*1500000)

salariobruto =(salariomensual+comision)
deduccion=(salariobruto*0.05)
salarioneto=(salariobruto - deduccion)

console.log(`el salario mensual es de: ${salariomensual}`)
console.log(`obtuvo un total de comisiones de: ${comision} por vender ${cantLicencias} licencias`)
console.log(`salario sin deducciones es: ${salariobruto}`)
console.log(`el total de deduccion es: ${deduccion}`)
console.log(`el salario total es: ${salarioneto}`)


