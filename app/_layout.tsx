import React from 'react';
import { Slot } from 'expo-router';
import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from '@/constants/authConfig';

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
            <Slot />
        </Auth0Provider>
    );
}
