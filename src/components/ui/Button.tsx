"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading,
            icon,
            iconPosition = "left",
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden group cursor-pointer";

        const variants = {
            primary:
                "bg-gradient-to-r from-adquora-purple to-adquora-blue text-white shadow-lg shadow-adquora-purple/20 hover:shadow-adquora-purple/40 hover:scale-[1.02] active:scale-[0.98]",
            secondary:
                "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]",
            ghost:
                "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
            outline:
                "border-2 border-adquora-purple/50 text-adquora-purple hover:bg-adquora-purple/10",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading || disabled}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {/* Shine Effect for Primary */}
                {variant === "primary" && (
                    <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                )}

                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

                {!isLoading && icon && iconPosition === "left" && (
                    <span className="mr-2">{icon}</span>
                )}

                <span className="relative z-10">{children}</span>

                {!isLoading && icon && iconPosition === "right" && (
                    <span className="ml-2">{icon}</span>
                )}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
