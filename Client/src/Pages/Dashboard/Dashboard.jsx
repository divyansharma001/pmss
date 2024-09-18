import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Details } from '../Details/Details'

const Dashboard = () => {
  return (
    <>
    <div className='grid grid-cols-11'>
      <div className='col-span-3'>
    <Sidebar/>
      </div>
      <div className='col-span-8'>
  <Details/>
      </div>
    </div>
    
    </>
  )
}

export default Dashboard