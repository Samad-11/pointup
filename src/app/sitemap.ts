// import type { MetadataRoute } from 'next'

// export default function sitemap(): MetadataRoute.Sitemap {
//     const baseUrl = process.env.BASE_URL || "https://pointup.co.in";
//     return [
//         {
//             url: `${baseUrl}`,
//             lastModified: new Date(),
//             changeFrequency: 'yearly',
//             priority: 1,
//         },
//         {
//             url: `${baseUrl}/about-us`,
//             lastModified: new Date(),
//             changeFrequency: 'monthly',
//             priority: 0.8,
//         },
//         {
//             url: `${baseUrl}/contact`,
//             lastModified: new Date(),
//             changeFrequency: 'monthly',
//             priority: 0.7,
//         },
//         {
//             url: `${baseUrl}/blog`,
//             lastModified: new Date(),
//             changeFrequency: 'weekly',
//             priority: 0.5,
//         },
//     ]
// }


import { slugify } from "@/utils/helpers";
import { blogs } from "@/utils/staticBlogs";
import { MetadataRoute } from "next";

const baseUrl = process.env.BASE_URL || ""

export default async function sitemap() {
    // Implement sitemap generation logic here
    let allBlogs: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${slugify(blog.title)}`,
        lastModified: new Date(),
        priority: 0.8,
        changeFrequency: "monthly",
    }))



    const others: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            priority: 1,
            changeFrequency: "monthly",
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about-us`,
            priority: 0.9,
            changeFrequency: "yearly",
            lastModified: "2024-08-17",
        },
        {
            url: `${baseUrl}/contact`,
            priority: 0.9,
            changeFrequency: "monthly",
            lastModified: "2024-08-17",
        },
        {
            url: `${baseUrl}/terms`,
            priority: 0.5,
            changeFrequency: "yearly",
            lastModified: "2024-08-17",
        },
        {
            url: `${baseUrl}/privacy-policy`,
            priority: 0.5,
            changeFrequency: "yearly",
            lastModified: "2024-08-17",
        },
        {
            url: `${baseUrl}/blog`,
            priority: 0.7,
            changeFrequency: "weekly",
            lastModified: new Date(),
        },
    ]
    return [...others, ...allBlogs]
}

