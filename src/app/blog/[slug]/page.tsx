import Header from '@/components/ui/Header'
import Image from 'next/image'
import React from 'react'
import { blogs } from '@/utils/staticBlogs'
import { Metadata } from 'next'
import { WithContext, BlogPosting } from 'schema-dts'


export async function generateStaticParams() {
    const data = blogs
    return data.map((item) => ({
        slug: item.title.replaceAll(" ", "-") + "-" + item.description.replaceAll(" ", "-"),
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug
    const plainText = decodeURIComponent(slug)
    const blog = blogs.find((blog) => plainText === (`${blog.title.replaceAll(" ", "-")}-${blog.description.replaceAll(" ", "-")}`))
    if (!blog) return {}
    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            images: [`${process.env.BASE_URL}/${blog.image.src}`]
        }
    }
}


const BlogDetailPage = ({ params }: { params: { slug: string } }) => {

    const jsonLd: WithContext<BlogPosting> = {

        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": params.slug,
        name: params.slug
    }


    const { slug } = params
    const plainText = decodeURIComponent(slug)
    const blog = blogs.find((blog) => plainText === (`${blog.title.replaceAll(" ", "-")}-${blog.description.replaceAll(" ", "-")}`))
    if (!blog) {
        return <div>Blog not found</div>
    }

    return (
        <div className='min-h-screen
        sm:px-10
        px-5
        max-w-6xl
        mx-auto
        pb-10
        '>

            <div className='pt-40'>
                <Header>
                    {blog.title}: {blog.description}
                </Header>
            </div>
            <div className='grid grid-cols-1 h-full w-full gap-y-14 text-white'>


                <div className='bg-red-500
                w-full
                relative
                rounded-xl
                h-[30rem]
                self-start
                '>
                    <Image
                        className=' object-cover rounded-xl object-center' fill
                        src={blog.image}
                        alt='amex travel card'
                    />
                </div>
                {blog.content()}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        </div>
    )
}





export default BlogDetailPage