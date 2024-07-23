import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import RegisterForm from './_components/register-form';

export default function RegisterPage() {
    return (
        <Card className="w-full sm:w-1/2 lg:w-1/3">
            <CardHeader>
                <CardTitle className="text-center">Daftar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-0">
                <RegisterForm />
                <p className="text-center text-sm text-muted-foreground">
                    Sudah punya akun?{' '}
                    <Link href="/login" className="text-primary hover:underline">
                        Masuk
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}
