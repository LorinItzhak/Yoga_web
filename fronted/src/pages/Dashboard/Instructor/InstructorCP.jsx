import React from 'react'
import imgWelcome from "../../../assets/dashboard/jaconda-14.png";

const InstructorCP = () => {
  return (
    <div>
      <div className='h-screen my-5 ' >
        <h1 className='text-2xl  font-bold text-center'>Instructor Dashboard</h1>
    <img src={imgWelcome} alt=""  className='w-auto'/>
      </div>
    </div>
  )
}

export default InstructorCP
