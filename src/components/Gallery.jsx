import React, { useState } from 'react'
import { bg, gallery01, gallery02, gallery03, gallery04, spoon } from '../../public'

const Gallery = () => {
    const [Position, SetPosition] = useState(0)
    const lefthanler = () => {
        SetPosition(Position === 0 ? 2 : (Position - 1))
        console.log("pos = " + Position)
    }
    const righthandler = () => {
        SetPosition(Position === 2 ? 0 : (Position + 1))
        console.log("pos = " + Position)
    }
    return (
        <div className='relative w-full h-screen flex '>
            <img src={bg} className='absolute w-full h-full z[-100] ' />
            <div className='w-full  flex md:flex-row md:items-center md:py-5 my-[100px] flex-col z-[120] text-white'>
                <div className='flex flex-col pl-[5%] w-1/2 gap-1'>
                    <p>Instagram</p>
                    <img src={spoon} width={40} />
                    <h1 className='text-[50px] text-[#d0d3a7] my-2' style={{ fontFamily: 'Croissant One' }}>Photo Gallery</h1>
                    <p className='text-[16px] text-[gray] mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy  .</p>
                    <button className='bg-white text-black w-[120px] py-2.5 rounded mt-3' type='button'>View More</button>
                </div>
                <div className='relative md:w-1/2 md:h-[400px] h-[400px] md:w-full md:px-[0%] md:mt-0 mt-[60px] mx-[8%]  overflow-hidden '>
                    <div className={`flex flex-row  w-[200%] gap-[1%] h-[100%] overflow-hidden `} style={{ transform: `translateX(-${(Position * 25)}% )` }}>
                        <img src={gallery01} className='w-1/4 h-full object-fill' />
                        <img src={gallery02} className='w-1/4 h-full object-fill' />
                        <img src={gallery03} className='w-1/4 h-full object-fill' />
                        <img src={gallery04} className='w-1/4 h-full object-fill' />
                    </div>
                    <div className='absolute cursor-pointer bottom-5 bg-black w-[25px] h-[25px] text-center text-white right-5 z-[1000]' onClick={righthandler}>
                        <i className="fa-solid fa-right-long"></i>
                    </div>
                    <div className='absolute cursor-pointer bottom-5 bg-black w-[25px] h-[25px] text-center text-white left-5 z-[1000]' onClick={lefthanler}>
                        <i className="fa-solid fa-left-long"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery