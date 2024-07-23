'use server';

import { signIn } from '@/lib/next-auth/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/lib/next-auth/routes';
import { LoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';
import { z } from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: 'Terjadi kesalahan. Coba masuk kembali dan pastikan data yang dimasukkan benar.',
        };
    }

    const { username, password } = validatedFields.data;

    try {
        await signIn('credentials', {
            username,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });

        return { success: 'Berhasil masuk.' };
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Nama pengguna atau kata sandi anda tidak sesuai.' };
                default:
                    return { error: 'Terjadi kesalahan. Coba masuk kembali.' };
            }
        }

        throw error;
    }
};
