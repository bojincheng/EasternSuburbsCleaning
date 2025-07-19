// app/privacy.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function PrivacyPage() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/terms.md')
            .then(r => r.text())
            .then(setContent);
    }, []);

    return (
        <div
            style={{
                height: '100vh',
                overflowY: 'auto',
                padding: '2rem',
                maxWidth: '800px',
                margin: 'auto',
            }}
        >
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}
