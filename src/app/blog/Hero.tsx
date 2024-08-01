import Header from '@/components/ui/Header'
import React from 'react'
import mascot from '../../../public/images/heroImage/about-hero-mascot.png'
import Image from 'next/image'
import MobileLogo from '@/components/ui/MobileLogo'
import Link from 'next/link'
import { FaArrowUpRightDots } from 'react-icons/fa6'
const Hero = () => {
    return (
        <div className="hero min-h-[70vh] bg-fixed" style={{ backgroundImage: 'url(images/heroImage/about-hero-bg.jpg)' }}>
            <MobileLogo />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-full h-full  p-0  ">
                <div className="flex justify-start items-center w-full h-full max-sm:flex-col max-sm:px-2 px-10">
                    <div className='max-w-6xl flex-1
                    max-sm:flex max-sm:items-center
                    max-sm:flex-col max-sm:justify-center
                    '>
                        <Header classname='sm:text-6xl text-left
                        max-sm:pt-32
                        max-sm:max-w-xs
                        pt-20
                        font-poppins
                        '>
                            Unlock the Power of Credit <br /> Your Guide to
                            <span className='text-golden'>
                                {" "}Benefits, Tips, and More
                            </span>
                        </Header>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero