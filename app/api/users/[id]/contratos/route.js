import Contrato from "@models/contrato";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();


        const contratos = await Contrato.find({ creator: params.id }).populate("creator");
        return new Response(JSON.stringify(contratos), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
