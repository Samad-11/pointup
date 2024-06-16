import React from 'react'
import cardsImg from '../../public/images/heroImage/new.png'
import Image from 'next/image'
import { AnimatedTooltip } from './ui/Tooltip'
import { TbTransactionRupee } from 'react-icons/tb'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { GrTransaction } from 'react-icons/gr'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Spotlight } from './Spotlight'

const Hero = () => {
    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Business Man",
            image:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Gynecologist",
            image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
    ]
    return (
        <div className="h-screen w-full bg-black bg  bg-grid-white/[0.2] relative flex items-center justify-center px-10">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-10"
                fill="#d1ab38"
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className=" absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Backgrounds
            </p> */}
            <div className='flex-1 flex justify-center px-10 '>
                <div className='self-end max-w-sm '>

                    <p className="text-4xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                        Unlock reward and discover the perfect credit card for you
                    </p>
                    <p className='text-primary py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo excepturi mollitia voluptatibus molestiae modi qui natus quam, consequatur nobis, maiores reprehenderit</p>

                    <div className='mb-8 mt-5 flex justify-between'>
                        <button className="border font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-10 py-1 rounded-full flex justify-center items-center gap-3">
                            <span>Apply</span>
                            <span><FaLongArrowAltRight size={26} /></span>
                            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent  h-px" />
                        </button>
                        <div className='flex'>
                            <AnimatedTooltip items={people} />
                        </div>
                    </div>
                    <div className="stats shadow bg-transparent p-0">

                        <div className="stat gap-[.5rem]">
                            <div className="stat-figure text-primary ">
                                {/* <GrTransaction className='size-10 text-white' fill='white' /> */}
                            </div>
                            <div className="stat-title font-bold text-primary">Transactions</div>
                            <div className="stat-value stat-title font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-2 flex gap-4">25.6K<GrTransaction className='size-10 text-white' fill='white' />
                            </div>
                        </div>

                        <div className="stat gap-[.5rem]">
                            <div className="stat-figure text-secondary">
                                {/* <VscWorkspaceTrusted className='size-10' fill='white' /> */}
                            </div>
                            <div className="stat-title font-bold text-primary">Trusted Users</div>
                            <div className="stat-value stat-title font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-2 flex gap-4">2.8K<VscWorkspaceTrusted className='size-10' fill='white' /></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex-1 relative  h-full'>
                <Image src={cardsImg} alt='cardImage' className="shadow-black shadow-lg absolute 
                top-[50%] left-[50%] -translate-x-[50%] -translate-y-[40%]
                " height={500} width={1000} />
            </div>
        </div>
    )
}

export default Hero