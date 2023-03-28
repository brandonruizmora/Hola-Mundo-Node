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

const getEmpleadoNameById = (id) => {
    const empleado = empleados.find((empleado) => empleado.id === id)?.name;
    return new Promise((resolve, reject) => {
        (empleado) ? resolve(empleado) : reject(`No se encontro el empleado con el id ${id}`);
    });
}

const getEmpleadoSalarioById = (id) => {
    const salario = salarios.find((salario) => salario.id === id)?.salary;
    return new Promise((resolve, reject) => {
        (salario) ? resolve(salario) : reject(`No se encontro el salario para el id ${id}`)
    });
}

const id = 2;

// getEmpleadoNameById(id)
//     .then(empleado => console.log(empleado))
//     .catch(error => console.log(error));

// getEmpleadoSalarioById(id)
//     .then(salario => console.log(salario))
//     .catch(error => console.log(error));

getEmpleadoNameById(id)
    .then(empleado => {
        getEmpleadoSalarioById(id)
    .then(salario => {
        console.log("El empleado ", empleado, " tiene un salario de ", salario);
    })
    .catch(error => console.log(error));
    })
    .catch(error => console.log(error));

