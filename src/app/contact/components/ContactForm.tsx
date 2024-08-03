"use client";
import React from "react";

import { cn } from "@/utils/cn";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineErrorOutline } from "react-icons/md";

export function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        toast.custom((t) => (
            <div className={`bg-black text-red-500 font-extrabold px-4 border-red-600 flex gap-4 items-center justify-center border py-3 rounded-full`}>
                <MdOutlineErrorOutline className="text-4xl" />
                <div>
                    <p className="text-center text-xl">Error from our end</p>
                    <span>Please contact us using any medium</span>
                </div>
            </div>
        ))
    };
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input ">
            <h2 className="font-bold text-xl text-neutral-200">
                Send us a Query
            </h2>
            <Toaster />
            <form
                className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="Ayushman" type="text" required />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="Dubey" type="text" required />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="ayushmandubeydu@mail.com" type="email" required />
                </LabelInputContainer>
                <LabelInputContainer className="mb-10">
                    <Label htmlFor="query">Query</Label>
                    <TextArea placeholder="I need to ask about ..." required />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] 
                    "
                    type="submit"
                >
                    Send &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent my-8 h-[1px] w-full
                max-sm:hidden
                " />


            </form>
        </div>
    );
}

export const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full group", className)}>
            {children}
        </div>
    );
};
