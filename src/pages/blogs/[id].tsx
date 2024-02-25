import { useRouter } from "next/router";
import styles from "../../styles/BlogElement.module.css";
import { marked } from "marked";
import { useEffect, useState } from "react";

const BlogPost = () => {
    const lang = "es";
    const router = useRouter();
    const { id } = router.query;
    const [content, setContent] = useState("");
    useEffect(() => {
        if (id) {
            fetch(`/content/${id}.mdx`)
                .then((res) => res.text())
                .then((mdxContent) => {
                    const _mdxContent = String(marked(mdxContent));
                    setContent(_mdxContent);
                })
                .catch((err) =>
                    console.error("Error fetching MDX content", err)
                );
        }
    }, [id]);

    const handleClick = () => {
        router.push(`/`);
    };
    return (
        <div className={styles.main}>
            <button onClick={handleClick} className={styles.main_button}>
                Volver
            </button>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default BlogPost;
