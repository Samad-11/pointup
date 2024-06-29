import React from 'react'
import logo from '../../../public/images/logo/bgRemoveLogo.png'
import Image from 'next/image'
import Link from 'next/link'

const MobileLogo = () => {
    return (
        <Link href={'/'} className='absolute top-3 left-4 sm:hidden z-40'>
            <Image src={logo} alt='Logo' height={80} width={80} />
        </Link>
    )
}

export default MobileLogo