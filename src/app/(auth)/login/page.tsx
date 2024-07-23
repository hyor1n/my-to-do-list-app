import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import LoginForm from './_components/login-form';

export default function LoginPage() {
    return (
        <Card className="w-full sm:w-1/2 lg:w-1/3">
            <CardHeader>
                <CardTitle className="text-center">Masuk</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
                <LoginForm />
                <p className="text-center text-sm text-muted-foreground">
                    Belum punya akun?{' '}
                    <Link href="/register" className="text-primary hover:underline">
                        Daftar
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}
