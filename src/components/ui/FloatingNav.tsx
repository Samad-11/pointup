"use client";
import React, { useEffect, useState } from "react";
import logo from '../../../public/images/logo/bgRemoveLogo.png'
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import ApplyButton from "./ApplyButton";
import { usePathname, useRouter } from "next/navigation";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);
    const [bgBlack, setBgBlack] = useState(false)

    const router = useRouter();
    const onClickHandle = () => {
        router.push("https://wa.me/919999275769?text=I'm%20interested%20in%20your%20service")
    }




    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number

        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;


            if (scrollYProgress.get() == 0) {
                setVisible(true);
                setBgBlack(false)
            }

            else if (scrollYProgress.get() < 0.05) {
                setVisible(false);
                setBgBlack(true)
            } else {
                if (direction < 0) {
                    setVisible(true);
                    setBgBlack(true)
                }
                else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{
                        opacity: 1,
                        y: -100,
                    }}
                    animate={{
                        y: visible ? 0 : -100,

                        opacity: visible ? 1 : 0,

                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className={cn(
                        "max-sm:hidden flex w-screen  fixed top-0 inset-x-0 mx-auto border border-transparent  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-around space-x-4 ",
                        className,
                        {
                            "bg-black/50": bgBlack
                        }
                    )}
                >
                    <div>
                        <Image src={logo} alt="logo" height={70} width={70} />
                    </div>
                    <div className="gap-9">
                        {navItems.map((navItem: any, idx: number) => (
                            <Link
                                key={`link=${idx}`}
                                href={navItem.link}
                                className={cn(
                                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                                )}
                            >
                                <span className="block sm:hidden">{navItem.icon}</span>
                                <span className="hidden sm:block text-sm">{navItem.name}</span>
                            </Link>
                        ))}
                    </div>
                    <button
                        onClick={onClickHandle}
                        className="border font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-10 py-1 rounded-full flex justify-center items-center gap-3 
                hover:border-[#d1ab38] transition-all
                ">
                        <span>Apply</span>
                        <span className=""><FaLongArrowAltRight size={26} /></span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent  h-px" />
                    </button>
                </motion.div>
            </AnimatePresence>
            <MobileNav navItems={navItems} />
        </>
    );
};

const MobileNav = ({
    navItems
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const pathname = usePathname();


    useEffect(() => {
        console.log(pathname);
    }, [pathname])

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="drawer z-[999]">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content fixed top-9 right-3">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="sm:hidden drawer-button">
                    {
                        isOpen ? <IoMdClose className="text-white text-4xl" /> : <IoMdMenu className="text-white text-4xl"
                            onClick={() => setIsOpen(true)}
                        />
                    }
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={() => { setIsOpen(false) }}></label>
                <aside className="menu  p-4 w-[50vw] h-screen bg-accent text-accent-content border-r-2 border-r-gray-600 font-kalam">
                    {/* Sidebar content here */}
                    <div>
                        <Image src={logo} alt="point up logo" height={60} width={60} />
                    </div>
                    <div className="flex flex-col gap-4 mt-20 mb-20">
                        {
                            navItems.map((item, indx) => (
                                <Link href={item.link} key={indx}
                                    className={`text-lg ${(pathname === item.link) ? "text-[#d1ab38]" : ""}`}
                                >{item?.icon} {item.name}</Link>
                            ))
                        }
                    </div>
                    <ApplyButton buttonText={"Apply"} />
                </aside>
            </div>
        </div>
    )
}
