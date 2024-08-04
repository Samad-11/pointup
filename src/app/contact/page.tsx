import React from 'react'
import Hero from './components/Hero'
import ContactSection from './components/ContactSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact"
}

const page = () => {
    return (
        <main className='min-h-screen'>

            <Hero />

            <ContactSection />

        </main>
    )
}

export default page