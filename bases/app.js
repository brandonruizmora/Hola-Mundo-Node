const fs = require('node:fs');

console.clear();

const base = 3;
let salida = "";

console.log("==================");
console.log("Tabla del " + 5);
console.log("==================");

for (let i = 1; i <= 10; i++) {
    salida += `${base} X ${i} = ${base*i}\n`;
}

console.log(salida);

fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
  if (err) throw err;
  console.log(`Se guardo el archivo Tabla-${base}.txt`);
});