import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton: React.FC = () => {
    const { loginWithRedirect, isLoading } = useAuth0();

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h1 style={styles.logo}>DongJiao Cleaning</h1>
                <p style={styles.subtitle}>Welcome to DongJiao Cleaning. Sign in to start your cleaning journey.</p>
                <button
                    style={styles.button}
                    onClick={() => loginWithRedirect()}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Login'}
                </button>
                <p style={styles.hint}>Quick login with Google or GitHub</p>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #1C4532 0%, #496A5C 100%)',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '360px',
        width: '90%',
    },
    logo: {
        margin: 0,
        fontSize: '2rem',
        color: '#1C4532',
        fontWeight: 'bold',
    },
    subtitle: {
        margin: '0.5rem 0 1.5rem',
        fontSize: '1rem',
        color: '#333333',
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        fontSize: '1rem',
        color: '#ffffff',
        backgroundColor: '#496A5C',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    hint: {
        marginTop: '1rem',
        fontSize: '0.875rem',
        color: '#eeeeee',
    },
};

export default LoginButton;
