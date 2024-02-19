import prisma from "../../lib/prisma";
import { redirect } from "@sveltejs/kit";

export const load = () => {
    return {
        user: prisma.users.findUnique({
            where: {
                number: "01799781731",
            },
        })
    }
}

export const actions =  {
    default: async({request})=> {
        const forms = await request.formData();
        
    }
}