const parser = require('./Grammar/Grammar');
const fs = require('fs');

const ast = parser.parse('3 ***..*..*.. **..**..**..*.. .');
fs.writeFile('file.txt',ast,(err: any)=>{
    if(err){
        console.log("No se pudo guardar el archivo");
    }
});