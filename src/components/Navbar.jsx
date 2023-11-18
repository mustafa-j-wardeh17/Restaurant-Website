import { useState } from 'react'
import { gericht, logo } from '../../public'

const Navbar = () => {
    const [Toggle, setToggle] = useState(false)
    const [Active, setActive] = useState('')
    

    return (
        <div className="header fixed top-0 flex items-center justify-between flex-row h-20 w-full bg-black z-[999]">
            <div className='normal   w-full h-full flex justify-between px-5  items-center'>
                <img src={gericht} width={160} height={100} alt='image' />
                <ul className="text-white  list-none md:flex hidden gap-3 text-[17px] font-[600] ">
                    <li className={`${Active==='first-active'?'text-white':'text-[gray]'} cursor-pointer hover:text-white`} onClick={() => {setToggle(false); setActive('first-active')}} >Home</li>
                    <li className={`${Active==='second-active'?'text-white':'text-[gray]'} cursor-pointer hover:text-white`} onClick={() => {setToggle(false); setActive('second-active')}} >About</li>
                    <li className={`${Active==='third-active'?'text-white':'text-[gray]'} cursor-pointer hover:text-white`} onClick={() => {setToggle(false); setActive('third-active')}} >Menu</li>
                    <li className={`${Active==='fourth-active'?'text-white':'text-[gray]'} cursor-pointer hover:text-white`} onClick={() => {setToggle(false); setActive('fourth-active')}} >Awards</li>
                    <li className={`${Active==='fifth-active'?'text-white':'text-[gray]'} cursor-pointer hover:text-white`} onClick={() => {setToggle(false); setActive('fifth-active')}} >Contact</li>
                </ul>
                <div className="hidden gap-1 md:flex text-[gray] text-[17px] font-[400] ">
                    <p className='cursor-pointer'>Login/Regestration</p>
                    <p>|</p>
                    <p className='cursor-pointer'>Book Table</p>
                </div>
                <i className={`${Toggle===false?'flex':'hidden'} fa-solid fa-bars text-white md:hidden  cursor-pointer text-[30px]`} onClick={() => setToggle(true)} ></i>
                <i className={`${Toggle===true?'flex':'hidden'} fa-solid fa-xmark text-white md:hidden  cursor-pointer text-[30px]`} onClick={() => setToggle(false)} ></i>
                {/* Mobile Menu */}
                <div className={`${Toggle===true?'flex':'hidden'} fixed flex items-center text-center md:hidden gap-14 flex-col w-[50%] h-[100%] bg-black top-[80px] right-[-0] `} >
                    <ul className="text-white flex flex-col list-none gap-8 mt-[60px] text-[20px]">
                        <li className={`${Active==='first-active'?'text-white':'text-[gray]'} cursor-pointer p-2 border rounded-xl  border-[gray] hover:text-white`} onClick={() => {setToggle(false); setActive('first-active')}}>Home</li>
                        <li className={`${Active==='second-active'?'text-white':'text-[gray]'} cursor-pointer p-2 border rounded-xl  border-[gray] hover:text-white`} onClick={() => {setToggle(false); setActive('second-active')}}>About</li>
                        <li className={`${Active==='third-active'?'text-white':'text-[gray]'} cursor-pointer p-2 border rounded-xl border-[gray]  hover:text-white`} onClick={() => {setToggle(false); setActive('third-active')}}>Menu</li>
                        <li className={`${Active==='fourth-active'?'text-white':'text-[gray]'} cursor-pointer p-2 border rounded-xl border-[gray]  hover:text-white`} onClick={() => {setToggle(false); setActive('fourth-active')}}>Awards</li>
                        <li className={`${Active==='fifth-active'?'text-white':'text-[gray]'} cursor-pointer p-2 border rounded-xl border-[gray]  hover:text-white`} onClick={() => {setToggle(false); setActive('fifth-active')}}>Contact</li>
                    </ul>
                    <div className=" gap-1 flex flex-col justify-end mb-[120px] gap-4  w-[60%] h-full text-white">
                        <p className='cursor-pointer border py-2 rounded-xl '>Login/Regestration</p>
                        <p className='cursor-pointer border py-2 rounded-xl'>Book Table</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Navbar