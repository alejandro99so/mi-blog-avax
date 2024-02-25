import type { NextPage } from "next";
import BlogCard from "../components/BlogCard";
import styles from "../styles/Home.module.css";
import blogs from "../utils/content.json";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className={styles.main}>
            <h1>Guia Avalanche</h1>
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
            <div className={styles.footer}>
                <Image
                    src="/images/photo.png"
                    alt="Foto"
                    width={250}
                    height={300}
                />
                <div className={styles.footer_text}>
                    👋 <b>Hola, Soy Alejandro Soto</b> - Un desarrollador de
                    software apasionado por la tecnología, fui y seré su guía en
                    este mundo de aprendizaje en la Blockchain de Avalanche,
                    empezamos por entender los conceptos básicos de interacción
                    entre Subnets e iremos subiendo el nivel para hablar de
                    conceptos más técnicos y avanzados, espero les haya gustado
                    el contenido de esta primera parte y hayan aprendido
                    bastante!
                </div>
            </div>
        </div>
    );
};

export default Home;
