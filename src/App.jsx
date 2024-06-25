import { useState } from 'react'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'


function App() {
 

  return (
    <div className='flex'>
<div className='w-[20%]'><Sidebar/></div>
<div className='w-[100%] overflow-hidden'><Outlet/></div>

    </div>
  )
}

export default App
