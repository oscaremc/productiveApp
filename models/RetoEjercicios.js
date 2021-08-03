const { Schema, model } = require('mongoose');
const Ciclos = mongoose.model('Ciclos');

const retoEjerciciosSchema = new Schema({
    ciclo: { type: Scheme.ObjectId, ref: "Ciclos" },
    ejercicio1: { type: String },
    link1: { type: String },
    ejercicio2: { type: String },
    link2: { type: String },
    ejercicio3: { type: String },
    link3: { type: String },
    ejercicio4: { type: String },
    link4: { type: String },
}, {
    timestamps: true
});

module.exports = model('RetoEjercicios', retoEjerciciosSchema);