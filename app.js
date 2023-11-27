const express = require ('express');
const path = require ('path');
const PORT = 5000

const app = express();

//indicamos qie vamos a hacer uso de plantillaS
app.set("view engine", "ejs");
//indicamos donde estan
app.set("views", path.join(__dirname,'views'));

//Sample BD
let clientesApp = [
    {
        id: 1,
        nombre : 'Alex',
        apellido: 'Rivas',
        email: 'alex@uni.eus'
    },
    {
        id: 2,
        nombre : 'Martin',
        apellido: 'Lopez de Ipiña',
        email: 'martin@uni.eus'
    },
    {
        id: 3,
        nombre : 'Asier',
        apellido: 'Sainz',
        email: 'asier@uni.eus'
    },
    {
        id: 4,
        nombre : 'Ekaitz',
        apellido: 'Murillo',
        email: 'ekaitz@uni.eus'
    }
];

//introducirmos que queremos cargas, y que valores les damos
app.get("/",function(req, res){
    res.render('index',{
        'titulo':'Probando EJS',
        'clientes': clientesApp
    });
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
   