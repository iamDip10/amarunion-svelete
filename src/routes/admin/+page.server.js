import { fail, redirect } from "@sveltejs/kit";


export const actions = {
    default: async({request}) => {
        throw redirect (303, 'admin/adashboard') ;
    }
}