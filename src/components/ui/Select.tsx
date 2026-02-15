"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { label: string; value: string }[];
    placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, error, options, placeholder, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-medium text-gray-400 ml-1">
                        {label}
                    </label>
                )}
                <div className="relative group">
                    <select
                        className={cn(
                            "flex h-11 w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-adquora-purple/50 focus-visible:ring-1 focus-visible:ring-adquora-purple/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 text-white",
                            error && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500",
                            className
                        )}
                        ref={ref}
                        defaultValue={props.value ? undefined : ""}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map((option) => (
                            <option key={option.value} value={option.value} className="bg-[#0a0a0a] text-gray-300">
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none group-focus-within:text-adquora-purple transition-colors" />
                </div>
                {error && <p className="text-xs text-red-400 ml-1">{error}</p>}
            </div>
        );
    }
);
Select.displayName = "Select";

export { Select };
