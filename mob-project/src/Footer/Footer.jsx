import React from 'react'
import Footericon from '/src/assets/Footer (1).png'
import Instagram from '/src/assets/InstagramI.png'
import Twitter from '/src/assets/XI.png'
import Facebook from '/src/assets/MetaI.png'
import Linkdln from '/src/assets/LinkdlnI.png'

const Footer = () => {
    return (
        <div className='max-w-[1640px] bg-[#000000] mx-auto py-[20px] px-5 md:px-14 lg:px-24 text-white'>
            <div className=' max-w-[1400px] mx-auto h-full py-8 md:py-14 lg:py-20'>
                <div className=' flex justify-between flex-wrap'>
                    <div  className=' max-w-[390px] w-full'>
                        <div className=' mb-5'>
                            <div className='flex items-center gap-3 lg:gap-5 '>
                                <div>
                                    <img src={Footericon} alt="" />
                                </div>
                                <div className='capitalize text-[#2549D3] font-bold text-xl'>
                                    MOB ESTATES
                                </div>
                            </div>
                            <div className=' capitalize font-medium my-[25px]'>
                                <p>Lorem ipsum dolor sit amet consectetur. Viverra sed enim dolor egestas non tellus venenatis sagittis. Vitae vitae ullamcorper dolor lacus suspendisse auctor enim. </p>
                            </div>
                            <div className=' flex gap-[45px]'>
                                <div><img src={Instagram} alt="" /></div>
                                <div><img src={Twitter} alt="" /></div>
                                <div><img src={Facebook} alt="" /></div>
                                <div><img src={Linkdln} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div  className=' w-[250px]  mb-5'>
                        <div>
                            <div className='capitalize font-semibold text-2xl mb-[20px] lg:mb-[40px]'>
                                <h1>quick links</h1>
                            </div>
                            <ul className=' capitalize font-semibold flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                                <li>Home</li>
                                <li>Properties</li>
                                <li>Blog</li>
                                <li>Agents</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                    <div  className=' w-[250px]  mb-5'>
                        <div>
                            <div className='capitalize font-semibold text-2xl mb-[20px] lg:mb-[40px]'>
                                <h1>more</h1>
                            </div>
                            <ul className=' capitalize font-semibold flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                                <li>agents</li>
                                <li>landlords</li>
                                <li>fAQs</li>
                                <li>Agents</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' w-[250px] mb-5'>
                        <div>
                            <div className='capitalize font-semibold text-2xl mb-[20px] lg:mb-[40px]'>
                                <h1>popular searches</h1>
                            </div>
                            <ul className=' capitalize font-semibold flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                                <li>lekki apartments</li>
                                <li>bungalow</li>
                                <li>ikeja buildings</li>
                                <li>banana island</li>
                                <li>duplex</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer