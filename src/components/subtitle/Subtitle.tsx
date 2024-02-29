import React, { useState } from 'react';
import { FaLink } from "react-icons/fa6";
import styles from "./subtitle.module.css"
interface TitleProps {
    id: string;
    title: string;
}

const Subtitle: React.FC<TitleProps> = ({ title, id }) => {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = () => {
        const url = `${window.location.origin}${window.location.pathname}${id ? '#' + id : ''}`;
        navigator.clipboard.writeText(url).then(
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
            <h2 className={styles.title} id={id}>{title}</h2>
            <button
                onClick={copyToClipboard}
                className={styles.button}
            >
                <FaLink className={styles.icon} />
            </button>
            {copySuccess && <span className={styles.copySuccess}>{copySuccess}</span>}
        </div>
    );
};

export default Subtitle;