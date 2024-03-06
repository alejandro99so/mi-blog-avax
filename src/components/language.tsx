import React, { useState, useRef, useEffect, FC } from "react";
import styles from "../styles/Language.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import languageData from "@/utils/content.json";

type ILanguage = {
    code: string;
    name: string;
    flag: string;
};

interface LanguageSelectorProps {
    updateLanguage: (code: string) => void;
}

// Definiendo el tipo para el contenido del archivo JSON
interface ILanguageData {
    [key: string]: { // key es el código del idioma, por ejemplo, 'es' o 'en'
        path: string;
        title: string;
        summary: string;
        backgroundImage: string;
    };
}

const languageDataTyped = languageData as ILanguageData[];

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
    }, [selectedLanguage, updateLanguage]);

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

    const router = useRouter();

    const findRouteForNewLanguage = (currentPath: string, newLanguageCode: string, routesInfo: ILanguageData[]): string => {
        // Encuentra el objeto de ruta actual basado en la ruta actual y el código de idioma actual
        const currentRoute = routesInfo.find(routeInfo => Object.values(routeInfo).some(route => route.path === currentPath));

        if (!currentRoute) return '/'; // Retorna a la ruta de inicio si no se encuentra la ruta actual

        // Accede a la ruta correspondiente en el nuevo idioma
        const newRoute = currentRoute[newLanguageCode];
        return newRoute ? newRoute.path : '/';
    };


    const handleLanguageChange = (language: ILanguage) => {
        setSelectedLanguage(language);
        setIsOpen(false);

        const currentPath = router.asPath;
        const newPath = findRouteForNewLanguage(currentPath, language.code, languageDataTyped);
        router.push(newPath);
    };

    const [windowWidth, setWindowWidth] = useState<number>(0);
    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        updateDimensions();

        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

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
                        <span className={windowWidth <= 700 ? styles.language_name_hidden : ''}>
                            {selectedLanguage.name}
                        </span>
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
                                            className={
                                                styles.language_list_element_image
                                            }
                                            src={language.flag}
                                            alt={"Flag 2"}
                                            width={30}
                                            height={16}
                                        />
                                        <span className={windowWidth <= 700 ? styles.language_name_hidden : ''}>
                                            {language.name}
                                        </span>
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
