'use client';
import { login } from '@/actions/auth/login';
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
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: '',
            password: '',
        },
        mode: 'onBlur',
    });
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            login(values)
                .then((response) => {
                    if (response && 'success' in response) {
                        toast(response.success); // not working. response doesnt contain a success message
                        router.push('/home');
                    } else if (response && 'error' in response) {
                        toast(response.error);
                    }
                })
                .catch((error) => {
                    toast(error.message || 'Gagal login. Silahkan coba kembali');
                });
        });
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
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
                                        placeholder="******"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        );
                    }}
                />
                <Button disabled={isPending} type="submit" className="w-full">
                    Masuk
                </Button>
            </form>
        </Form>
    );
};

export default LoginForm;
