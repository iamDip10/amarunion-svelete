import prisma from '../../../lib/prisma.js'


export const load = ({params}) => {
    return {
        user: prisma.users.findUnique({
            where: {
                number: params.phone,
            },
        }),

        vataS: prisma.vataboi.findMany({
            where: {
                vataid: {
                    contains: "vata-".concat(params.phone)
                }
            },
    
        }),

        vatatarikh: prisma.givevata.findMany({
            where: {
                user_id: {
                    contains: params.number
                },
            },
        })
    };
}