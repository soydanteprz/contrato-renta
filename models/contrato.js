import { Schema, model, models } from "mongoose";

const contratoSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
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
    sexoArrendatario: {
        type: String,
    },
    sexoAval: {
        type: String,
    }
});

const Contrato = models.Contrato || model("Contrato", contratoSchema);

export default Contrato;