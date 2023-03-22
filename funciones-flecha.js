function sumar(a, b = 10) {
    return a + b;
}

console.log(sumar(5)); // 15

const sumarFlecha = (a, b = 10) => a + b;

console.log(sumarFlecha(5,20)) //25