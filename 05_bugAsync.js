function obtenerUsuario(id) {
    let usuario;

    return new Promise((resolve) => {
        setTimeout(() => {
            if (id === 1) {
                usuario = { id: 1, nombre: 'John Doe' };
            } else {
                usuario = "No encontrado"
            }
            resolve(usuario);
        }, 2000);
    })
}

obtenerUsuario(1)
    .then(usuario => console.log(usuario));