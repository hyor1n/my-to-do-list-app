import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function UnauthorizedLayout() {
    return (
        <>
            <div className="space-y-4 text-center">
                <h1 className="text-5xl font-bold">Kelola Rutinitasmu!</h1>
                <p className="text-xl text-muted-foreground tracking-tighter">
                    Hari kamu akan menjadi lebih teratur bila semuanya tercatat dengan baik 💯
                </p>
            </div>
            <Link
                className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'tracking-wide transform hover:scale-105 hover:bg-primary hover:text-primary-foreground duration-200 gap-2'
                )}
                href="/login"
            >
                Mulai sekarang
            </Link>
        </>
    );
}
