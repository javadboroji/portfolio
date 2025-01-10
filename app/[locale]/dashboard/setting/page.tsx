import React from 'react'
import DashBoardLayout from '../components/DashBoardLayout'
import UserForm from './Components/Form/UserForm'
import Stepts from './Components/Form/Stepts'

function padge() {
  return (
    <DashBoardLayout>
      <div className='flex flex-col w-full'>
      <Stepts/>
      <UserForm/>
      </div>
      
    </DashBoardLayout>
  )
}

export default padge