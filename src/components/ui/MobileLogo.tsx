import React from 'react'
import logo from '../../../public/images/logo/bgRemoveLogo.png'
import Image from 'next/image'

const MobileLogo = () => {
    return (
        <div className='absolute top-3 left-4 sm:hidden'>
            <Image src={logo} alt='Logo' height={80} width={80} />
        </div>
    )
}

export default MobileLogo