import { logout } from '@/actions/auth/logout';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LogOut, Menu } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
    username: string;
}

const Navbar = ({ username }: NavbarProps) => {
    return (
        <div className="flex justify-between border-b-2 p-8">
            {/* <Link className={cn(buttonVariants({ variant: 'ghost' }), 'text-lg')} href="#">
                Home
            </Link> */}
            <div className="flex flex-row my-auto">
                <Link
                    className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'md:hidden')}
                    href=""
                >
                    <Menu />
                </Link>
                <h1 className="hidden md:block text-lg font-bold">Selamat datang, {username}!</h1>
            </div>
            <form action={logout} className="flex justify-center">
                <Button
                    type="submit"
                    variant="destructive"
                    className="tracking-wide transform hover:scale-105 duration-200"
                    size="icon"
                >
                    <LogOut className="w-4 h-4" />
                </Button>
            </form>
        </div>
    );
};

export default Navbar;
