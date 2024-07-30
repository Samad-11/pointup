import React from 'react'
import logo from '../../../public/images/logo/bgRemoveLogo.png'
import Image from 'next/image'


const Logo = () => {
    return (
        <Image
            className={`absolute animate-logoMotion transition-all  size-16 `}
            src={logo} alt="logo" />
    )
}

export default Logo