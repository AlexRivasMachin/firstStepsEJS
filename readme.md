# Introducción a EJS
## ¿Qué es EJS?
Es un sistema de plantillas para JavaScript que nos permite la incrustación de código JavaScript directamente en las plantillas HTML. Gracias a esto podemos generar dinamicamente contenido HTML en el lado del servidor.
### Ejemplo de EJS
```EJS
<% if(user){%>
    <h2><%= user.name %></h2>
<% } %>
```
Con este ejemplo podemos representar el nombre de un usuario en un H2 de formas que te lo carga dinamicamente.
## ¿Como empezar?
Para empezar debemos tener un proyecto con Node.js, express y ejs:
1. `npm init`
2. `npm install express`
3. `npm install ejs`

## Estructura
### app.js
Vamos a seguir una estructura básica de express:  
```JS
const express = require ('express');
const path = require ('path');
const PORT = 5000
const app = express();
```
Ahora vanos a indicar que usaremos plantillas de EJS: 
```JS
//indicamos qie vamos a hacer uso de plantillaS
app.set("view engine", "ejs");
//indicamos donde estan
app.set("views", path.join(__dirname,'views'));
```
**¿Qué vamos a hacer?**
Vamos a simular una pequeña base de datos de forma que cada elemento de la base de datos este representado en una lista desde HTML, esta lista va a ser generada con EJS dinamicamente.

Simulamos la base de datos:
```JS
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
```
Propuesta get: 
``` JS
//introducirmos que queremos cargas, y que valores les damos
app.get("/",function(req, res){
    res.render('index',{
        'titulo':'Probando EJS',
        'clientes': clientesApp
    });
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
```
Como vemos , hay que introducir los valores que queremos usar, y donde los queremos cargar, esto se hace gracias a ejs que usa etiquetas.
### index.ejs
En el index, tendremos toda la estructura HTML de nuestra página.En nuestro caso vamos a:  
1. Definir un título de pagina que cambie según el valor que le introduzcas:
```EJS
 <title><%=titulo%></title>
```

2. Definir una lista desordenada que represente los valores que tenemos en la BD simulado en `app.js`:
```EJS
<body>
    <ul>
        <%clientes.forEach(function(cliente){%>
        <li> <%=cliente.nombre%> <%=cliente.apellido%></li>
        <% }) %>
    </ul>
</body>
```

Como se puede ver en ambos casos se sigue la misma notación.

