import Contrato from "@models/contrato";
import { connectToDB } from "@utils/database";

export const GET = async (req) => {
    try {
        await connectToDB();
        
        const contratos = await Contrato.find();
        return new Response(JSON.stringify(contratos), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
}