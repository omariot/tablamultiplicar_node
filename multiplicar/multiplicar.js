const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {
    
        if(!Number(base)){
            reject(`El valor introducido "${ base }" no es un numero`);
            return;
        }
        if(!Number(limite)){
            reject(`El valor introducido "${ ilmite }" no es un numero`);
            return;
        }
        console.log('=========================='.green);
        console.log(`Tabla de ${ base }`.green);
        console.log('=========================='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${ i } = ${ base * i }`);
        }
        
}

let crearArchivo = ( base, limite = 10 ) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido "${ base}" no es un numero`);
            return;
        }
        if(!Number(limite)){
            reject(`El valor introducido "${ ilmite }" no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${ i } = ${ base * i }\n`;
        }

        let nombreArchivo = `tablas/tabla-${ base }-al-${ limite }.txt`;

        fs.writeFile(nombreArchivo, data, (err) => {
        if (err) reject(err)
        else resolve (nombreArchivo);
        });
    })
}

module.exports = {
    crearArchivo,
    listar
}
