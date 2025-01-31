import React from 'react'
import SendMoney from '../../components/SendMoney'
import PulsatingTick from '../../components/Pulsatingtick'

const P2P = () => {
  return (
    <div className='h-screen'>
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
          P2P Transfer
        </div>
        <div className='w-2/5 '>
            <SendMoney/>
        </div>
    </div>
  )
}

export default P2P