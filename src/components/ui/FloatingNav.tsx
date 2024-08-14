"use client";
import React, { useEffect, useRef, useState } from "react";
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
import TransitionLink from "../TransitionLink";
import { WHATSAPP_API_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

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
    const pathname = usePathname()
    // const router = useRouter();
    // const onClickHandle = () => {
    //     router.push("https://wa.me/919999275769?text=I'm%20interested%20in%20your%20service")
    // }




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

    const [logoClass, setLogoClass] = useState(false)
    useEffect(() => {
        setLogoClass(true)

    }, [])

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
                        "max-sm:hidden flex w-screen  fixed top-0 inset-x-0 mx-auto border border-transparent  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-0  items-center justify-around space-x-4",
                        className,
                        {
                            "bg-black/50": bgBlack
                        }
                    )}
                >
                    <Link href={'/'} className={``}>
                        <Image
                            height={115}
                            width={115}
                            className={``}
                            src={logo} alt="logo" />
                    </Link>
                    <div className="gap-x-9">
                        {navItems.map((navItem: any, idx: number) => (
                            <TransitionLink
                                key={`link=${idx}`}
                                href={navItem.link}
                                className={cn(
                                    "relative text-neutral-50 items-center flex space-x-1  hover:text-golden/60   underline-offset-4 hover:no-underline",
                                    {
                                        "text-golden font-semibold": pathname === navItem.link
                                    }
                                )}
                            >
                                <span className="block sm:hidden">{navItem.icon}</span>
                                <span className="hidden sm:block text-sm">{navItem.name}</span>
                            </TransitionLink>
                        ))}
                    </div>
                    <Link
                        href={`https://wa.me/${WHATSAPP_API_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                        target="_self"
                        title="Point Up Chat"
                        className="border font-medium relative  border-white/[0.2]  text-white  px-10 py-1 rounded-full flex justify-center items-center gap-3 
                hover:border-[#d1ab38] transition-all
                ">
                        <span className=" text-[#d1ab38] ">Join Now</span>
                        <span className=""><FaLongArrowAltRight size={26} className="text-[#d1ab38] " /></span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent  h-px" />
                    </Link>
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
    const drawerRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log(pathname);
    }, [pathname])

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="drawer z-[999]">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={drawerRef} />
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
                    <Link
                        href={"/"}
                    >
                        <Image

                            src={logo} alt="point up logo" height={60} width={60} />
                    </Link>
                    <div className="flex flex-col gap-4 mt-10 mb-5">
                        {
                            navItems.map((item, indx) => (
                                <TransitionLink href={item.link} key={indx}
                                    className={`text-lg ${(pathname === item.link) ? "text-[#d1ab38]" : ""}`}
                                >
                                    <span onClick={() => {
                                        drawerRef.current?.click();
                                        setIsOpen(false)
                                    }}>
                                        {item?.icon} {item.name}
                                    </span>
                                </TransitionLink>
                            ))
                        }
                    </div>
                    <ApplyButton buttonText={"Join Now"} />
                </aside>
            </div>
        </div>
    )
}
