//var

var nombreVar = "Brandon";

if (true) {
    nombreVar = "Lee";
}

console.log(nombreVar); //Lee

//let

let nombreLet = "Brandon";

if (true) {
    let nombreLet = "Miguel";
}

console.log(nombreLet); //Brandon

//const

const nombreConst = "Brandon";

if (true) {
    nombreConst = "Miguel"; //TypeError: Assignment to constant variable.
}

console.log(nombreConst);
