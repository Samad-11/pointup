"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import legends from '../../../../public/images/weCaterForAll/1.png'
import genz from '../../../../public/images/weCaterForAll/2.png'
import geny from '../../../../public/images/weCaterForAll/4.png'
import genx from '../../../../public/images/weCaterForAll/3.png'

export function GridSection1() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    quality={100}
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-32 lg:h-40 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    {/* <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a> */}
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-5xl  mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col  w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}
                                className="h-60
                                 bg-gradient-to-t from-neutral-800 to-neutral-500
                                 rounded-lg
                                
                                grid content-center justify-center"
                            >
                                <h4 className="text-neutral-300 font-extrabold text-3xl">{card.title}</h4>
                            </motion.div>
                            {/* <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                                >
                                    {card.description}
                                </motion.p>
                            </div> */}
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "",
        title: "Legends",
        src: legends,
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    You&apos;ve been holding your card for long time now.<br />
                    Its time to max your existing lots of reward points or change the game plan
                </p>
            );
        },
    },
    {
        title: "Gen-X",
        src: genx,
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Evolving rewards programs can be confusing. Point Up simplifies everything, keeping you up-to-date on the latest changes and ensuring you never miss out on valuable earning opportunities.
                </p>
            );
        },
    },

    {
        title: "Gen-Y",
        src: geny,
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Tired of juggling multiple cards and missing out on bonus points? Point Up keeps you organized, tracks your rewards across cards, and helps you choose the best option for every purchase.
                </p>
            );
        },
    },
    {
        title: "Gen-Z",
        src: genz,
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Gamify your finances and unlock hidden rewards potential with our user-friendly app. No finance jargon, just clear strategies to make your credit card work for you.
                </p>
            );
        },
    },
];