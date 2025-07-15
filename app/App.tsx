/* import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from '../constants/authConfig';
import Dashboard from '../components/Dashboard';

const App = () => {
    return (
        <Auth0Provider
            domain={authConfig.domain}
            clientId={authConfig.clientId}
            authorizationParams={authConfig.authorizationParams}
        >
            <Dashboard />
        </Auth0Provider>
    );
};

export default App; */

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import Dashboard from '../components/Dashboard';
/* Load the variables from .env file*/
const App = () => {
    const isWeb = typeof window !== 'undefined';

    const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
    const redirectUri = isWeb
        ? window.location.origin
        : process.env.REACT_APP_AUTH0_REDIRECT_URI!;

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
                scope: 'openid profile email',
            }}
        >
            <Dashboard />
        </Auth0Provider>
    );
};

export default App;
