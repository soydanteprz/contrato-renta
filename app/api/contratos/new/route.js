import { connectToDB } from "@utils/database";
import Contrato from "@models/contrato";


export const POST = async (req) => {
    const { userId, 
        nombreArrendatario, 
        direccionArrendatario,
        nombreAval, 
        direccionAval, 
        FechaInicio, 
        FechaFin,
        sexoArrendatario,
        sexoAval
    } = await req.json();

    try {
        await connectToDB();
        const newContrato = new Contrato({
            creator: userId,
            nombreArrendatario,
            direccionArrendatario,
            nombreAval,
            direccionAval,
            FechaInicio,
            FechaFin,
            sexoArrendatario,
            sexoAval
        });

        await newContrato.save();

        return new Response(JSON.stringify(newContrato), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};