import React, { useState, useRef, useEffect, FC } from "react";
import styles from "../styles/Language.module.css";
import Image from "next/image";

type ILanguage = {
    code: string;
    name: string;
    flag: string;
};

interface LanguageSelectorProps {
    updateLanguage: (code: string) => void;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ updateLanguage }) => {
    const getInitialLanguage = () => {
        setReady(true);
        if (typeof window !== "undefined" && window.localStorage) {
            const savedLanguage = localStorage.getItem("selectedLanguage");
            if (savedLanguage) {
                const _lang = JSON.parse(savedLanguage);
                return _lang;
            } else {
                return {
                    code: "es",
                    name: "Español",
                    flag: "/images/colombia.png",
                };
            }
        } else {
            return {
                code: "es",
                name: "Español",
                flag: "/images/colombia.png",
            };
        }
    };
    const [ready, setReady] = useState(false);
    const [selectedLanguage, setSelectedLanguage] =
        useState<ILanguage>(getInitialLanguage);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            updateLanguage(selectedLanguage.code);
            localStorage.setItem(
                "selectedLanguage",
                JSON.stringify(selectedLanguage)
            );
        }
    }, [selectedLanguage]);

    const languages = [
        { code: "es", name: "Español", flag: "/images/colombia.png" },
        { code: "en", name: "English", flag: "/images/usa.png" },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node | null)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleLanguageChange = (language: ILanguage) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <div className={styles.language} ref={dropdownRef}>
            {ready && (
                <div>
                    <div
                        className={styles.language_flag}
                        onClick={toggleDropdown}
                    >
                        <Image
                            src={selectedLanguage.flag}
                            alt={"Flag 1"}
                            width={30}
                            height={15}
                        />
                        {selectedLanguage.name}
                        <span>{isOpen ? "▲" : "▼"}</span>
                    </div>
                    {isOpen && (
                        <ul className={styles.language_list}>
                            {languages
                                .filter(
                                    (language) =>
                                        language.code !== selectedLanguage.code
                                )
                                .map((language) => (
                                    <li
                                        key={language.code}
                                        onClick={() =>
                                            handleLanguageChange(language)
                                        }
                                        className={styles.language_list_element}
                                    >
                                        <Image
                                            src={language.flag}
                                            alt={"Flag 2"}
                                            width={30}
                                            height={16}
                                        />
                                        {language.name}
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
