import { Result } from "postcss";
import prisma from "../lib/prisma";
import { fail, redirect } from "@sveltejs/kit";
import { goto } from "$app/navigation";
import { onMount } from "svelte";


export const actions = {
    default: async ({request})=>{
        const data = await request.formData() ;
        const user_number = data.get("phone_number") ;
        const pass = data.get("password") ;

        const actual_pass = await prisma.users.findUnique({
            where:{
                number: user_number
            },
            select: {
                password: true,
            },
        });

        if (actual_pass.password === pass) {
            throw redirect(303, `userdashboard/${user_number}`) ;
        }
        
    }
}