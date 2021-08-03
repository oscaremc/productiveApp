const { Schema, model } = require('mongoose');
const User = mongoose.model('User');

const objetiveSchema = new Schema({
    user: { type: Scheme.ObjectId, ref: "User" },
    fecha_objetivo: { type: String },
    nombre_objetivo: { type: String, require: true },
    hora_planeada: { type: Number, require: true },
    tiempo_trabajo: { type: Number },
    tiempo_descanso: { type: Number },
    cantidad_ciclos: { type: Number },
    ciclos_total: { type: Array },
    status: { type: Boolean },
}, {
    timestamps: true
});

module.exports = model('Objective', objetiveSchema);