"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/Card";
import { Select } from "@repo/ui/Select";
import { TextInput } from "@repo/ui/TextInput"
import { useState } from "react";


const SUPPORTED_BANKS = [{
    id : "1",
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    id : "2",
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];


export const AddMoney = ()=>{
    const [redirectUrl , setRedirectUrl ] = useState(SUPPORTED_BANKS[0]?.redirectUrl);


    return <Card title="Add Money to Wallet">
        <div className="w-full">
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={()=>{}}></TextInput>
            <div className="py-4 text-left">
                Bank
            </div>

            <Select onSelect={(value) => {
                setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
                }} 
                options ={SUPPORTED_BANKS.map(x => ({

                    id : x.id,
                    key: x.name,
                    value: x.name
                }))} />
             <div className="flex justify-center pt-4">
                <Button onclick={() => {
                    window.location.href = redirectUrl || "";
                }}>
                    Add Money
                </Button>
            </div> 
        </div>
    </Card>
}