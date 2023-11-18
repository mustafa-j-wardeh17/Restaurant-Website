import React from 'react'
import { bg, chef, sign, spoon, welcome } from '../../public'


const Chef = () => {
    return (
        <div className='w-full relative pb-5 pt-20 items-center  sm:px-[5%] min-h-screen px-10   flex sm:flex-row flex-col  sm:justify-between items-between sm:gap-3 gap-10  text-white'>
            <div className='flex lg:w-[40%] md:w-[50%] sm:w-[55%]  md:mb-0 mb-4 h-[450px]'>
                <img className='object-contain flex w-full ' src={chef} alt='sss' />
            </div>
            <div className='flex flex-col md:w-[50%] sm:w-[45%] sm:ml-20 gap-4 ' >
                <p className='text-[18px] font-[300]'>Chef's World</p>
                <img src={spoon} alt='spoon' className='w-[50px]' />
                <h1 className='capitalize text-[60px] text-[#d0d3a7]' style={{ fontFamily: 'Croissant One' }} >what we belive in</h1>
                <p className='capitalize text-[18px] font-[300]'>
                    <span className='text-[50px]'>''</span>
                    sit tellus lobortis sed senectus vivamus molestie. condimentum volutpat morbi facillisis quam scelerisque sapien. et,penatibus aliquam amet tellus
                </p>
                <div className='flex flex-col mt-12' style={{ fontFamily: 'Croissant One' }}>
                    <h2 className='text-[#d0d3a7] text-[26px]'> Kevin Luo</h2>
                    <p className='text-[18px]'> Chef & Founder</p>
                    <img src={sign} className='w-[140px] mt-10' alt='sign' />
                </div>
            </div>
            <img src={bg}  className='absolute left-0 top-0 h-full w-full z-[-10]'/>
        </div>
    )
}

export default Chef