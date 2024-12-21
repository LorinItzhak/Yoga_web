import React from 'react'
import { Link } from 'react-router-dom';

const card = ({item}) => {

      const{_id,name,image,availableSeats,price,totalEnrolled}=item;
      
  return (
    <div className='shadow-lg rounded-lg p-3 flex flex-col justify-between border border-secondary overflow-hidden m-4 '>
      <img src={image} alt=''/>
      <div>
        <h2 className='text-xl font-semibold mb-2 dark:text-white'>{name}</h2>
        <p className='text-gray-600 mb-2'>Available Seats: {availableSeats}</p>
        <p className='text-gray-600 mb-2'>Price: {price}</p>
        <p className='text-gray-600 mb-2'>Total students: {totalEnrolled}</p>
        <Link to={`class/${_id}`}className='text-center mt-2'>
          <button className=' px-2 bg-secondary text-white py-1 w-full rounded-xl font-bold mt-2'>Select</button>
        </Link>
      </div>
    </div>
  )
}

export default card
