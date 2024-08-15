import React from 'react'
import Hero from './components/Hero'
import ContactSection from './components/ContactSection'
import { Metadata } from 'next'
import { ContactPage, WithContext } from "schema-dts"

export const metadata: Metadata = {
    title: "Contact"
}

const page = () => {
    const jsonLd: WithContext<ContactPage> = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "Contact Page",
    }
    return (
        <main className='min-h-screen'>

            <Hero />

            <ContactSection />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        </main>
    )
}

export default page