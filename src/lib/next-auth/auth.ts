import NextAuth from 'next-auth';
import authConfig from '@/lib/next-auth/auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/lib/prisma';

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            return session;
        },
        async jwt({ token }) {
            return token;
        },
    },
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt',
        // maxAge: 30 * 24 * 60 * 60, // default expiration time from authjs is 30 days
        maxAge: 12 * 60 * 60, // 12 hours
        updateAge: 60 * 60, // 1 hour
    },
    ...authConfig,
});
