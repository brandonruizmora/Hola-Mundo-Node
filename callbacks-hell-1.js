const empleados = [
    {
        id: 1,
        name: "Brandon"
    },
    {
        id: 2,
        name: "Fernado"
    },
    {
        id: 3,
        name: "Jaun"
    },
]

const printEmpleadoIfCorrect = (err, empleado) => {
    if (err) {
        console.log("ERROR!");
         return console.log(err);
    }
    console.log("Empleado");
    console.log(empleado);
}

const getEmpleadosById = (id, callback) => {
    const empleado = empleados.find((empleado) => empleado.id === id);
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`El empleado con el id ${id} no existe`);
    }
}

getEmpleadosById(1, printEmpleadoIfCorrect);