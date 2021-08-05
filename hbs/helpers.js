const hbs = require('hbs');

//Leer el archivo json
const fs = require('fs');
const data = fs.readFileSync('public/assets/data/datos.json','utf8');

 //Bloque de helpers
 //Para crear el formato de html
 //Y agregar la información recuperada de el archivo JSON
 hbs.registerHelper('listProducts', function () {
    let products = JSON.parse(data);
    var ret = '';
    products.forEach(producto => {
        ret += '<div> <img src="'+producto.imagen+'"alt="">';
        ret += '<p id="articulo">'+producto.nombre+'</p>';
        ret += '<p id="precio">$ '+ producto.precio+'</p></div>';
    });
    return ret;
 });
