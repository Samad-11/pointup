import { cn } from "@/utils/cn";
import Link from "next/link";
import TransitionLink from "../TransitionLink";
import Image, { StaticImageData } from "next/image";
import { Suspense } from "react";


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    image
}: {
    className?: string;
    title?: string;
    description?: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    image: StaticImageData
}) => {
    return (
        <TransitionLink href={`/blog/${title?.replaceAll(" ", "-")}-${description?.replaceAll(" ", "-")}`}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2]  border  justify-between flex flex-col space-y-4",
                className
            )}
        >
            <div className="w-full h-full min-h-[6rem] rounded-xl relative">
                <Suspense fallback={<Skeleton />}>

                    <Image
                        src={image}
                        alt="Blog Image"
                        layout="fill"
                        className="object-cover rounded-xl" />
                </Suspense>
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold  text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-xs text-neutral-300">
                    {description}
                </div>
            </div>
        </TransitionLink>
    );
};


const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 "></div>
);