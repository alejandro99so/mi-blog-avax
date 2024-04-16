import React, { ReactNode } from 'react';
import styles from "./pageContent.module.css"
import Sidebar from '../sidebar/Sidebar';
import { useLang } from '@/context/LangContext';

interface PageContentProps {
    children: ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
    const { lang, content } = useLang();
    const language = content.map((section: any) => section[lang])
    return (
        <div className={styles.container}>
            <Sidebar
                language={language}
            />
            <hr className={styles.border} />
            {children}
        </div>
    );
};

export default PageContent;
