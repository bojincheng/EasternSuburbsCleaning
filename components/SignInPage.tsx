import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'expo-router';
import {Image} from "react-native";
import { StyleSheet } from "react-native";

const customStyle = `
  .cta-button {
    margin-top: 1rem;
    padding: 0.6rem 1.2rem;
    background-color: #496A5C;
    color: #FFF;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .cta-button:hover {
    background-color: #2f4a3d;
  }
`;


export default function SignInPage() {
    const { loginWithRedirect, isLoading } = useAuth0();
    const [phoneEmail, setPhoneEmail] = useState('');
    const [password, setPassword] = useState('');

    // Phone/Email
    const handleEmailLogin = () => {
        loginWithRedirect({
            authorizationParams: {
                login_hint: phoneEmail
            }
        });
    };

    // Google
    const handleGoogleLogin = () => {
        loginWithRedirect({
            authorizationParams: {
                connection: 'google-oauth2'
            }
        });
    };

    // Facebook
    const handleFacebookLogin = () => {
        loginWithRedirect({
            authorizationParams: {
                connection: 'facebook'
            }
        });
    };


    return (
        <>
            <style>{customStyle}</style>
        <div style={styles.container}>
            {/* ─── SIGN‑IN FORM ─── */}
            <div style={styles.left}>
                <div style={styles.formCard}>
                    <h1 style={styles.title}>Sign In</h1>
                    <p style={styles.smallText}>
                        Don’t have an account?{' '}
                        <Link href="/signup" className="my-link-class">Create now</Link>
                    </p>

                    <input
                        type="text"
                        placeholder="Phone or E‑mail"
                        value={phoneEmail}
                        onChange={e => setPhoneEmail(e.target.value)}
                        style={styles.input}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={styles.input}
                    />

                    <div style={styles.row}>
                        <label style={styles.checkboxLabel}>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link href="/forgot" className="my-link-class">Forgot password?</Link>
                    </div>

                    <button
                        onClick={handleEmailLogin}
                        disabled={isLoading}
                        style={styles.primaryBtn}
                    >
                        {isLoading ? 'Loading…' : 'Sign in'}
                    </button>

                    <label style={{ fontSize: '0.8rem', color: '#555', marginBottom: '1rem', display: 'block' }}>
                        <input
                            type="checkbox"
                            required
                            style={{ marginRight: '0.5rem' }}
                        />
                        I have read and agree to the{' '}
                        <a href="/terms" target="_blank" style={{ color: '#496A5C', textDecoration: 'underline' }}>
                            Terms & Conditions
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" target="_blank" style={{ color: '#496A5C', textDecoration: 'underline' }}>
                            Privacy Policy
                        </a>.
                    </label>

                    <div style={styles.divider}>
                        <span style={styles.dividerLine} /> or{' '}
                        <span style={styles.dividerLine} />
                    </div>

                    <button onClick={handleGoogleLogin} style={styles.socialBtn}>
                        <img
                            src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                            alt="Google"
                            style={styles.socialIcon}
                        />
                        Continue with Google
                    </button>
                    <button onClick={handleFacebookLogin} style={styles.socialBtn}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                            alt="Facebook"
                            style={styles.socialIcon}
                        />
                        Continue with Facebook
                    </button>
                </div>
            </div>

            {/* ─── MARKETING PANEL ─── */}
            <div style={styles.right}>
                <button style={styles.supportBtn}>Support</button>

                <div style={styles.marketingCard}>
                    <Image
                        source={require('../assets/Signin.png')}
                        style = {styles_Special.marketingImage}
                        resizeMode="contain"
                    />

                    <h2 style={styles.marketingTitle}>Get a Spotless Home, Effortlessly</h2>
                    <p style={styles.marketingText}>
                        Book professional cleaning services with just a few clicks.
                        Upload photos, leave instructions, and let us handle the rest.
                    </p>
                    <button className="cta-button">Learn more</button>

                    <div style={styles.quoteBox}>
                        <span style={styles.quoteLabel}>Quote Estimate:</span>
                        <strong style={styles.quoteValue}>$350.40</strong>
                    </div>
                </div>

                <div style={styles.panelSnippet}>
                    <p style={styles.panelSnippetText}>
                        We combine attention to detail, eco‑friendly products, and professional care
                        to make your space shine. Our dashboard helps you manage bookings, track
                        cleanings, and update preferences—all in one place.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}


const styles_Special = StyleSheet.create({
    marketingImage: {
        width: 260,
        height: 160,
        borderRadius: 12,
        alignSelf: 'center',
    }
});

const styles: { [k: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
    },
    // ─── LEFT ───
    left: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
    },
    formCard: {
        width: '100%',
        maxWidth: '360px',
    },
    title: {
        margin: 0,
        fontSize: '2rem',
        color: '#1C4532',
    },
    smallText: {
        marginTop: '0.5rem',
        marginBottom: '1.5rem',
        fontSize: '0.9rem',
        color: '#555',
    },
    link: {
        marginLeft: '0.25rem',
        color: '#496A5C',
        textDecoration: 'none',
    },
    input: {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        boxSizing: 'border-box',
        marginBottom: 16,
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        marginBottom: '1rem',
    },
    checkboxLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#555',
    },
    primaryBtn: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#1C4532',
        color: '#FFF',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    divider: {
        display: 'flex',
        alignItems: 'center',
        margin: '1.5rem 0',
        fontSize: '0.9rem',
        color: '#888',
    },
    dividerLine: {
        flex: 1,
        height: '1px',
        backgroundColor: '#ddd',
    },
    socialBtn: {
        width: '100%',
        padding: '0.6rem',
        marginBottom: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        borderRadius: '6px',
        backgroundColor: '#fff',
        cursor: 'pointer',
        fontSize: '0.9rem',
        color: '#333',
    },
    socialIcon: {
        width: '20px',
        height: '20px',
        marginRight: '10px',
        objectFit: 'contain',
        verticalAlign: 'middle',
    },

    // ─── RIGHT ───
    right: {
        flex: 1,
        position: 'relative',
        background: 'linear-gradient(135deg, #1C4532 0%, #496A5C 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
    },
    supportBtn: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '0.9rem',
    },
    marketingCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: '2rem',
        maxWidth: '400px',
        textAlign: 'center',
        color: '#333',
    },
    logo: {
        width: '100%',
        height: 'auto',
        borderRadius: '6px',
        marginBottom: '1rem',
        objectFit: 'contain',
    },
    marketingTitle: {
        margin: 0,
        fontSize: '1.5rem',
        color: '#1C4532',
    },
    marketingText: {
        marginTop: '0.75rem',
        fontSize: '0.95rem',
        lineHeight: 1.5,
    },
    ctaBtn: {
        marginTop: '1rem',
        padding: '0.6rem 1.2rem',
        backgroundColor: '#496A5C',
        color: '#FFF',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    quoteBox: {
        marginTop: '1.5rem',
        padding: '1rem',
        backgroundColor: '#F5F5F5',
        borderRadius: '6px',
        textAlign: 'center',
    },
    quoteLabel: {
        fontSize: '0.85rem',
        color: '#555',
    },
    quoteValue: {
        display: 'block',
        fontSize: '1.25rem',
        color: '#1C4532',
        marginTop: '0.25rem',
    },

    // ─── WHY CHOOSE US? ───
    panelSnippet: {
        marginTop: '2rem',
        maxWidth: '400px',
        textAlign: 'center',
    },
    panelSnippetText: {
        color: '#FFF',
        fontSize: '1rem',
        lineHeight: 1.5,
        margin: 0,
    },
};