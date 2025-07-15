import React from 'react';
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

export default App;