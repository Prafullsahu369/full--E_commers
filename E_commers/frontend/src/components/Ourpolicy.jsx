import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Ourpolicy = () => {
return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div className="bg-white rounded-lg shadow transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:scale-105 cursor-pointer p-6 w-full max-w-xs m-auto">
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div className='bg-white rounded-lg shadow transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:scale-105 cursor-pointer p-6 w-full max-w-xs m-auto'>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy </p>
        </div>
        <div className="bg-white rounded-lg shadow transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:scale-105 cursor-pointer p-6 w-full max-w-xs m-auto">
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-400'>We provide 24/7 support </p>
        </div>
    </div>
)
}

export default Ourpolicy