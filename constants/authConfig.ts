import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web' && typeof window !== 'undefined';

export const authConfig = {
    domain: 'dev-24bc6kutijutya20.us.auth0.com',
    clientId: 'lt5bSIoXyLfZ4XBtfO6dqZTQJsILmMMv',
    authorizationParams: {
        redirect_uri: isWeb
            ? window.location.origin
            : 'exp://192.168.0.79:8081',
        scope: 'openid profile email',
    },
};