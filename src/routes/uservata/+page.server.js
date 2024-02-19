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
    vataboi: async ({request})=> {
        const forms = await request.formData();
        const user = await prisma.users.findUnique({
            where: {
                number: forms.get("mobile"),
            }
        }) ;

        const mis = forms.get("mis") ;

        prisma.vataboi.create({
            data:{
                vataid: "vata-".concat(user.number),
                user_id: user.number,
                users: user,
                mis_number: mis,
                
            }
        })


    }
}