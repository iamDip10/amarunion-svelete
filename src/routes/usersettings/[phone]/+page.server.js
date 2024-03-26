import { printer } from 'prettier/doc.js';
import prisma from '../../../lib/prisma.js'


export const load = ({params}) => {
    return {
        user: prisma.users.findUnique({
            where: {
                number:params.phone,
            },
        }),
    }
}

export const actions = {
    default: async({request, params}) => {
        let datas = await request.formData();

        let newname = datas.get("name") ;
        let newpreAdd = datas.get("p_add") ;
        let newperAdd = datas.get("pa_add") ;
        let newpass = datas.get("new-pass") ;

        

        const user = await prisma.users.findUnique({
            where: {
                number: params.phone,
            },
        })

        if (newname == "") {
            newname = user.name;
        }
        if (newpreAdd == "") {
            newpreAdd = user.pressent_address;
        }
        if(newperAdd == "" ) {
            newperAdd = user.permanent_address;
        }
        if (newpass == "" ) {
            newpass = user.password;        
        }

        await prisma.users.update({
            where: {
                number: params.phone,
            },
            data: {
                name: newname,
                pressent_address: newpreAdd,
                permanent_address: newperAdd,
                password: newpass,
            }
        })
    }
}