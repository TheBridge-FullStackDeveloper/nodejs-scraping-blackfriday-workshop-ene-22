const express = require('express');
const routes = require('./routes/products');

const app = express();
const port = '3000';

// Middlewares para habilitar recepción de JSONs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importamos las rutas
app.use(routes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})