import prisma from "../../../lib/prisma"


export const load = () => {
    return {
        comps: prisma.complaintboi.findMany({
            include: {
                userfk: true,
            }
        }), 
        vatas: prisma.vataboi.findMany({
            include: {
                users: true,
            }
        }),
    };
}

export const actions = {
    default: async({request}) => {
        let data = await request.formData() ;

        let value = parseInt(data.get("value")) ;

        let count = await prisma.users.count() ;

        let distri = value/count ;

        await prisma.givevate.create({
            data: {
                month: new Date().getMonth(),
                money: distri,

            }
        })

        
    }
}