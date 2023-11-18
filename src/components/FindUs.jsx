import React from 'react'
import { bg, findus, spoon, welcome } from '../../public'

const FindUs = () => {
    return (
        <div className='relative w-full min-h-screen'>
            <img src={bg} alt='bg' className='absolute z-[-1]  w-full h-full' />
            <div className='relative w-full items-center px-[5%] min-h-screen py-1 flex sm:flex-row flex-col sm:justify-between items-between sm:gap-3 gap-10  text-white'>
                <div className='flex flex-col md:w-[50%] pt-[100px] sm:w-[45%]  gap-2 ' >
                    <p className='text-[18px] font-[300]'>Contact</p>
                    <img src={spoon} alt='spoon' className='w-[50px]' />
                    <h1 className='capitalize text-[60px] text-[#d0d3a7]' style={{ fontFamily: 'Croissant One' }} >find us</h1>
                    <p className='capitalize text-[18px] font-[300]'>
                        sit tellus lobortis sed senectus vivamus molestie. condimentum volutpat morbi facillisis quam scelerisque sapien. et,penatibus aliquam amet tellus
                    </p>
                    <h3 className='text-[#d0d3a7] text-[20px] my-4'>Opening Hours</h3>
                    <p>Mon-Fri: 10:00 Am - 02:00 Am</p>
                    <p>Sat-Sun: 10:00 Am - 03:00 Am</p>
                    <button type='button' className='w-[100px] rounded-md bg-[#efebeb] text-black h-[60px] sm:mt-[60px] mt-[10px]'>Visit Us</button>

                </div>
                <div className='flex md:w-[50%] sm:w-[55%] mb-[100px] h-[450px]'>
                    <img className='object-contain flex w-full ' src={findus} alt='sss' />
                </div>
            </div>
        </div>
    )
}

export default FindUs