'use client';
import { register } from '@/actions/auth/register';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const RegisterForm = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: '',
            username: '',
            password: '',
            confirmationPassword: '',
        },
        mode: 'onBlur',
    });
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        startTransition(() => {
            register(values).then((response) => {
                if (response.success) {
                    toast(response.success);
                    router.push('/login');
                } else {
                    toast(response.error);
                }
            });
        });
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Nama Lengkap</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        disabled={isPending}
                                        placeholder="Nama Lengkap"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Nama Pengguna</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        disabled={isPending}
                                        placeholder="namapengguna"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Kata Sandi</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        disabled={isPending}
                                        placeholder="********"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        );
                    }}
                />
                <FormField
                    control={form.control}
                    name="confirmationPassword"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Konfirmasi Kata Sandi</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        disabled={isPending}
                                        placeholder="********"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        );
                    }}
                />
                <Button disabled={isPending} type="submit" className="w-full">
                    Daftar
                </Button>
            </form>
        </Form>
    );
};

export default RegisterForm;
