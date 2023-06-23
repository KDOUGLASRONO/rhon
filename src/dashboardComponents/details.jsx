import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {IoCloudUpload} from 'react-icons/io5'
const details = ({userInfo}) => {
  console.log(userInfo)
  return (
    <section className='h-full bg-violet-50 w-full '>
      <div className="flex justify-between py-6 px-8 border-dashed border-2">
        <FaUserAlt className='detailsIcon h-10 w-10'/>
        <div className='userNameDetails'>
          <span className='text-2xl'>{userInfo.name}</span>
        </div>
        <div className='flex uploadImage bg-violet-500 text-white px-4 py-2 rounded-lg'>
          <IoCloudUpload  className='mr-4 h-6 w-6'/>
          <span className='text-xl'>upload</span>
        </div>
      </div>
      <div className='text-2xl text-violet-500 my-4 px-4'>
        <h3>Merchant Info:</h3>
      </div>
      
      <div className='flex justify-between md:justify-normal text-xl px-4 py-4 w-full border-dashed border-2'>
        <div className='md:mr-16'>
          <h3 className='py-2'>Phone Number: </h3>
          <h3 className='py-2'>Merchant ID:</h3>
          <h3 className='py-2'>Email:</h3>
          
        </div>
        <div className=''>
          <h3 className='py-2'>{"0" && userInfo.phone}</h3>
          <h3 className='py-2'>676776</h3>
          <h3 className='py-2'>{userInfo.email}</h3>
        </div>        
      </div>
    </section>
  )
}

export default details