import React from 'react'
import Style from './Navbar.module.css';
import logo from "../../assets/images/logo.svg"
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className='bg-gray-100  text-center  lg:fixed  top-0 left-0 right-0 '>
        <div className="container justify-between mx-auto py-2 flex flex-col lg:flex-row items-center">
            <div className='flex flex-col lg:flex-row'>
                <img width={110} src={logo} alt="fresh cart logo" />

                <ul className='flex flex-col lg:flex-row'>
                    <li className='py-2'> <NavLink className="mx-2  text-lg text-slate font-light " to=''>Home</NavLink></li>
                    <li className='py-2'> <NavLink className="mx-2  text-lg text-slate font-light " to='cart'>Cart</NavLink></li>
                    <li className='py-2'> <NavLink className="mx-2  text-lg text-slate font-light " to='products'>Products</NavLink></li>
                    <li className='py-2'> <NavLink className="mx-2  text-lg text-slate font-light " to='brands'>Brands</NavLink></li>
                    <li className='py-2'> <NavLink className="mx-2  text-lg text-slate font-light " to='categories'>Categories</NavLink></li>
                </ul>
            </div>
            <div>
            <ul className='flex items-center flex-col lg:flex-row'>
                    <li className='py-2'> <NavLink className="mx-2  text-lg text-slate font-light " to='login'>Login</NavLink></li>
                    <li className='py-2'> <NavLink className="mx-2  text-lg text-slate font-light " to='register'>Register</NavLink></li>
                    <li className='py-2'> <NavLink className="mx-2  text-lg text-slate font-light " >Logout</NavLink></li>
                    <li className='flex items-center mx-2 py-2'>
                      <i className='fab mx-2 fa-facebook'></i>
                      <i className='fab mx-2 fa-twitter'></i>
                      <i className='fab mx-2 fa-instagram'></i>
                      <i className='fab mx-2 fa-youtube'></i>
                      <i className='fab mx-2 fa-tiktok'></i>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    
    </>
    
  )  
}
