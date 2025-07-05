import React from 'react'

const Newsletter = () => {
  const onSbmithandler = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }
  return (
   <div className='text-center'>
    <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
    <p className='text-gray-400 mt-3'>
      Join our mailing list and be the first to hear about exclusive offers, new arrivals, and more. Get 20% off your first purchase!
    </p>
    <form onSubmit={onSbmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
 <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
 <button type='submit' className='bg-black text-white text-xs p-10 py-4'>SUBSCRIBE</button>
    </form>
    
   </div>
  )
}

export default Newsletter