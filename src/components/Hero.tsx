import React from 'react'
import cardsImg from '../../public/images/heroImage/new.png'
import Image from 'next/image'
import { AnimatedTooltip } from './ui/Tooltip'
import { TbTransactionRupee } from 'react-icons/tb'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { GrTransaction } from 'react-icons/gr'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Spotlight } from './Spotlight'
import logo from '../../public/images/logo/bgRemoveLogo.png'
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
        <div className="min-h-screen w-full bg-black bg  bg-grid-white/[0.2] relative 
        ">
            <Spotlight
                className="-top-20 left-0 md:left-60 md:-top-10"
                fill="#d1ab38"
            />
            <div className=" absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='flex  items-center justify-center sm:px-10 border h-screen
        max-sm:flex-col'>
                <div className='absolute top-3 left-4 sm:hidden'>
                    <Image src={logo} alt='Logo' height={60} width={60} />
                </div>


                <div className='flex-1 flex justify-center sm:px-10 px-5 max-sm:pt-20d '>
                    <div className='self-end max-w-sm '>

                        <p className="text-2xl max-sm:max-w-xs sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                            Unlock reward and discover the perfect credit card for you
                        </p>
                        <p className='text-primary py-2 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo excepturi mollitia voluptatibus molestiae modi qui natus quam, consequatur nobis, maiores reprehenderit</p>

                        <div className='my-6 sm:mb-8 sm:mt-5 flex justify-between'>
                            <button className="border font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white 
                        
                        px-5 sm:px-10 py-1 rounded-full flex justify-center items-center gap-3">
                                <span>Apply</span>
                                <span><FaLongArrowAltRight size={26} /></span>
                                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent  h-px" />
                            </button>
                            <div className='flex'>
                                <AnimatedTooltip items={people} />
                            </div>
                        </div>
                        <Stats />
                    </div>
                </div>
                <div className='flex-1 relative  h-full w-full'>
                    <Image src={cardsImg} alt='cardImage' className="shadow-black shadow-lg absolute 
                top-[50%] left-[50%] sm:-translate-x-[50%] -translate-x-[100%] sm:-translate-y-[40%] -translate-y-[60%]
                " height={500} width={1000} />
                </div>
            </div>
        </div>
    )
}

export default Hero


const Stats = () => {
    return (
        <div className='flex w-full px-5 justify-between flex-wrap max-w-lg
        font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500
        font-kalam
        '>
            <div className='flex flex-col gap-2'>
                <p className='text-primary text-sm tracking-wider'>Transactions</p>
                <div className="flex font-bold text-4xl gap-4">
                    <span>25.6K</span>
                    <span className='text-white'><GrTransaction /></span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-primary text-sm tracking-wider'>Trusted Users</p>
                <div className="flex font-bold text-4xl gap-4">
                    <span>2.8K</span>
                    <span className='text-white'><VscWorkspaceTrusted /></span>
                </div>
            </div>
        </div>
    )
}