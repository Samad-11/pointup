import Header from '@/components/ui/Header'
import React from 'react'
import mascot from '../../../../public/images/heroImage/about-hero-mascot.png'
import Image from 'next/image'
import MobileLogo from '@/components/ui/MobileLogo'
import Link from 'next/link'
import { FaArrowUpRightDots } from 'react-icons/fa6'
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/lib/constants'
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(images/heroImage/about-hero-bg.jpg)' }}>
            <MobileLogo />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-full h-full  p-0  ">
                <div className="flex justify-start items-center w-full h-full max-sm:flex-col max-sm:px-2 px-10">
                    <div className='max-w-2xl flex-1
                    max-sm:flex max-sm:items-center
                    max-sm:flex-col max-sm:justify-center

                    '>
                        <Header classname='sm:text-9xl text-left
                        max-sm:pt-32
                        max-sm:max-w-xs
                        pt-20
                        '>
                            Let&apos;s work together
                        </Header>
                        <Link href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                            className='flex justify-start items-center gap-1  link link-hover 
                        text-base-200 text-left
                        font font-extrabold
                        sm:text-4xl
                        text-2xl
                        w-full
                        '>


                            Join the community
                            <FaArrowUpRightDots className='sm:text-4xl text-amber-100' />
                        </Link>
                    </div>
                    <div className='flex-1 relative h-screen w-full '>
                        <Image src={mascot} alt='mascot'
                            fill
                            className='
                                absolute
                                object-contain
                            '
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero