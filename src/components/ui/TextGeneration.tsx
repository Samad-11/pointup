"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref)
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        const animation = () => {
            animate(
                "span",
                {
                    opacity: 1,
                },
                {
                    duration: 2,
                    delay: stagger(0.2),
                }
            )
        }
        if (isInView) {
            console.log('in view');
            animation()
        }

    }, [isInView]);



    const renderWords = () => {
        return (
            <motion.div ref={scope}
            >
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-white  opacity-0 "
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <section className={cn("font-bold", className)} ref={ref}>
            <div className="mt-4">
                <div className=" text-white font-poppins text-2xl leading-snug tracking-wide ">
                    {renderWords()}
                </div>
            </div>
        </section>
    );
};
