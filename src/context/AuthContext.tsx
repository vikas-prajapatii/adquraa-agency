"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

interface User {
    email: string;
    role: "BRAND" | "CREATOR" | "ADMIN";
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (token: string, redirectUrl?: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Hydrate state from localStorage
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            // Decode token to get user info (mocking decode for now as we don't have jwt-decode lib installed yet, 
            // but in real app we should decode or fetch /me)
            // For now, we'll try to fetch dashboard to validate token and get role implicitly if possible,
            // OR we can just decode the payload part if it's a standard JWT.
            try {
                const payload = JSON.parse(atob(storedToken.split('.')[1]));
                setUser({
                    email: payload.sub,
                    role: payload.roles?.[0] as any || "CREATOR" // Assuming roles claim exists or defaulting
                });
            } catch (e) {
                console.error("Invalid token format", e);
                logout();
            }
        }
        setIsLoading(false);
    }, []);

    const login = (newToken: string, redirectUrl?: string) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);

        // Decode and set user immediately
        try {
            const payload = JSON.parse(atob(newToken.split('.')[1]));
            const role = payload.roles?.[0] || "CREATOR";
            setUser({ email: payload.sub, role });

            if (redirectUrl) {
                router.push(redirectUrl);
            } else {
                router.push(role === 'BRAND' ? '/dashboard/brand' : '/dashboard/creator');
            }
        } catch (e) {
            console.error("Error decoding token during login", e);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        router.push("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!token,
                isLoading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
