"use client"
import React, { useEffect, useRef, useState } from 'react'
import SideBarItem from './SideBarItem'

const [minWidth, maxWidth, defaultWidth] = [ 90 ,500, 90];

const SideBarmb = () => {
    const isResized = useRef(false);
    const [width, setWidth] = useState(defaultWidth);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
        if (!isResized.current) {
        return;
        }
        
        setWidth((previousWidth) => {
        const newWidth = previousWidth + e.movementX / 2;
        
        const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;
        
        return isWidthInRange ? newWidth : previousWidth;
        });
        });
        
        window.addEventListener("mouseup", () => {
        isResized.current = false;
        });
        }
        
        
        
        , []);
        
    

        
  return (
    <div className="flex">
        <div style={{width: `${width / 16}rem`}} className='p-4 w-48 border-r border-slate-300 min-h-screen' >
            <div>
                <SideBarItem href={"/dashboard"} title={"Dashboard"} icon = {<HomeIcon/>} width={width}></SideBarItem>
                <SideBarItem href={"/transaction"} title={"Transactions"} icon = {<TransactionsIcon/>} width={width}></SideBarItem>
                <SideBarItem href={"/transfer"} title={"Transfer"} icon = {<TransferIcon/>} width={width}></SideBarItem>
                <SideBarItem href={"/p2p"} title={"P2P Transfer"} icon = {<P2Picon/>} width={width}></SideBarItem>
            </div>
        </div>

        <div
        className="w-2 cursor-col-resize hover:bg-gray-300 rounded"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />

    </div>
    )
}

export default SideBarmb


function HomeIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
  
  }
  function TransferIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
  </svg>
  }
  
  function TransactionsIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  }

  function P2Picon(){
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
  </svg>
   
  }
  
  