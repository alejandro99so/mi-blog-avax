import { useRouter } from "next/router";
import styles from "../../styles/BlogElement.module.css";
import { marked } from "marked";
import { useEffect, useState } from "react";
import Head from "next/head";
import blogs from "../../utils/content.json";

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;
    const [content, setContent] = useState("");
    const [namePage, setNamePage] = useState("");
    useEffect(() => {
        if (id) {
            if (blogs.length > 0) {
                const idUsed = Number(id?.slice(3)) ?? 0;
                setNamePage(blogs[idUsed][id.slice(0, 2) as "es" | "en"].title);
            }
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
        <>
            <Head>
                <title>{namePage}</title>
            </Head>
            <div className={styles.main}>
                <button onClick={handleClick} className={styles.main_button}>
                    {id?.slice(0, 2) == "en" ? "Back" : "Volver"}
                </button>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </>
    );
};

export default BlogPost;
