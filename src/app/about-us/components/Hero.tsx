import Header from '@/components/ui/Header'
import React from 'react'
import mascot from '../../../../public/images/heroImage/about.png'
import Image from 'next/image'
import MobileLogo from '@/components/ui/MobileLogo'
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(images/heroImage/hero-bg-.jpg)' }}>
            <MobileLogo />
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content p-0 text-center text-neutral-content w-full h-full   px-10">
                <div className=" flex justify-start items-center w-full h-full max-sm:flex-col max-sm:px-2">
                    <div className='max-w-2xl flex-1
                    max-sm:flex max-sm:items-center
                    max-sm:flex-col max-sm:justify-start
                    
                    '>
                        <Header classname='sm:text-7xl 
                        text-left
                        max-sm:pt-52
                        max-sm:max-w-xs
                        max-sm:pb-3
                        font-poppins
                        '>
                            Stop leaving money on the table!
                        </Header>
                        <p className="text-base-200
                        max-sm:self-end
                        max-sm:text-xs
                        max-sm:max-w-xs
                        text-justify
                        ">Point Up is your ultimate credit card rewards optimization platform, designed to help you maximize your points and turn them into serious cash back, travel dreams, or valuable merchandise.</p>
                    </div>
                    <div className='flex-1 relative h-screen w-full max-sm:hidden'>
                        <Image src={mascot} alt='mascot'

                            className='
                                absolute
                               bottom-0 
                            '
                        />
                    </div>

                    <Image
                        src={mascot}
                        alt='mascot'
                        className='sm:hidden absolute bottom-0 size-96 object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Hero