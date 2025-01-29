import prisma from "@repo/db/client";
import express from "express";

const app = express();


app.post("/hdfc-webhook" , async  (req,res)=>{

    const paymentInfo = {
        token : req.body.token,
        userId : req.body.user_identifier,
        amount : req.body.amount
    }

    try {

        await prisma.$transaction([

            prisma.balance.updateMany({
                where : {
                    userId : paymentInfo.userId
                },
                data  : {
                    amount : {
                        increment : paymentInfo.amount
                    }
        
                }
            }),
    
            prisma.onRampTransaction.updateMany({
                where : {
                    token : paymentInfo.token
                },
                data : {
                    status : "Success"
                }
            })
    
    
        ])

        res.status(200).json({
            message : "captured"
        })
        

    }

    catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }    
})

app.listen(3005);