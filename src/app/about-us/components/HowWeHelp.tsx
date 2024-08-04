import React from 'react'

import {
    IconChartBar,
    IconCrosshair,
    IconCurrentLocation,
    IconRobot,
} from "@tabler/icons-react";
import { cn } from '@/utils/cn';
import Header from '@/components/ui/Header';

const HowWeHelp = () => {
    return (
        <div className='
        max-w-5xl
        mx-auto
        pt-20
        md:pb-20
        
        '>
            <Header classname='max-sm:text-2xl max-sm:pb-0'>
                Here&apos;s how Point Up helps you win the rewards game
            </Header>
            <HowWeHelpSection />
        </div>
    )
}

export default HowWeHelp



export function HowWeHelpSection() {
    // const features = [
    //     {
    //         title: "Built for developers",
    //         description:
    //             "Built for engineers, developers, dreamers, thinkers and doers.",
    //         icon: <IconTerminal2 />,
    //     },
    //     {
    //         title: "Ease of use",
    //         description:
    //             "It's as easy as using an Apple, and as expensive as buying one.",
    //         icon: <IconEaseInOut />,
    //     },
    //     {
    //         title: "Pricing like no other",
    //         description:
    //             "Our prices are best in the market. No cap, no lock, no credit card required.",
    //         icon: <IconCurrencyDollar />,
    //     },
    //     {
    //         title: "100% Uptime guarantee",
    //         description: "We just cannot be taken down by anyone.",
    //         icon: <IconCloud />,
    //     },
    //     {
    //         title: "Multi-tenant Architecture",
    //         description: "You can simply share passwords instead of buying new seats",
    //         icon: <IconRouteAltLeft />,
    //     },
    // ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2

        relative z-10  pb-10 max-w-7xl mx-auto">
            {howWeHelp.map((how, index) => (
                <Feature key={how.title} {...how} index={index} />
            ))}
        </div>
    )
}

const howWeHelp = [
    {
        title: "AI-powered Optimization",
        description: "Our intelligent platform analyzes your spending habits and credit card rewards programs to identify the best ways to maximize your points.",
        icon: <IconRobot />
    },
    {
        title: "Personalized Recommendations",
        description: "We don't offer generic advice. Point Up suggests the right cards for your spending patterns and helps you unlock hidden bonus categories.",
        icon: <IconCrosshair />
    },
    {
        title: "Effortless Tracking",
        description: "Say goodbye to manual tracking! Point Up keeps a watchful eye on your points balance across all your cards, ensuring you never lose sight of your rewards potential.",
        icon: <IconCurrentLocation />
    },
    {
        title: "Monetization Made Easy",
        description: "We show you how to turn your points into real value. Whether you want statement credits, dream vacations, or the latest gadgets, Point Up helps you find the most profitable redemption options.",
        icon: <IconChartBar />
    },
]


const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col py-10 relative group/feature border-neutral-800 ",

                // (index === 0) && "lg:row-span-2 lg:col-span-2 lg:border-b lg:border-l",
                // (index === 1) && "lg:row-span-2 lg:border-b",
                // (index === 2) && "lg:border-l",
            )}
        >
            {index < 2 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 2 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className={cn(`group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 text-xl   lg:text-3xl`,
                    // index === 0 && "lg:text-5xl",
                    // index === 1 && "lg:text-3xl",
                    // index === 3 && "lg:text-4xl",
                )}>
                    {title}
                </span>
            </div>
            <p className={cn("text-sm text-neutral-300 max-w-xs relative z-10 px-10 text-balance lg:max-w-3xl lg:text-lg",
                // (index === 0) && "lg:text-3xl max-w-full mt-10",
                // (index === 1) && "lg:text-3xl max-w-full mt-10",
                // (index === 3) && "lg:text-xl max-w-full ",
            )}>
                {description}
            </p>
        </div>
    );
};
