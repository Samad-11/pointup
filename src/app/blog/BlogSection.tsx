import React from "react";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import Image, { StaticImageData } from "next/image";
import blog1 from '../../../public/images/blogImages/blog1.jpg'
import { FaPlaneArrival } from "react-icons/fa";
import Header from "@/components/ui/Header";
import { blogs } from "@/utils/staticBlogs";

export function BlogSection() {
    return (
        <BentoGrid className="max-w-5xl mx-auto">
            {blogs.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}


const BlogImageHeader = ({ image }: { image: StaticImageData }) => {
    return (
        <div className="w-full h-full min-h-[6rem] rounded-xl relative">
            <Image
                src={image}
                alt="Blog Image"
                layout="fill"
                className="object-cover rounded-xl" />
        </div>)
}

// const items = [
//     {
//         title: "Amex Platinum Travel Card",
//         description: "Hack Your Way to Free Marriott Stays (But Read the Fine Print!)",
//         header: <BlogImageHeader />,
//         icon: <FaPlaneArrival className="h-4 w-4 text-neutral-500" />,
//     },
//     {
//         title: "The Digital Revolution",
//         description: "Dive into the transformative power of technology.",
//         header: <Skeleton />,
//         icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//     },
//     {
//         title: "The Art of Design",
//         description: "Discover the beauty of thoughtful and functional design.",
//         header: <Skeleton />,
//         icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//     },
//     {
//         title: "The Power of Communication",
//         description:
//             "Understand the impact of effective communication in our lives.",
//         header: <Skeleton />,
//         icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//     },
//     {
//         title: "The Pursuit of Knowledge",
//         description: "Join the quest for understanding and enlightenment.",
//         header: <Skeleton />,
//         icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//     },
//     {
//         title: "The Joy of Creation",
//         description: "Experience the thrill of bringing ideas to life.",
//         header: <Skeleton />,
//         icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//     },
//     {
//         title: "The Spirit of Adventure",
//         description: "Embark on exciting journeys and thrilling discoveries.",
//         header: <Skeleton />,
//         icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//     },
// ];
