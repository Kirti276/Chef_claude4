import React from 'react';
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe({ recipe }) {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        if (recipe) {
            navigator.clipboard.writeText(recipe);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
    };
    return (
        <div className="recipe-container">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <button
                    onClick={handleCopy}
                    style={{
                        background: copied ? '#00fff7' : '#232946',
                        color: copied ? '#232946' : '#00fff7',
                        border: '1.5px solid #00fff7',
                        borderRadius: '10px',
                        padding: '7px 18px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: copied ? '0 0 12px #00fff7cc' : '0 0 8px #00fff7a0',
                        transition: 'all 0.2s',
                        outline: 'none',
                    }}
                >
                    {copied ? 'Copied!' : 'Copy Recipe'}
                </button>
            </div>
            <ReactMarkdown>
                {recipe}
            </ReactMarkdown>
        </div>
    );
}