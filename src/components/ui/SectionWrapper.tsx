import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    background?: "default" | "glass" | "transparent";
}

export const SectionWrapper = ({
    children,
    className,
    id,
    background = "default",
    ...props
}: SectionWrapperProps) => {
    return (
        <section
            id={id}
            className={cn(
                "relative py-16 md:py-24 overflow-hidden",
                background === "glass" && "bg-white/5 backdrop-blur-3xl",
                className
            )}
            {...props}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {children}
            </div>

            {/* Background Decor */}
            {background === "default" && (
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Add subtle grid or glow here if needed */}
                </div>
            )}
        </section>
    );
};
