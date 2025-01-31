"use client"
import { Button } from '@repo/ui/button'
import { Card } from '@repo/ui/Card'
import { Center } from '@repo/ui/Center'
import { TextInput } from '@repo/ui/TextInput'
import React, { useState } from 'react'
import { p2pTransfer } from '../lib/p2ptransfer'
import Popup from './Popup'
import { div } from 'framer-motion/client'
import PulsatingTick from './Pulsatingtick'
import { useRouter } from 'next/navigation'




const SendMoney = () => {
  const [phone , setPhone] = useState("");
  const [amount , setAmount] = useState(0);
  const [status , setStatus] = useState(false);
  const [Processing , setProcessing] = useState(false);
  const router = useRouter();


  const handleSend = async () => {
    
  };
  
  return (
    <div className='relative'>

      <div className='absolute inset-0 z-10'>
        <Card title='Send Money'>
              <TextInput placeholder='987654321' label='Phone number' onChange={(value)=>{
                setPhone(value)
              }}></TextInput>
              <TextInput placeholder='0' label = 'Amount(₹)' onChange={(value)=>{
                setAmount(parseInt(value))

              }}></TextInput>
              <div className='pt-4'>
                <Center>
                <div>
              <Button onclick={async ()=> {
                setProcessing(true);
                await p2pTransfer(phone, amount);
                setProcessing(false);
                setStatus(true);
              }}>Send</Button> </div>
                </Center>
              </div>
          </Card>
      </div>


      {status ? ( 
        <div className=''>
          <Popup>
            <div className='bg-white opacity-100 rounded rounded-md py-3 px-1 border-slate-500'>
              <div className ="p-2 flex text-2xl font-medium ">
                

                <div className='pr-2'>
                  Transaction Successful
                </div>
                <PulsatingTick></PulsatingTick>
              </div>

              <Center>
              <div className='flex pt-2'>
        
                <div className='px-1'>
                <Button onclick={()=>{
                router.push('/dashboard')
              }}>Back Home</Button>

                </div>
                <div className='px-1'>
                <Button onclick={()=>{
                  setStatus(false);
                }}> New Transaction </Button>

                </div>
              </div>
              </Center>

              

              
              

            </div>
          
        </Popup>
        </div>) : <div></div>
        
      }
    </div>
  )
}

export default SendMoney