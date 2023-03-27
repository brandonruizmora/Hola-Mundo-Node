const printUserAndUpperCaseName = (user) => {
    console.log(user);
    console.log(user.nombre.toUpperCase());
}

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: "Brandon"
    };
    callback(usuario);
}

getUsuarioById(10, printUserAndUpperCaseName );