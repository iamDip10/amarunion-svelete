
import { writeFileSync } from "fs";
import prisma from "../../../lib/prisma";


export const load = ({params})=> {
    
    return {
        user: prisma.users.findUnique({
            where: {
                number: params.phone,
            },
            include: {
                vataboi: true,
            }
        }),
        vata: prisma.vataboi.findUnique({
            where: {
                vataid: "vata-".concat(params.phone),
            }
        })
    };
}

export const actions = {
    default: async({request, params}) => {
        const forr = await request.formData() ;
        const varr = forr.get('pic') ;
        console.log(varr) ;
        writeFileSync(`./src/img/${varr.name}`, Buffer.from(await varr.arrayBuffer())) ;

        await prisma.users.update({
            where: {
                number: params.phone,
            },
            data: {
                prof_pic: varr.name,
            },
        })
    }
}