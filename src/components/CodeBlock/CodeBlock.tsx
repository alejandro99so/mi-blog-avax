import React, { useState } from 'react';
import { GoCopy } from "react-icons/go";
import styles from "./codeBlock.module.css"

interface CodeBlockProps {
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(
            () => {
                setCopySuccess('¡Copiado!');
                setTimeout(() => setCopySuccess(''), 2000);
            },
            (err) => {
                setCopySuccess('¡Fallo al copiar!');
                setTimeout(() => setCopySuccess(''), 2000);
            }
        );
    };

    return (
        <div className={styles.container}>
            <button
                onClick={copyToClipboard}
                className={styles.button}
                title="Copy to clipboard"
            >
                <GoCopy size={20} className={styles.icon} />
                {copySuccess && <span className={styles.copySuccess}>¡Copiado!</span>}
            </button>
            <pre className={styles.pre}>
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default CodeBlock;
