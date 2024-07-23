import Credentials from 'next-auth/providers/credentials';

import { decrypt } from '@/lib/bcryptjs';
import { LoginSchema } from '@/schemas';
import { getUserByUsername } from '@/services/user';
import type { NextAuthConfig } from 'next-auth';

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { username, password } = validatedFields.data;

                    const user = await getUserByUsername(username);

                    if (!user || !user.password) return null;

                    const isValidPassword = decrypt(password, user.password);
                    if (isValidPassword) return user;
                }

                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;
