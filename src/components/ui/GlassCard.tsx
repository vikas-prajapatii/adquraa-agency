"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
    blurIntensity?: "sm" | "md" | "lg";
    gradient?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, children, hoverEffect = true, blurIntensity = "md", gradient = false, ...props }, ref) => {

        const blurMap = {
            sm: "backdrop-blur-sm",
            md: "backdrop-blur-md",
            lg: "backdrop-blur-xl",
        };

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={hoverEffect ? { y: -5 } : undefined}
                transition={{ duration: 0.4 }}
                className={cn(
                    "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
                    blurMap[blurIntensity],
                    hoverEffect && "hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-adquora-purple/10 transition-all duration-300",
                    gradient && "bg-gradient-to-br from-white/5 to-white/0",
                    className
                )}
                {...props}
            >
                {gradient && (
                    <div className="absolute inset-0 bg-gradient-to-br from-adquora-purple/10 via-transparent to-adquora-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                <div className="relative z-10">{children}</div>
            </motion.div>
        );
    }
);

GlassCard.displayName = "GlassCard";
