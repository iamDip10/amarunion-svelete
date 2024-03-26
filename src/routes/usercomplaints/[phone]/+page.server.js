import { writeFileSync } from 'fs';
import prisma from '../../../lib/prisma.js'



export const load = ({params}) => {
    return {
        user: prisma.users.findUnique({
            where: {
                number: params.phone,
            },
        })
    }
}


export const actions = {
    default: async({request, params}) => {
        let frmData = await request.formData() ;

        let type = frmData.get("dhoron");
        let name = frmData.get("Oname") ;
        let jela = frmData.get("jela");
        let adds = frmData.get("adds");
        let pnumbr = frmData.get("phn") ;
        let comp = frmData.get("complain") ;
        let imag = frmData.get("files") ;

        let usr = await prisma.users.findUnique({
            where: {
                number: params.phone,
            }
        })

        if (imag.size > 0) {
            writeFileSync(`./src/img/${imag.name}`, Buffer.from( await imag.arrayBuffer())) ;
        }

        await prisma.complaintboi.create({
            data: {
                complaintId: usr.number.concat(pnumbr),
                user_id: usr.number,
                pics: imag.name,
                types: type,
                name: name,
                jela: jela,
                address: adds,
                number: pnumbr,
                extra: comp,
            },
        });
    }
}
