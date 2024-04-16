import React from 'react';
import { useRouter } from 'next/router';
import NavigationButton from './NavigationButton';
import styles from "./navigation.module.css"
import { useLang } from '@/context/LangContext';

const Navigation: React.FC = () => {
    const router = useRouter();
    const currentPath = router.asPath;
    const { lang, content } = useLang();

    // contenido basado en el idioma actual
    const localizedContent = content.map((module: any) => module[lang]);


    const currentIndex = localizedContent.findIndex((module: any) => module.path === currentPath)

    const previousModule = currentIndex > 0 ? localizedContent[currentIndex - 1] : null;
    const nextModule = currentIndex < localizedContent.length - 1 ? localizedContent[currentIndex + 1] : null;

    return (
        <div className={styles.container}>
            {previousModule && (
                <NavigationButton
                    label={`« ${previousModule.title}`}
                    direction="previous"
                    onClick={() => router.push(previousModule.path)}
                />
            )}
            {nextModule && (
                <NavigationButton
                    label={`${nextModule.title} »`}
                    direction="next"
                    onClick={() => router.push(nextModule.path)}
                />
            )}
        </div>
    );
};

export default Navigation;
