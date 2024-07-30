'use client'
import { useEffect, useState } from 'react';
import Header from './Header'
import { BiDownArrow } from 'react-icons/bi'

const CTAtoHowWeDo = () => {
    const [howWeDo, setHowWeDo] = useState<HTMLElement | null>(null)

    useEffect(() => {
        const e = document.getElementById("howWeDo")!;

        if (e) {
            setHowWeDo(e)
        }

    }, [])
    const onButtonClick = () => {
        howWeDo &&
            howWeDo.scrollIntoView(
                {
                    behavior: "smooth"
                }
            );
    }


    return (
        <button
            onClick={onButtonClick}
            className='bg-[#d1ab38] px-3 py-2 rounded-full glass flex items-center justify-center gap-4 w-full
            hover:scale-105 transition-transform
            '>
            <Header classname='sm:text-lg pb-0 from-black to-slate-800 text-sm'>
                Our Service
            </Header>
            <span><BiDownArrow className='text-black' /></span>
        </button>
    )
}

export default CTAtoHowWeDo