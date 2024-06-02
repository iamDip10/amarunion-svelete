import prisma from "../../../lib/prisma"

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
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

        await prisma.givevata.create({
            data: {
                month: month[new Date().getMonth()],
                money: distri,
                vata_id: "vata-01536105134-fighter",
            }
        })

        
    }
}