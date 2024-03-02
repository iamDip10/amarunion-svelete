import prisma from "../../lib/prisma";
import { fail, redirect } from "@sveltejs/kit";

export const actions =  {
    default: async({request})=>{
        const data = await request.formData();
        const name = data.get("name");
        const number = data.get("number") ;
        const per_add = data.get("per_add") ;
        const pre_add = data.get("pre_add") ;
        const nid = data.get("nid") ;
        const password = data.get("pass") ;
        const repass = data.get("re_pass") ;

        let check = {
            small: 0,
            capital: 0,
            number: 0,
            spchar:0 ,
        } ; // s-0, l-1, n-2, len-3
        for (let i=0; i<password.length; i++) {
            if (  password[i] >= 'a' && password[i] <= 'z') {
                check.small += 1;
            }
            if ( password[i] >= 'A' && password[i] <= 'Z') {
                check.capital +=1 ;
            }
            if (password[i] >= '0' && password[i] <= '9') {
                check.number +=1 ;
            }
            if (password[i] == '#' || password[i] == '$' || password[i] == '%' || password[i] == '_' || password[i] == '-') {
                check.spchar +=1 ;
            }
        }

        console.log(check) ;
        let st ;
        if (check.small > 0  && check.capital >0 && check.number >0 && check.spchar > 0) {
            st = "strong" ;
        }
        else if (check.small > 0  ||  check.capital >0 || check.number >0 || check.spchar > 0) {
            st = "medium" ;
        }
        else if (check.small == 0  && check.capital  == 0 && check.number == 0 && check.spchar == 0) {
            st = "weak" ;
        }

        if (password != repass) {
            return fail(400, {incorrect: true}) ;
        }


        await prisma.users.create({
            data: {
                name: name,
                number: number,
                pressent_address: pre_add,
                permanent_address: per_add,
                nid: nid,
                password:password,
                pass_strength: st,
            },
        });

        throw redirect(303, '/');
    
    }
}
