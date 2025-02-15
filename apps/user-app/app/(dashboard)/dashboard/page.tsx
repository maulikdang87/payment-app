
import React from 'react'
import { OnRampTransactions } from '../../components/OnRampTransactions'
import { BalanceCard } from '../../components/BalanceCard'
import { AddMoney } from '../../components/AddMoney'
import prisma from '@repo/db/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import { stringify } from 'querystring';


async function getBalance() {
    const session = await getServerSession(authOptions);

    if(!session){
      return {
        amount: 0,
        locked: 0
    };
    }
    
    const balance = await prisma.balance.findFirst({
        where: {
            userId : session.user.id
        }
    });

    
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}


async function getOnRampTransactions(){
  const session = await getServerSession(authOptions);

  if(!session){
    return [] ;
  }
  const txns = await prisma.onRampTransaction.findMany({
    where : {
      userId : session.user?.id
    }
  })

  return txns.map( t=> ({
    id : t.id.toString(),
    time :new Date(t.startTime),
    amount : t.amount,
    status : t.status as string,
    provider : t.provider
  }))
}



export default async function() {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();

  return <div className="w-full">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
          Dashboard
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
          <div>
              <AddMoney />
          </div>
          <div>
              <BalanceCard amount={ balance?.amount} locked={balance?.locked} />
              <div className="pt-4">
                  <OnRampTransactions transactions={transactions ?? []} />
              </div>
          </div>
      </div>
  </div>
}


