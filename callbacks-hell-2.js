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

const salarios = [
    {
        id: 1,
        salary: 1500
    },
    {
        id: 2,
        salary: 1000
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

const getSalarioById = (id, callback) => {
    const salario = salarios.find((salario) => salario.id === id)?.salary;
    if (salario) {
        callback(null, salario);
    } else {
        callback(`El salario con el id del usuario: ${id} no existe`);
    }
}

getEmpleadosById(1, printEmpleadoIfCorrect);

getSalarioById(1, (err, salario) => {
    if (err) {
        console.log("ERROR!");
        return console.log(err);
    }
    console.log("Salario");
    console.log(salario);
});
