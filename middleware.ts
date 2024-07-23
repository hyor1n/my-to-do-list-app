import authConfig from '@/lib/next-auth/auth.config';
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    apiUTPrefix,
    authRoutes,
    publicRoutes,
} from '@/lib/next-auth/routes';
import NextAuth from 'next-auth';

const { auth } = NextAuth(authConfig);

export default auth((req): any => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isApiUTRoute = nextUrl.pathname.startsWith(apiUTPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return null;
    }

    if (isApiUTRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }

        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL('/login', nextUrl));
    }

    // if (isPublicRoute) {
    //   if (!isLoggedIn) {
    //     return Response.redirect(new URL("/login", nextUrl));
    //   }

    //   return null;
    // }

    return null;
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
    // matcher: ["/"],
};
