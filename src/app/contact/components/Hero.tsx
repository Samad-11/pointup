import Header from '@/components/ui/Header'
import React from 'react'
import mascot from '../../../../public/images/heroImage/about-hero-mascot.png'
import Image from 'next/image'
import MobileLogo from '@/components/ui/MobileLogo'
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(images/heroImage/about-hero-bg.jpg)' }}>
            <MobileLogo />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-full h-full  p-0  ">
                <div className="flex justify-start items-center w-full h-full max-sm:flex-col max-sm:px-2">
                    <div className='max-w-2xl flex-1
                    max-sm:flex max-sm:items-center
                    max-sm:flex-col max-sm:justify-center
                    '>
                        <Header classname='sm:text-9xl text-left
                        max-sm:pt-32
                        max-sm:max-w-xs
                        '>
                            Let&apos;s work together
                        </Header>
                        <p className="text-base-200 text-left
                        max-sm:self-end
                        max-sm:text-xs
                        max-sm:max-w-xs
                        ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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