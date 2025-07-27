import { useRouter } from 'expo-router';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

export default function Index() {
    const { isLoading, isAuthenticated } = useAuth0();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            const target = isAuthenticated ? '/dashboard' : '/login';
            // @ts-ignore
            router.replace(target);
        }
    }, [isLoading, isAuthenticated]);

    return null;
}
