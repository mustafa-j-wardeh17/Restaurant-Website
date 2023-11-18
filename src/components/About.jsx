import React from 'react'
import { G, bg, knife, spoon } from '../../public'

const About = () => {
    return (
        <div className='relative flex gap-10 py- sm:p-[5%]  w-full min-h-screen items-center justify-center'>
            <img src={bg} className='absolute w-full h-full z-[1]' />
            <img src={G} className='absolute w-[250px] h-[300px] z-[10]' style={{ left: "50%", bottom: "50%", transform: 'translate(-50%,50%)' }} />

            <div className='flex items-center px-[40px]'>
                <div className='flex flex-col z-[111] text-white  items-end gap-2'>
                    <h2 className=' md:text-[50px] text-end text-[45px] text-[#d0d3a7]' style={{ fontFamily: 'Croissant One' }}>About Us</h2>
                    <img src={spoon} alt='spon' className='w-14' />
                    <p className='my-6 mr-3 w-[80%] text-end text-[gray]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney </p>
                    <button type='button' className='rounded-md border bg-white text-black w-[140px] h-[60px]'>Read More</button>
                </div>

                <img src={knife} alt='knife' className='z-[10] my-14 mx-1 w-20' />
                <div className='flex flex-col z-[111] text-white   gap-2'>
                    <h2 className=' md:text-[50px] text-[45px] text-[#d0d3a7]' style={{ fontFamily: 'Croissant One' }}>Our History</h2>
                    <img src={spoon} alt='sppon' className='w-14' />
                    <p className='my-6 mr-3 w-[80%] text-[gray]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney </p>
                    <button type='button' className='rounded-md border bg-white text-black w-[140px] h-[60px]'>Read More</button>
                </div>
            </div>

        </div>
    )
}

export default About