'use server';

import { encrypt } from '@/lib/bcryptjs';
import { RegisterSchema } from '@/schemas';
import { createNewUser, getUserByUsername } from '@/services/user';
import { z } from 'zod';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: 'Terjadi kesalahan. Coba daftar kembali.' };
    }

    const { name, username, password, confirmationPassword } = validatedFields.data;

    if (password !== confirmationPassword) {
        return {
            error: 'Kata sandi dan konfirmasi kata sandi tidak cocok.',
        };
    }

    const existingUsername = await getUserByUsername(username);
    if (existingUsername) {
        return { error: 'Nama pengguna sudah pernah terdaftar.' };
    }

    await createNewUser({
        name,
        username,
        password: encrypt(password),
    });

    // TODO: Send verification token email

    return { success: 'Berhasil daftar.' };
};
