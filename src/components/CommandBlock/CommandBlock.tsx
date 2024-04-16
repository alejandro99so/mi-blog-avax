import React, { useState } from 'react';
import { GoCopy } from "react-icons/go";
import styles from "./commandBlock.module.css"
interface CommandBlockProps {
    command: string;
}

const CommandBlock: React.FC<CommandBlockProps> = ({ command }) => {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(command).then(
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
            <span className={styles.span}>{command}</span>
            <div className={styles.containerButton}>
                <button
                    onClick={copyToClipboard}
                    className={styles.button}
                >
                    <GoCopy size={20} className={styles.icon} />
                </button>
                {copySuccess && <div className={styles.copySuccess}>{copySuccess}</div>}
            </div>
        </div>
    );
};

export default CommandBlock;
