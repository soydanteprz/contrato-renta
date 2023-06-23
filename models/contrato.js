import { Schema, model, models } from "mongoose";

const contratoSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    nombreArrendador: {
        type: String,
    },
    direccionArrendador: {
        type: String,
    },
    nombreArrendatario: {
        type: String,
    },
    direccionArrendatario: {
        type: String,
    },
    nombreAval: {
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
    sexoArrendador: {
        type: String,
    },
    sexoArrendatario: {
        type: String,
    },
    sexoAval: {
        type: String,
    },
    precio: {
        type: Number,
        required: true,
    },
});

const Contrato = models.Contrato || model("Contrato", contratoSchema);

export default Contrato;
