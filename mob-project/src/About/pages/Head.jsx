import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import headerone from '/src/assets/header1.png'
import '/src/App.css'

const Head = () => {
    return (
        <div className='max-w-[1640px] projects-eight max-h-[500px] md:max-h-[580px] lg:h-[580px] mx-auto py-[20px] px-5 md:px-14 lg:px-24'>
            <div className=' max-w-[1400px] mx-auto h-full'>
                <nav className=' flex justify-between items-center'>
                    <div className='flex items-center gap-3 lg:gap-5'>
                        <img src={headerone} alt="" />
                        <p className='font-semibold capitalize text-[#593F00]'>MOB ESTATES</p>
                    </div>
                    <div className='hidden md:block '>
                        <ul className='font-semibold text-white flex justify-between gap-4 lg:gap-9'>
                            <Link to='/'>Home</Link>
                            <Link to=''>Properties</Link>
                            <Link to=''>Blog</Link>
                            <Link to=''>Agents</Link>
                            <Link to='/about'>About Us</Link>
                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button className=' hidden md:block uppercase border-2 border-white font-medium text-white py-[10px] lg:py-[15px] px-[20px] lg:px-[30px] rounded-tl-[30px] rounded-br-[30px]'>
                            sign in 
                        </button>
                        <button className=' hidden lg:block uppercase bg-[#2549D3] font-medium text-white py-[10px] lg:py-[15px] px-[20px] lg:px-[30px] rounded-tl-[30px] rounded-br-[30px]'>
                            sign up
                        </button>
                        <AiOutlineMenu size={25} color='white' className='block md:hidden'/>
                    </div>
                </nav>
                <div className=' max-w-[1000px] mx-auto w-full flex flex-col justify-end h-full'>
                    <div className='mx-auto text-white text-center font-semibold md:font-bold text-2xl md:text-4xl lg:text-6xl capitalize my-[20px] md:my-[70px] lg:my-[100px] max-w-full md:max-w-[500px] lg:max-w-full h-full'>
                        <h1>get to know us!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head