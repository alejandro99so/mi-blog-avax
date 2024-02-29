import React from "react";
import styles from "./blogCard.module.css";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    summary: string;
    path: string;
    lang: string;
    backgroundImage?: string
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, path, lang, backgroundImage }) => {

    return (
        <Link href={path} className={styles.card} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.content}>
                <b className={styles.title}>{title}</b>
                <div className={styles.summary}>{summary.slice(0, 60)}...</div>
                <b className={styles.prompt}>{lang === "en" ? "Continue reading" : "Seguir leyendo"}</b>
            </div>
        </Link>
    );

};

export default BlogCard;
