import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value; // Middleware can't read localStorage, needs cookie? 
    // Wait, user asked for localStorage. Middleware executes on server/edge. 
    // It CANNOT access localStorage. It can only access Cookies.
    // If we follow the constraint "Store JWT securely (localStorage OR HttpOnly cookie)", 
    // converting to Cookies is better for middleware protection.
    // However, sticking to localStorage means we can't use Next.js Middleware for Auth check efficiently 
    // without client-side redirects or setting a cookie alongside.

    // STRATEGY: We will use client-side protection in Layout/Context for localStorage approach, 
    // OR we can set a cookie just for the middleware check.

    // Let's implement a safe Client-Side check in components, AND/OR logic to redirect in Middleware 
    // IF we decide to sync token to cookies.

    // For now, let's assume we might not rely solely on middleware if we are strictly localStorage.
    // BUT the prompt asked for "Protect Routes (Middleware)".
    // To satisfy this, let's assume we can migrate to Cookies OR we just check for a cookie.
    // If the user insists on localStorage, we'll have to rely on Client components. 
    // But let's try to do it right: Set a cookie when logging in (via API route wrapper or client js-cookie).

    // Actually, I can use context to redirect in useEffect. 

    // Let's skip strict middleware Implementation if using localStorage ONLY, 
    // OR we can try to check headers if it was an API call, but this is page navigation.

    // DECISION: I will implement middleware but it requires the token to be in cookies.
    // I will update the Login Flow to ALSO set a cookie for Middleware to work. 
    // using `js-cookie` in the client.

    const authCookie = request.cookies.get("auth_token");

    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (!authCookie) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
