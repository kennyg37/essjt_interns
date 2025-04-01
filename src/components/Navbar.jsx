import React from 'react'
import Button from './Button'

const Navbar = () => {
    
  return (
    <>
      <div className=' p-[5px] border-2 flex appHeader'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className=''>
        <Button />
      </div>
    </div>
    </>
  )
}

export default Navbar