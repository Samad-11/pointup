import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/logo/bgRemoveLogo.png'

const LoadingComponent = () => {
    return (
        <div className='h-screen w-screen
        grid content-center justify-center
        '>
            <Image
                src={logo}
                height={200}
                width={200}
                alt='Logo'
                className='animate-pulse'
            />
            <div className='flex gap-7'>

                <p className='font-poppins text-primary font-bold text-lg'>fetching
                    <br /> your page </p>
                <span className='loading loading-dots loading-lg'></span>
            </div>
        </div>
    )
}

export default LoadingComponent