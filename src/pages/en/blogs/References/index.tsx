import Title from '@/components/title/Title';
import React from 'react';
import styles from "@/styles/References.module.css"
import Navigation from '@/components/navigation/Navigation';
import PageContent from '@/components/pageContent/PageContent';
import Link from 'next/link';

const Referencias: React.FC = () => {
    return (
        <PageContent>
            <div className={styles.container}>

                <article className={styles.description}>
                    <div className={styles.content}>
                        <Title title='Referencias' />
                        <p>
                            All the foundations to build this blog were obtained from the <b>DApps between subnets with Teleporter</b> course from the Avalanche Academy
                            <Link href="https://academy.avax.network/start" className={styles.link}> (https://academy.avax.network/start)</Link> and from the official Avalanche documentation
                            <Link href="https://docs.avax.network/es/build/subnet" className={styles.link}> (https://docs.avax.network/es/build/subnet)</Link>.
                        </p>

                    </div>
                    <Navigation />
                </article>
            </div>
        </PageContent>
    );
};

export default Referencias;
