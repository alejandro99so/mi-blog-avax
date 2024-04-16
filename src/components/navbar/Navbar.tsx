import React, { useState } from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';
import { FiMenu } from "react-icons/fi";
import LanguageSelector from '@/components/language';
import ThemeToggle from '@/components/themeToggle/ThemeToggle';
import { useLang } from '@/context/LangContext';
import Link from 'next/link';

const Navbar = () => {
    const { lang, updateLanguage, text } = useLang();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOnClick = () => {
        window.open("https://twitter.com/avaxcolombia", "_blank");
    };


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <Image
                    onClick={handleOnClick}
                    src="/images/avaxcolombia.png"
                    alt="avaxcolombia"
                    width={50}
                    height={50}
                    className={styles.image}
                />
                <span className={styles.tooltipText}>
                    Orgullosamente Colombiano
                    <Image
                        src="/images/colombia.png"
                        alt="colombia"
                        width={15}
                        height={10}
                    />
                </span>
            </div>
            <Link href={"/"} className={styles.title}>
                <h1>{text?.avax_guide[lang !== "" ? lang : "es"]}</h1>
            </Link>
            <div className={styles.language}>
                <LanguageSelector updateLanguage={updateLanguage} />
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
