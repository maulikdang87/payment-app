import React from 'react'
import SideBarItem from '../components/SideBarItem'
import Transaction from './transaction/page'
import SideBar from '../components/SideBar'
import SideBarmb from '../components/SideBarmb'
const Layout = ({children} : {children : React.ReactNode}) : JSX.Element => {
  return (


    <div className='w-full h-screen grid grid-cols-[min-content_auto] grid-rows-[5fr_1fr] '>
      <div className='hidden md:block'>
        <SideBar/>
      </div>
      <div className='block md:hidden'>
        <SideBarmb />
      </div>
      <div >
        {children}
      </div>
    </div>

    
  )
}

export default Layout



