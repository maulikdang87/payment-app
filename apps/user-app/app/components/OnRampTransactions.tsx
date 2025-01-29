import { Card } from "@repo/ui/Card"
// import  OnRampStatus from "@repo/db/client"

// export enum OnRampStatus {
//     Success,
//     Failure,
//     Processing
// }

interface TransactionProps {
    transactions: {
        id : string,
        time: Date,
        amount: number,
        status: any ,
        provider: string
    }[]
}


export const OnRampTransactions = ({
    transactions
} : TransactionProps
    ) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(t => <div key = {t.id} className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        
                        {t.time.toUTCString()}
                    </div>
                </div>
                {
                    t.status == "Success" ? (<div className="flex flex-col justify-center text-green-500">
                        + Rs {t.amount / 100}
                    </div>) : 
                   ( t.status == "Processing" ? <div className="flex flex-col justify-center text-amber-500">
                    + Rs {t.amount / 100} pending
                </div> : <div className="flex flex-col justify-center text-red-500">
                     Rs {t.amount / 100} Failed
                </div> )
                }
                

            </div>)}
        </div>
    </Card>
}

