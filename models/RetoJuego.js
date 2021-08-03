const { Schema, model } = require('mongoose');
const Ciclos = mongoose.model('Ciclos');

const retoJuegoSchema = new Schema({
    ciclo: { type: Scheme.ObjectId, ref: "Ciclos" },
    pregunta: { type: String },
    respuesta1: { type: String },
    respuesta2: { type: String },
    respuesta3: { type: String },
    respuestaCorreta: { type: String },
}, {
    timestamps: true
});

module.exports = model('RetoJuego', retoJuegoSchema);