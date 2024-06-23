import React from 'react'
import { FloatingNav } from './ui/FloatingNav'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const navItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About Us",
            link: "/about"
        },
        {
            name: "Service",
            link: "/service"
        },
        {
            name: "Why Point Up?",
            link: "/whypointup"
        },
        {
            name: "FAQs",
            link: "/faq"
        },
    ]
    return (
        <>
            <FloatingNav navItems={navItems} className='navbar' />
            {children}
            <Footer />
        </>
    )
}

export default Layout