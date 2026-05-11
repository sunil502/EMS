import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTAsk from '../Others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTAsk />
    </div>
  )
}

export default AdminDashboard
