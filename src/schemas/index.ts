import * as z from 'zod';

export const LoginSchema = z.object({
    username: z.string().min(1, { message: 'Masukkan nama pengguna anda' }),
    password: z.string().min(1, { message: 'Masukkan kata sandi anda' }),
});

export const RegisterSchema = z.object({
    name: z.string().min(1, { message: 'Masukkan nama lengkap anda' }),
    username: z.string().min(1, { message: 'Masukkan nama pengguna anda' }),
    password: z.string().min(8, { message: 'Kata sandi harus memiliki 8 karakter' }),
    confirmationPassword: z.string().min(1, { message: 'Kata sandi harus memiliki 8 karakter' }),
});
