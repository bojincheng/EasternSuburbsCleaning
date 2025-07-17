import React from 'react';
import { Slot } from 'expo-router';
import { Auth0Provider } from '@auth0/auth0-react';
import { Platform } from 'react-native';
const isWeb = Platform.OS === 'web' && typeof window !== 'undefined';
/* Load the variables from .env file*/
const domain = process.env.EXPO_PUBLIC_AUTH0_DOMAIN!;
const clientId = process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID!;
const redirectUri = isWeb
  ? window.location.origin
  : process.env.EXPO_PUBLIC_AUTH0_REDIRECT_URI!;
export default function RootLayout() {
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
        redirect_uri: redirectUri,
        scope: 'openid profile email',
            }}
        >
            <Slot />
        </Auth0Provider>
    );
}
