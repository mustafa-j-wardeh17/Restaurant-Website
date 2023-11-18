import React, { useRef, useState } from 'react'
import { video } from '../../public'

const Video = () => {
    const VidRef = useRef();
    const [Play, SetPlay] = useState(false)
    const handelClick = () => {
        SetPlay(prev => !prev)
        if (Play === true) {
            VidRef.current.pause();
        }
        else {
            VidRef.current.play();
        }
    }
    return (
        <div className='relative w-full h-full overflow-hidden'>
            <video src={video} ref={VidRef} loop controls={false} type='video/mp4' muted />
            <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[200px] md:h-[200px] md:text-[60px] w-[100px] h-[100px] text-[40px] border rounded-full border-white flex items-center justify-center cursor-pointer text-white '
                onClick={handelClick}>
                <i className={`${Play === true ? 'hidden' : 'flex'} fa-solid fa-play`}></i>
                <i className={`${Play === true ? 'flex' : 'hidden'}  fa-solid fa-pause`}></i>
            </div>
        </div>
    )
}

export default Video