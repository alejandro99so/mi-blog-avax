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
                            Todas las bases para construir este blog fueron obtenidos del curso de <b>DApps entre subredes con Teleporter</b> de la Academia de
                            Avalanche <Link href="https://academy.avax.network/start" className={styles.link}>(https://academy.avax.network/start)</Link> y de la documentación oficial de
                            Avalanche <Link href="https://docs.avax.network/es/build/subnet" className={styles.link}>(https://docs.avax.network/es/build/subnet)</Link>.
                        </p>

                    </div>
                    <Navigation />
                </article>
            </div>
        </PageContent>
    );
};

export default Referencias;
