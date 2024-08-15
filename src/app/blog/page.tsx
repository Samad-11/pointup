import React from 'react'
import { BlogSection } from './BlogSection'
import Hero from './Hero'
import Header from '@/components/ui/Header'
import { Metadata } from 'next'
import { Blog, WithContext } from "schema-dts"

export const metadata: Metadata = {
    title: "Blogs"
}


const page = () => {
    const jsonLd: WithContext<Blog> = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "Blog Page",
        about: "All the blogs posts are here"
    }
    return (
        <div className='relative'>
            <Hero />
            <div className='max-w-5xl mx-auto py-10 
            sm:px-3 px-2
            '>
                <Header>
                    Latest Blog Posts
                </Header>
                <BlogSection />

            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        </div>

    )
}

export default page