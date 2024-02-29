import Link from 'next/link';
import React from 'react';
import styles from "./styles.module.css"

type SidebarProps = {
    language: { title: string; path: string; }[];
};

const Sidebar: React.FC<SidebarProps> = ({ language }) => {
    return (
        <aside className={styles.container}>
            {language.map((link) => (
                <Link className={styles.link} href={link.path} key={link.title}>
                    {link.title}
                </Link>
            ))}
        </aside>
    );
};

export default Sidebar;
