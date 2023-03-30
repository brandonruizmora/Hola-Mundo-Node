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

const getInfoUsuarioById = async (id) => {
    try {
        const nombreEmpleado = await getEmpleadoNameById(id);
        const salarioEmpleado = await getEmpleadoSalarioById(id);
        return `El salario del usuario ${nombreEmpleado} es de ${salarioEmpleado}`;
        
    } catch (error) {
        return error;
        //throw error;
    }
    
}


const id = 3;

getInfoUsuarioById(id)
    .then(msg => {
        console.log("TODO BIEN!");
        console.log(msg);
    })
    .catch(err => {
        console.log("TODO MAL!");
        console.log(err);
    });