//Una variable que contenga tu altura en centímetros (entero)
let a= 170;
console.log(parseInt(a)+" Cm")

//Una variable que contenga tu altura en metros (número de coma flotante)
let b= 1.7;
console.log(parseFloat(b)+ " M")

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let c= 52.5;
console.log(parseFloat(c)+" Kg")

//Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(b.toFixed(2));

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(c.toPrecision(4));

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript
let max=Number.MAX_VALUE;
console.log(max + 1)
