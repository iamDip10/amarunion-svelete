import prisma from '../../../lib/prisma.js'

export const load = ({params}) => {
    return {
        user: prisma.users.findUnique({
            where: {
                number: params.phone,
            }
        }),

        complaint: prisma.complaintboi.findMany({
            where: {
                user_id: params.phone, 
            }
        })
    }
}