import { Card, CardContent } from '@/components/ui/card';
import Navbar from './_components/navbar';
import Sidebar from './_components/sidebar';

interface AuthorizedLayoutProps {
    children: React.ReactNode;
    username: string;
}

export default function AuthorizedLayout({ children, username }: AuthorizedLayoutProps) {
    return (
        <Card className="min-w-[95vw] min-h-[90vh] flex shadow-none">
            <CardContent className="flex w-full">
                <div className="w-2/12 hidden md:block p-4 border-r-2">
                    <Sidebar />
                </div>
                <div className="w-full md:w-10/12 flex flex-col">
                    <Navbar username={username} />
                    <div className="p-8">{children}</div>
                </div>
            </CardContent>
        </Card>
    );
}
