import React from 'react'
import { bg, gericht, spoon } from '../../public'

const Footer = () => {
    return (
        <div className='relative w-full min-h-[50vh] flex flex-col'>
            <img src={bg} className='absolute z-[-10]  w-full h-full' />
            <div className='flex flex-col items-center md:gap-2 px-[5%] pt-[100px] mb-6'>
                <div className='flex flex-col items-center px-[5%] xlg:w-2/4 md:3/4  py-10 border border-[#d0d3a7] mb-6'>
                    <p className='text-white '>Newsletter</p>
                    <img src={spoon} alt='spoon' width={40} />
                    <h1 className='text-[50px] text-[#d0d3a7]' style={{ fontFamily: 'Croissant One' }}>Subscribe To Our Newsletter</h1>
                    <p className='text-white'>And Never Miss Latest Update!</p>
                    <div className='w-full flex md:flex-row flex-col gap-8 justify-center mt-10' >
                        <input type='text' className='border border-[#d0d3a7] p-4 rounded-md px-6 md:w-4/5 placeholder-[translate] bg-[black] text-white' placeholder='enter you email address' />
                        <button type='button' className='rounded-md bg-white text-black p-4 '>Subsicribe</button>
                    </div>
                </div>
                <div className='flex md:flex-row md:gap-2 gap-[35px] md:justify-between flex-col text-white font-[100] text-[18px] text-center items-center'>
                    <div className='flex flex-col gap-1 md:w-1/4'>
                        <h2 className='text-[20px] font-[400] mb-2'>Contact Us</h2>
                        <p>53rd,st,New York,NY</p>
                        <p>10019, USA</p>
                        <p>+1 212-344-1230</p>
                        <p>+1 212-555-1230</p>
                    </div>
                    <div className='flex flex-col gap-2 md:w-1/4 text-center items-center'>
                        <img src={gericht} alt='gericht' className='text-[20px] mb-2' width={120} />
                        <p className='md:w-full w-2/4'>"The best way to find yourself is to lose yourself in the service of others."</p>
                        <img src={spoon} width={40} />
                        <div className='flex text-white mt-2 gap-2'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 md:w-1/4 text-center items-center'>
                        <h2 className='text-[20px] font-[400] mb-2'> Working Hours</h2>
                        <p>Monday-Friday:</p>
                        <p className='mb-2'>08:00 Am-12:00 Am</p>
                        <p>Monday-Friday:</p>
                        <p>08:00 Am-12:00 Am</p>
                    </div>
                </div>
                <div className='flex w-full text-white  justify-center mb-2 mt-[80px]'>
                    <p> 2021 Gericht, All Right Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer