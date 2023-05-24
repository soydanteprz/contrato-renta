import { connectToDB } from "@utils/database";
import Contrato from "@models/contrato";


export const POST = async (req) => {
    const { userId, 
        nombreRentador, 
        apellidoRentador, 
        direccionRentador, 
        nombreAval, 
        apellidoAval, 
        direccionAval, 
        FechaInicio, 
        FechaFin
    } = await req.json();

    try {
        await connectToDB();
        const newContrato = new Contrato({
            creator: userId,
            nombreRentador,
            apellidoRentador,
            direccionRentador,
            nombreAval,
            apellidoAval,
            direccionAval,
            FechaInicio,
            FechaFin
        });

        await newContrato.save();

        return new Response(JSON.stringify(newContrato), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};