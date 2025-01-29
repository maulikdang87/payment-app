"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface SideBarProps {
    href : string ,
    title : string ,
    icon : React.ReactNode,
    width : number
}

const [minWidth, maxWidth, defaultWidth] = [200, 500, 350];

const SideBarItem = ({href , title , icon , width } : SideBarProps) => {

    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname == href;
   
    
  return (
    <div>
      <div className={`flex p-2 ${selected ? "text-violet-500" : "text-slate-500"}  cursor-pointer`} onClick={()=>{
      router.push(href)
    }}> 
      <div className='flex' >
      <div className='px-2 '>
          {icon}
        </div>
        <div className= {` ${width > 150 ? "block" : "hidden"}`}>
            {title}
        </div>
      </div>
    </div>
    

    </div>
    

    
  )
}

export default SideBarItem
