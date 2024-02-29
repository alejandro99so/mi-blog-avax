import type { NextPage } from "next";
import blogs from "../utils/content.json";
import Head from "next/head";
import Body from "@/components/body/Body";
import { useLang } from "@/context/LangContext";

const Home: NextPage = () => {
    const { lang, text } = useLang();

    return (
        <div>
            <Head>
                <title>
                    {text?.avax_blog[lang != "" ? (lang as "en" | "es") : "es"]}
                </title>
            </Head>
            <div>
                {lang != "" && (
                    <Body lang={lang} blogs={blogs} />
                )}
            </div>
        </div>
    );
};

export default Home;
