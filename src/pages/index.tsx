import type { NextPage } from "next";
import BlogCard from "../components/BlogCard";
import styles from "../styles/Home.module.css";
import blogs from "../utils/content.json";
import Image from "next/image";
import Head from "next/head";

const Home: NextPage = () => {
    const handleOnClick = () => {
        window.open("https://twitter.com/avaxcolombia", "_blank");
    };
    return (
        <>
            <Head>
                <title>Blog Avax</title>
            </Head>
            <div className={styles.main}>
                <div className={styles.main_title}>
                    <div className={styles.main_title_content}>
                        <Image
                            onClick={handleOnClick}
                            className={styles.main_title_image}
                            src="/images/avaxcolombia.png"
                            alt="avaxcolombia"
                            width={50}
                            height={50}
                        />
                        <span className={styles.main_title_image_tooltipText}>
                            Orgullosamente Colombiano{" "}
                            <Image
                                src="/images/colombia.png"
                                alt="colombia"
                                width={15}
                                height={10}
                            />
                        </span>
                    </div>
                    <h1>Guía Avalanche</h1>
                </div>
                <div className={styles.background}>
                    <div className={styles.grid}>
                        {blogs.map((blog, index: number) => (
                            <BlogCard
                                key={index}
                                id={`blog_${String(index)}`}
                                title={blog["es"].title}
                                summary={blog["es"].summary}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.footer}>
                    <Image
                        src="/images/photo.png"
                        alt="Foto"
                        width={250}
                        height={300}
                    />
                    <div className={styles.footer_text}>
                        👋 <b>Hola, Soy Alejandro Soto</b> - Un desarrollador de
                        software apasionado por la tecnología, fui y seré su
                        guía en este mundo de aprendizaje en la Blockchain de
                        Avalanche, empezamos por entender los conceptos básicos
                        de interacción entre Subnets e iremos subiendo el nivel
                        para hablar de conceptos más técnicos y avanzados,
                        espero les haya gustado el contenido de esta primera
                        parte y hayan aprendido bastante!
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
