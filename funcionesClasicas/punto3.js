let temperaturas = [
    {minima: 19, maxima: 32, dia:1},
    {minima: 18, maxima: 29, dia:2},
    {minima: 17, maxima: 25, dia:3},
    {minima: 20, maxima: 29, dia:4},
    {minima: 15, maxima: 23, dia:5},
    {minima: 14, maxima: 20, dia:6},
    {minima: 10, maxima: 15, dia:7},
]
temperaturas.forEach(temperatura=>{console.log(`el promedio del dia ${temperatura.dia}, es: ${(temperatura.minima+temperatura.maxima)/2}`);})