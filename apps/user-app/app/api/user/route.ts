import prisma from "@repo/db/client";
import { NextResponse } from "next/server";


const client = prisma;


export const GET = async () => {
    const user = await prisma.user.create({
        data: {
            phone : "1234567890",
            password : "12342"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}