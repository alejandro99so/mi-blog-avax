import type { NextPage } from "next";
import BlogCard from "../components/BlogCard";
import styles from "../styles/Home.module.css";
import blogs from "../utils/content.json";
import Image from "next/image";
import Head from "next/head";
import LanguageSelector from "@/components/language";
import { useEffect, useState } from "react";
import text from "@/utils/text.json";

const Home: NextPage = () => {
    const handleOnClick = () => {
        window.open("https://twitter.com/avaxcolombia", "_blank");
    };
    const [lang, setLang] = useState("");
    const updateLanguage = (code: string) => {
        setLang(code);
    };

    useEffect(() => {
        console.log({ lang });
    }, [lang]);
    return (
        <>
            <Head>
                <title>
                    {text?.avax_blog[lang != "" ? (lang as "en" | "es") : "es"]}
                </title>
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
                    <h1>
                        {
                            text?.avax_guide[
                                lang != "" ? (lang as "en" | "es") : "es"
                            ]
                        }
                    </h1>
                    <LanguageSelector updateLanguage={updateLanguage} />
                </div>
                {lang != "" && (
                    <div>
                        <div className={styles.background}>
                            <div className={styles.grid}>
                                {blogs.map((blog, index: number) => (
                                    <BlogCard
                                        key={index}
                                        lang={lang}
                                        id={`${lang}_${String(index)}`}
                                        title={blog[lang as "es" | "en"]?.title}
                                        summary={
                                            blog[lang as "es" | "en"].summary
                                        }
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
                                👋{" "}
                                <b>
                                    {" "}
                                    {
                                        text?.summary_bold[
                                            lang != ""
                                                ? (lang as "en" | "es")
                                                : "es"
                                        ]
                                    }
                                </b>{" "}
                                -{" "}
                                {
                                    text?.summary_normal[
                                        lang != ""
                                            ? (lang as "en" | "es")
                                            : "es"
                                    ]
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
