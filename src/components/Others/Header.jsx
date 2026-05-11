import { useState } from "react"
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  //   const [userName,setUserName] = useState('')
  //   if(!data){
  //     setUserName('Admin')
  //   }else{
  //     setUserName(data.firstName)
  //   }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', ' ')
    props.changeUser(' ')
    //  window.location.reload()
  }

  return (
    <div className='flex items-end justify-between p-5 border-b-2 border-gray-300'>
      <h1 className='text-2xl font-medium'>
        Hello
        <br />
        <span className='text-3xl font-semibold'>userName 👋 </span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-3 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
