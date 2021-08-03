const { Schema, model } = require('mongoose');
const Objective = mongoose.model('Objective');

const ciclosSchema = new Schema({
    objective: { type: Scheme.ObjectId, ref: "Objective" },
    verificador_descanso: { type: Boolean, require: true },
    fh_trabajo_inicio: { type: String, require: true },
    fh_trabajo_fin: { type: String },
    tiempo_trabajo: { type: Number },
    fh_descanso_inicio: { type: String },
    fh_descanso_fin: { type: String },
    tiempo_descanso: { type: Number },
}, {
    timestamps: true
});

module.exports = model('Ciclos', ciclosSchema);