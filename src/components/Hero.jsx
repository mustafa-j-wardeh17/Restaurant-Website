import React from 'react'
import { spoon, welcome } from '../../public'

const Hero = () => {
  return (
    <div className='w-full items-center sm:px-[5%] min-h-screen px-10  mt-20 flex sm:flex-row sm:items-center flex-col bg-black  sm:justify-between items-between sm:gap-3 gap-10  text-white'>
        <div className='flex flex-col md:w-[50%] sm:w-[45%]  gap-4 ' >
            <p className='text-[18px] font-[300]'>Chase The New Flavour</p>
            <img src={spoon} alt='spoon' className='w-[50px]'/>
            <h1 className='capitalize text-[60px] text-[#d0d3a7]' style={{fontFamily:'Croissant One'}} >the key to fine dining</h1>
            <p className='capitalize text-[18px] font-[300]'>
                sit tellus lobortis sed senectus vivamus molestie. condimentum volutpat morbi facillisis quam scelerisque sapien. et,penatibus aliquam amet tellus
            </p>
            <button type='button' className='w-[150px] rounded-md bg-[#efebeb] text-black h-[60px] sm:mt-[60px] mt-[10px]'>Explore Menu</button>
        </div>
        <div className='flex md:w-[50%] sm:w-[55%] md:mb-0 mb-4 h-[450px]'>
            <img className='object-contain flex w-full ' src={welcome} alt='sss' /> 
        </div>
    </div>
  )
}

export default Hero