import BlogCard from "../blogCard/BlogCard";
import styles from "./body.module.css";

interface BodyProps {
    lang: string;
    blogs: any[];
}

const Body: React.FC<BodyProps> = ({ lang, blogs }) => (
    <div className={styles.container}>
        <div className={styles.grid}>
            {blogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    lang={lang}
                    path={blog[lang].path}
                    title={blog[lang]?.title}
                    summary={blog[lang].summary}
                    backgroundImage={blog[lang]?.backgroundImage}
                />
            ))}
        </div>
    </div>
);

export default Body;