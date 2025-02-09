/* 3.1 */

const enrutador = (lista) => {
    const ruta = lista.slice(0, -2).join('/')
    const extension = lista.slice(-2).join('.')
    return `${ruta}/${extension}`
}


const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
];

console.log(enrutador(input1)); // 'Downloads/Videos/capture.mp4'


const input2 = [
    'CodinGame',
    'python',
    'py',
];

console.log(enrutador(input2)); // 'CodinGame/python.py'


 const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
];

console.log(enrutador(input3)); // 'programming/languages/easy/beginner/useful/pythonstuff.py'


/* 3.2 */

const separador = (numero) => {
    const cadena = numero.toString().split('')
    return cadena.join('-')
}

const input = 10;
console.log(separador(input)); // '1-0'

const secondInput = 1;
console.log(separador(secondInput)); // '1'

const thirdInput = 11234;
console.log(separador(thirdInput)); // '1-1-2-3-4'


/* 3.3 */

const inversor = (word) => {
    const drow = word.split('').reverse().join('')
    const long = word.length.toString()
    return `${long} ${drow}`
}

const input331 = 'string';
console.log(inversor(input331)); // '6 gnirts'

const input332 = 'variable';
console.log(inversor(input332)); // '8 elbairav'

const input333 = 'pointer';
console.log(inversor(input333)); // '7 retniop'