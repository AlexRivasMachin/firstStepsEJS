const express = require ('express');
const path = require ('path');
const PORT = 5000

const app = express();

//indicamos qie vamos a hacer uso de plantillaS
app.set("view engine", "ejs");
//indicamos donde estan
app.set("views", path.join(__dirname,'views'));

app.listen(PORT,function(req,res){
    console.log('listening to ${PORT}')
})