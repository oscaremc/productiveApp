const { Schema, model } = require('mongoose');
const Ciclos = mongoose.model('Ciclos');

const retoSaberSchema = new Schema({
    ciclo: { type: Scheme.ObjectId, ref: "Ciclos" },
    enbabezado: { type: String },
    contenido: { type: String },
}, {
    timestamps: true
});

module.exports = model('RetoSaber', retoSaberSchema);