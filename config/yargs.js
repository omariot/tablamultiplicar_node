const params = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', params)
    .command('crear', 'Crea archivo de la tabla de multiplicar', params)
    .help()
    .argv;

module.exports = {
    argv
}