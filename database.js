const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productiveapp', {
    useNewUrlParser: true
})
    .then(db => console.log('Conexion completa a la base de datos!'))
    .catch(err => console.log(err));