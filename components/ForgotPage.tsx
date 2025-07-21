// app/forgot.tsx
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useRouter } from 'expo-router';

export default function ForgotPasswordPage() {
    const router = useRouter();
    const { loginWithRedirect } = useAuth0();
    const [email, setEmail] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState<string|null>(null);

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPass !== confirmPass) {
            setError('Passwords do not match');
            return;
        }
        // TODO: call your Auth0 password‑reset API here,
        // e.g. via Management API or redirect to hosted reset page.
        // For now we’ll just bounce back to /login:
        router.push('/login');
    };

    return (
        <div style={styles.wrapper}>
            {/* ← Back to Sign In */}
            <Link href="/login" asChild>
                <div style={styles.backBtn}>←</div>
            </Link>

            <div style={styles.card}>
                <h1 style={styles.title}>Forgot Your Password?</h1>
                <p style={styles.subtitle}>
                    Enter your email and new password below.
                </p>

                <form onSubmit={handleReset} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="New password"
                        value={newPass}
                        onChange={e => setNewPass(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPass}
                        onChange={e => setConfirmPass(e.target.value)}
                        required
                        style={styles.input}
                    />

                    {error && <p style={styles.errorText}>{error}</p>}

                    <button type="submit" style={styles.resetBtn}>
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}

const styles: { [k: string]: React.CSSProperties } = {
    wrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1C4532 0%, #496A5C 100%)',
        padding: '1rem',
    },
    backBtn: {
        position: 'absolute',
        top: 16,
        left: 16,
        width: 32,
        height: 32,
        borderRadius: '50%',
        backgroundColor: '#C19A68',
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        cursor: 'pointer',
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
    },
    title: {
        margin: 0,
        fontSize: '1.75rem',
        color: '#1C4532',
    },
    subtitle: {
        margin: '0.5rem 0 1.5rem',
        fontSize: '0.95rem',
        color: '#555',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    input: {
        padding: '0.75rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
    },
    errorText: {
        color: '#c00',
        fontSize: '0.875rem',
        margin: 0,
    },
    resetBtn: {
        marginTop: '0.5rem',
        padding: '0.75rem',
        backgroundColor: '#1C4532',
        color: '#FFF',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
};
