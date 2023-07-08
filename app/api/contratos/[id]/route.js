import Contrato from "@models/contrato";
import { connectToDB } from "@utils/database";

// GET
export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const contrato = await Contrato.findById(params.id).populate("creator");
        if (!contrato) {
            return new Response(
                JSON.stringify({ message: "Contrato no encontrado" }),
                { status: 404 }
            );
        }

        return new Response(JSON.stringify(contrato), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};

export const PATCH = async (req, { params }) => {
    const {
        nombreArrendador,
        direccionArrendador,
        nombreArrendatario,
        direccionArrendatario,
        nombreAval,
        direccionAval,
        FechaInicio,
        FechaFin,
        sexoArrendador,
        sexoArrendatario,
        sexoAval,
        precio,
    } = await req.json();

    try {
        await connectToDB();

        const contratoExistente = await Contrato.findById(params.id);
        if (!contratoExistente) {
            return new Response(
                JSON.stringify({ message: "Contrato no encontrado" }),
                { status: 404 }
            );
        }

        contratoExistente.nombreArrendador = nombreArrendador;
        contratoExistente.direccionArrendador = direccionArrendador;
        contratoExistente.nombreArrendatario = nombreArrendatario;
        contratoExistente.direccionArrendatario = direccionArrendatario;
        contratoExistente.nombreAval = nombreAval;
        contratoExistente.direccionAval = direccionAval;
        contratoExistente.FechaInicio = FechaInicio;
        contratoExistente.FechaFin = FechaFin;
        contratoExistente.sexoArrendador = sexoArrendador;
        contratoExistente.sexoArrendatario = sexoArrendatario;
        contratoExistente.sexoAval = sexoAval;
        contratoExistente.precio = precio;

        await contratoExistente.save();

        return new Response(JSON.stringify(contratoExistente), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};

export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();

        await Contrato.findByIdAndDelete(params.id);

        return new Response(JSON.stringify({ message: "Contrato eliminado" }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
