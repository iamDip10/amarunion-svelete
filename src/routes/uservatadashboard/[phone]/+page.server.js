import prisma from '../../../lib/prisma.js'


export const load = ({params}) => {
    return {
        user: prisma.users.findUnique({
            where: {
                number: params.phone,
            },
        }),

        vataS: prisma.vataboi.findUnique({
            where: {
                vataid: "vata-".concat(params.phone),
            },
    
        }),
    };
}