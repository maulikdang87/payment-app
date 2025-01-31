"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import prisma from "@repo/db/client";
import { format } from "path";


export async function p2pTransfer (to : string , amount : number ){


    const session = await getServerSession(authOptions);
    const from = session.user.id;

    if(!from){
        return
    }

    const toUser = await prisma.user.findUnique({
        where : {
            phone : to
        }
    })

    if(!toUser){
        return ;
    }

    await prisma.$transaction(async(tx)=> {

        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${from} FOR UPDATE`;
        const fromBalance = await tx.balance.findUnique({
            where : {
                userId : from
            }
        })

        if(!fromBalance || fromBalance.amount < amount){
            throw new Error('insufficient funds')
        }

        await tx.balance.update({
            where : { userId : from },
            data : {amount : {decrement : amount*100}}
        })

        await tx.balance.update({
            where : { userId : toUser.id },
            data : {amount : {increment : amount*100}}
        })

        await tx.p2pTransactions.create({
            data : {
                fromUserId : from,
                toUserId : to ,
                amount : amount ,
                timeStamp : new Date()
            }
        })
    })


    return {
        message : "Success"
    }
}