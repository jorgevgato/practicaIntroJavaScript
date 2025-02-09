const usuario = {
    nombre: 'Jorge',
    apellido: 'Gato',
    asignaturas: [
        {nombre: 'node', inicio: '2025-03-10'},
        {nombre: 'git', inicio: '2025-02-02'},
        {nombre: 'react', inicio: '2025-05-12'}
    ],
    busquedaEmpleo: true
}

console.log(usuario.asignaturas[2].inicio)

const fechaInicio = (nombreAsignatura) => {
    const asignatura = usuario.asignaturas.find(element => element.nombre === nombreAsignatura.toLowerCase())
    return asignatura ? asignatura.inicio : "No tienes esta asignatura"
}

console.log(fechaInicio('REACT'))