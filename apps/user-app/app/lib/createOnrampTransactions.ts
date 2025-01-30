"use server"

import prisma from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth";

const createOnrampTransaction = async (amount : number , provider : string)=>{
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    const token = Math.random().toString()

    if(!userId){
        return {
            message : "User not logged in"
        }
    }
    const transaction = await prisma.onRampTransaction.create({
        data : {
            userId,
            amount : amount,
            status : "Processing",
            startTime : new Date(),
            provider,
            token 
        }
    })

    return {
        message : "on ramp transaction added"
    }
}

export default createOnrampTransaction;