import React from 'react'
import { FloatingNav } from './ui/FloatingNav'
import Footer from './Footer'
import Logo from './ui/Logo'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const navItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About Us",
            link: "/about-us"
        },
        // {
        //     name: "Service",
        //     link: "/service"
        // },
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "Contact Us",
            link: "/contact"
        },
        // {
        //     name: "FAQs",
        //     link: "/faq"
        // },
    ]
    return (
        <>
            <FloatingNav navItems={navItems} className='navbar' />

            {/* <Logo /> */}
            {children}

            <Footer />
        </>
    )
}

export default Layout