import React, { useEffect } from 'react';
import { Slot, useRouter, usePathname } from 'expo-router';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { authConfig } from '@/constants/authConfig';

function AuthGuard() {
    const { isAuthenticated, isLoading } = useAuth0();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoading && !isAuthenticated && pathname === '/dashboard') {
            router.replace('/unauthorised');
        }
    }, [isAuthenticated, isLoading, pathname]);

    return <Slot />;
}

export default function RootLayout() {
    return (
        <Auth0Provider
            domain={authConfig.domain}
            clientId={authConfig.clientId}
            authorizationParams={{
                ...authConfig.authorizationParams,
                redirect_uri: window.location.origin,
            }}
        >
            <AuthGuard />
        </Auth0Provider>
    );
}
