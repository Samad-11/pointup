'use client'
import { cn } from '@/utils/cn'
import { ClassArray, ClassValue } from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'


interface TransitionLinkProps extends LinkProps {
    children: ReactNode,
    href: string,
    className?: ClassValue
}

const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const TransitionLink = ({ children, href, className, ...props }: TransitionLinkProps) => {
    const pathname = usePathname()
    const { push } = useRouter()
    const onTransitionLinkClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        if (pathname === href) return

        //transition on body before go to next page using framer motion
        const body = document.getElementById("body")
        body?.classList.add("page-transition")
        await sleep(500)
        push(href)
        await sleep(500)
        body?.classList.remove("page-transition")

    }
    return (
        <Link
            onClick={onTransitionLinkClick}
            href={href} className={cn(className)} {...props}>{children}</Link>
    )
}

export default TransitionLink