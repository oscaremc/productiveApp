const { Schema, model } = require('mongoose');

const listaSchema = new Schema({
    user: { type: Scheme.ObjectId, ref: "User" },
    cantidad_total_ciclos: { type: Number },
    ciclo_Descanso: { type: Array },
}, {
    timestamps: true
});

module.exports = model('Lista', listaSchema);