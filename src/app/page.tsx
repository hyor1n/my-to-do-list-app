import { auth } from '@/lib/next-auth/auth';
import AuthorizedLayout from './layout-authorized';
import UnauthorizedLayout from './layout-unauthorized';

export default async function HomePage() {
    const session = await auth();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center space-y-8">
            {session ? (
                <AuthorizedLayout username={session.user?.name!}>
                    <p>content</p>
                </AuthorizedLayout>
            ) : (
                <UnauthorizedLayout />
            )}
        </main>
    );
}
