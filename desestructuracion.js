//Desestructuracion de objetos

const persona = {
    nombre: "Brandon",
    apellido: "Ruiz",
    getNombre() {
        return `${this.nombre} ${this.apellido}`
    }
}

//const nombre = persona.nombre;
//const apellido = persona.apellido;

const { nombre, apellido, edad = 20 } = persona;

console.log(nombre, apellido, edad);

//Desestructuracion de arreglos

const heroes = ["Batman", "Superman", "Mujer Maravilla"];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [ , , h3] = heroes;

console.log(h3);

