import styles from "./footer.module.css";
import collaboratorsData from '@/utils/collaborators.json';
import CollaboratorCard from "../CollaboratorCard/CollaboratorCard";
import { useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

const Footer = () => {
    const cardsToShow = 4;
    const [startIndex, setStartIndex] = useState(0);

    const handlePrevClick = () => {
        setStartIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 2 : 0));
    };

    const handleNextClick = () => {
        setStartIndex((prevIndex) => (prevIndex < collaboratorsData.length - 2 ? prevIndex + 2 : prevIndex));
    };

    const prevDisabled = startIndex === 0;
    const nextDisabled = startIndex >= collaboratorsData.length - cardsToShow;

    return (
        <div className={styles.footer}>
            {collaboratorsData.length > cardsToShow && (
                <button onClick={handlePrevClick} disabled={prevDisabled} className={styles.button}>
                    <GoTriangleLeft className={styles.icon} />
                </button>
            )}
            {collaboratorsData.slice(startIndex, startIndex + cardsToShow).map((collaborator, index) => (
                <CollaboratorCard key={index} collaborator={collaborator} />
            ))}
            {collaboratorsData.length > cardsToShow && (
                <button onClick={handleNextClick} disabled={nextDisabled} className={styles.button}>
                    <GoTriangleRight className={styles.icon} />
                </button>
            )}
        </div>
    );
};

export default Footer;
