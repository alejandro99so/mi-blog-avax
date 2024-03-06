import Title from '@/components/title/Title';
import React from 'react';
import styles from "@/styles/WhatIsAvalanche.module.css"
import Navigation from '@/components/navigation/Navigation';
import PageContent from '@/components/pageContent/PageContent';

const QueEsAvalanche: React.FC = () => {
    return (
        <PageContent>
            <div className={styles.container}>

                <article className={styles.description}>
                    <div className={styles.content}>
                        <Title title='What is Avalanche?' />
                        <p>
                            Avalanche is a Blockchain which, according to the official <b>Avalanche</b> website, is described as:
                        </p>
                        <p className={styles.quote}>
                            Build anything you want, any way you want on the lightning fast, scalable
                            blockchain that won’t let you down. Choosing the wrong blockchain can kill
                            your dApp before it ever has a chance to succeed, but it doesn’t have to be
                            this way. Launch with confidence on Avalanche.
                        </p>
                        <p>
                            Therefore, if we keep this premise in mind, we can expect to find something that allows us to achieve that
                            desired ultra-fast scalability. Indeed, Avalanche offers us a technology called Subnets, which promises to
                            be the solution to the scalability issues of modern projects and much more.
                        </p>
                    </div>
                    <Navigation />
                </article>
            </div>
        </PageContent>
    );
};

export default QueEsAvalanche;
