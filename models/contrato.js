import { Schema, model, models } from "mongoose";

const contratoSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    nombreRentador: {
        type: String,
    },
    apellidoRentador: {
        type: String,
    },
    direccionRentador: {
        type: String,
    },
    nombreAval: {
        type: String,
    },
    apellidoAval: {
        type: String,
    },
    direccionAval: {
        type: String,
    },
    FechaInicio: {
        type: Date,
        required: true,
    },
    FechaFin: {
        type: Date,
        required: true,
    },
});

const Contrato = models.Contrato || model("Contrato", contratoSchema);

export default Contrato;