import Image, { StaticImageData } from 'next/image'
import React, { FC, ReactNode } from 'react'
import img from '../../../../public/images/weCaterForAll/legends.jpeg'
import { isEven } from '@/utils/helpers'
import { cn } from '@/utils/cn'


interface CaterCardProps {
    image: StaticImageData,
    name: string,
    content: () => React.JSX.Element,
    sno: number
}

const CaterCard: FC<CaterCardProps> = ({ sno, content, image, name }) => {
    return (
        <>
            <div className={cn(" flex pr-2 h-96 md:h-screen   max-md:border max-md:p-4 border-primary rounded-2xl",
                isEven(sno) ? "md:flex-col-reverse max-sm:flex-col" : "md:flex-col flex-row-reverse max-sm:flex-col",
                (sno !== 4) && "md:border-r md:rounded-none"

            )}>
                <div className='relative max-sm:h-56 sm:flex-1'>
                    <p className={`
                absolute 
                left-[50%]
                transform translate-x-[-50%]
                translate-y-[50%]
                bottom-[10%]
                z-50
                font-extrabold font-poppins 
                lg:text-3xl
                md:text-2xl
                 text-golden decoration-double underline-offset-4 underline
                bg-black/5
                p-[1px]
                text-nowrap
                `}>
                        {name}
                    </p>
                    <Image src={image} alt='alt' fill
                        className='object-cover md:object-center
                        object-top
                    filter  brightness-75
                    rounded-xl
                    '
                    />
                </div>
                <div className='px-2 py-5  grid content-center sm:flex-1
            text-stone-300 text-pretty 
            lg:text-lg
            md:text-base
            text-sm
            
              font-semibold

            '>
                    {/* <p className='text-stone-300 text-pretty text-lg  font-semibold'>
                    You&apos;ve been holding your card for long time now.<br /><br />
                    Its time to max your existing lots of reward points or change the game plan
                </p> */}
                    {
                        content()
                    }
                </div>
            </div>
        </>
    )
}

export default CaterCard