import prisma from "../../../lib/prisma";
import { redirect } from "@sveltejs/kit";
import { writeFileSync } from "fs";

export const load = ({params}) => {
    return {
        user: prisma.users.findUnique({
            where: {
                number: params.phone,
            },
        })
    }
}

export const actions =  {
    default: async ({request})=> {
        const forms = await request.formData();
        const user = await prisma.users.findUnique({
            where: {
                number: forms.get("mobile"),
            }
        }) ;

        const mis = forms.get("mis") ;
        const filee = forms.get('filee') ;

        console.log(filee) ;
        if (filee.size > 0 ) {

            writeFileSync(`./src/img/database/${filee.name}`, Buffer.from( await filee.arrayBuffer())) ;
        }

        await prisma.vataboi.create({
            data:{
                vataid: "vata-".concat(user.number),
                user_id: user.number,
                mis_number: mis,
                pics: filee.name,
                status: "hold",
                type: forms.get("vatatype"),
            },
        });


    }
}