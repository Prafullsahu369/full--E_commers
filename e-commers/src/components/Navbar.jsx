import React from 'react'
import {assets} from '../assets/assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
return (
    <div className='flex items-center justify-between py-5 font-medium px-6 mt-4 '>
        <img src={assets.logo} className='w-24' alt="Logo" />

        <ul className='hidden sm:flex gap-12 ml-16 text-lg text-gray-700 '>
            <NavLink to="/" className='flex flex-col items-center gap-2' activeClassName="font-bold">
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.6px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/collections" className='flex flex-col items-center gap-2' activeClassName="font-bold">
                <p>COLLECTIONS</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/about" className='flex flex-col items-center gap-2' activeClassName="font-bold">
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/contact" className='flex flex-col items-center gap-2' activeClassName="font-bold">
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
    </div>
)
}

export default Navbar