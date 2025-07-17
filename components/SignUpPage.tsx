import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'expo-router';

export default function SignUpPage() {
    const { loginWithRedirect, isLoading } = useAuth0();
    const [identifier, setIdentifier] = useState('');    // phone or email
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    // Signup form submits into Auth0's hosted signup page with a hint
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        if (password !== confirm) {
            alert('Passwords do not match');
            return;
        }

        loginWithRedirect({
            authorizationParams: {
                screen_hint: 'signup',
                login_hint: identifier
            }
        });
    };

    // Social login handlers
    const handleGoogle = () =>
        loginWithRedirect({
            authorizationParams: { connection: 'google-oauth2' }
        });

    const handleFacebook = () =>
        loginWithRedirect({
            authorizationParams: { connection: 'facebook' }
        });

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h1 style={styles.title}>Sign Up</h1>
                <p style={styles.subtitle}>
                    Already have an account?{' '}
                    <Link href="/login" className="link">Login here</Link>
                </p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        placeholder="Phone or Email"
                        value={identifier}
                        onChange={e => setIdentifier(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                        style={styles.input}
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        style={styles.submitBtn}
                    >
                        {isLoading ? 'Submitting…' : 'Submit'}
                    </button>
                </form>

                <div style={styles.divider}>
                    <span style={styles.dividerLine} /> or{' '}
                    <span style={styles.dividerLine} />
                </div>

                <button onClick={handleGoogle} style={styles.socialBtn}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                        alt="Google"
                        style={styles.socialIcon}
                    />
                    Continue with Google
                </button>
                <button onClick={handleFacebook} style={styles.socialBtn}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                        alt="Facebook"
                        style={styles.socialIcon}
                    />
                    Continue with Facebook
                </button>
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1C4532 0%, #496A5C 100%)',
        padding: '1rem',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
    },
    title: { margin: 0, fontSize: '2rem', color: '#1C4532' },
    subtitle: { margin: '0.5rem 0 1.5rem', fontSize: '0.9rem', color: '#555' },
    link: { color: '#496A5C', textDecoration: 'none' },
    form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    input: {
        padding: '0.75rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
    },
    submitBtn: {
        padding: '0.75rem',
        fontSize: '1rem',
        backgroundColor: '#1C4532',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    divider: {
        display: 'flex',
        alignItems: 'center',
        margin: '1.5rem 0',
        color: '#888',
        fontSize: '0.9rem',
    },
    dividerLine: { flex: 1, height: '1px', backgroundColor: '#ddd' },
    socialBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.6rem',
        fontSize: '0.9rem',
        borderRadius: '6px',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        cursor: 'pointer',
        marginBottom: '0.75rem',
    },
    socialIcon: { width: '18px', height: '18px', objectFit: 'contain' },
};