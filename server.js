const express = require('express');
const app = express();
const hbs = require('hbs');

//Llamar al archivo de helpers
require('./hbs/helpers');

//Puerto
const port = process.env.PORT || 3000;

//Express HBS view engine
app.set('view engine', 'hbs');
//Parciales
hbs.registerPartials(__dirname+'/views/partials');

//Donde cargar los archivos estaticos
app.use(express.static('public'));


//Donde llamo a index
app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`);
});