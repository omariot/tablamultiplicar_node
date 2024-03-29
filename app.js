const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch(comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Nombre Archvo ${ archivo.green }`))
            .catch(err => console.log(err));
        break;
    default:    
        console.log('Commando no reconocido');
}




//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(argv.base);
//console.log('argv2',argv2);
