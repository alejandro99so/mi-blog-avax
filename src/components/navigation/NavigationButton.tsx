import React from 'react';
import styles from "./navigationButton.module.css"
interface NavigationButtonProps {
    label: string;
    direction: 'previous' | 'next';
    onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ label, direction, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.navigationButton} ${direction === 'next' ? `${styles.nextButton}` : `${styles.previousButton}`}`}
        >
            {label}
        </button>
    );
};

export default NavigationButton;
