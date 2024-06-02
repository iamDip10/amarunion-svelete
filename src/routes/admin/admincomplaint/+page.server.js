import prisma from "../../../lib/prisma"



export const load = () => {
    return {
        comps: prisma.complaintboi.findMany(),
    };
}