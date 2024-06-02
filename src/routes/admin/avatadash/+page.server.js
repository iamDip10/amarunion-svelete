import prisma from "../../../lib/prisma"
import { actions } from "../../SignUpUser/+page.server";


export const load = () => {
    return {
        books: prisma.vataboi.findMany({
            where: {
                status: {
                    not: "done",
                }
            },
            include: {
                users: true,
            }
        }),
    };
}

export const actions = {
    default: async({request}) => {
        let data = await request.formData() ;
        await prisma.vataboi.update({
            where: {
                vataid: data.get('vata'),
            },
            data: {
                status: "done",
            }
        })
    }
}