import { cn } from '@/utils/cn'
import React from 'react'

type HeaderProps = {
    children: React.ReactNode,
    classname?: string
}

const Header = ({ children, classname }: HeaderProps) => {
    return (
        <h2 className={cn(
            "text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 tracking-wide pb-16", classname)}>
            {children}
        </h2>
    )
}

export default Header