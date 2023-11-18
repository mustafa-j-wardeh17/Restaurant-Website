import React from 'react'
import { menu } from '../../public'

const Menu = () => {
    return (
        <div className='menu w-full relative sm:min-h-screen pb-4 bg-black z-[10]'>
            <h1 className='text-center text-[#d0d3a7] py-[60px] text-[60px] ' style={{ fontFamily: 'Croissant One' }}>Today's Special</h1>
            <div className='flex sm:flex-row flex-col  w-full justify-between gap-12 sm:px-[8%] px-[15%]'>
                <div className='flex flex-col gap-1 sm:w-1/3 w-full'>
                    <h1 className='text-white text-[32px] font-bold text-center mb-4' style={{ fontFamily: 'Croissant One' }}>Menu</h1>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between  items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col z-[-1] sm:w-[30%] md:w-[30%] lg:w-[20%] gap-4 sm:absolute sm:right-[50%] sm:bottom-[50%] sm:translate-x-[50%]  sm:translate-y-[60%] relative overflow-hidden items-center'>
                    <img src={menu} className='w-full h-full objec-fill' />
                    <button type='button' className='text-black bg-white rounded-md w-[120px] mt-4 py-2'>View More</button>
                </div>
                <div className='flex flex-col gap-1 sm:w-1/3 w-full'>
                    <h1 className='text-white text-[32px] font-bold text-center mb-4' style={{ fontFamily: 'Croissant One' }}>Cocktails</h1>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 mb-4'>
                                <h2 className='text-[#d0d3a7]'>Red Bull</h2>
                                <p className='text-[gray]'> AU | Bottle</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='w-[60px] h-[2px] bg-[gray] rounded-[20px]' ></span>
                                <p className='text-white'>$56</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu