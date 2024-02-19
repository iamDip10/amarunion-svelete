import prisma from "../../../lib/prisma";


export const load = ({phone})=> {
    return {
        user: prisma.users.findUnique({
            where: {
                number: "01799781731",
            },
        }),
    };
}