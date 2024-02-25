// Importa React y los estilos específicos del componente
import React from "react";
import styles from "../styles/BlogCard.module.css";
import { useRouter } from "next/router";
interface BlogCardProps {
    title: string;
    summary: string;
    id: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, id }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/blogs/${id}`);
    };
    return (
        <div className={styles.card} onClick={handleClick}>
            <p>
                <b className={styles.card_title}>{title}</b>
                <br />
                <br />
                <div>{summary.slice(0, 60)}...</div>
                <b>Seguir leyendo</b>
            </p>
        </div>
    );
};

export default BlogCard;
