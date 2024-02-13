import prisma from "../../lib/prisma";
import { fail, redirect } from "@sveltejs/kit";

export const actions =  {
    default: async({request})=>{
        const data = await request.formData();
        const name = data.get("name");
        const number = data.get("number") ;
        const per_add = data.get("per_add") ;
        const pre_add = data.get("pre_add") ;
        const nid = data.get("nid") ;
        const password = data.get("pass") ;
        const repass = data.get("re_pass") ;

        if (password != repass) {
            return fail(400, {incorrect: true}) ;
        }
        await prisma.users.create({
            data: {
                name: name,
                number: number,
                pressent_address: pre_add,
                permanent_address: per_add,
                nid: nid,
                password:password,
            },
        });

        throw redirect(303, '/');
    
    }
}
