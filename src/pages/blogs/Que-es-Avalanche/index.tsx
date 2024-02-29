import Title from '@/components/title/Title';
import React from 'react';
import styles from "./styles.module.css"
import Navigation from '@/components/navigation/Navigation';
import PageContent from '@/components/pageContent/PageContent';

const QueEsAvalanche: React.FC = () => {
    return (
        <PageContent>
            <div className={styles.container}>
                <hr className={styles.border} />
                <article className={styles.description}>
                    <div className={styles.content}>
                        <Title title='¿Qué es Avalanche?' />
                        <p>
                            Avalanche es una Blockchain que según la página oficial de <b>Avalanche</b> se describe como:
                        </p>
                        <p className={styles.quote}>
                            Construye lo que quieras, de la forma que quieras en la cadena de bloques escalable y ultrarrápida que no te defraudará.
                            Elegir la cadena de bloques incorrecta puede acabar con su DApp antes de que tenga la oportunidad de tener éxito, pero
                            no tiene por qué ser así. Lánzate con confianza en Avalanche.
                        </p>
                        <p>
                            Por lo que, si tenemos en mente esta premisa, podemos esperar encontrar algo que nos permita llegar a esa anhelada escalabilidad
                            ultrarrápida, y si, Avalanche nos ofrece una tecnología llamada Subnets, la cual promete ser la solución a los problemas de
                            escalabilidad de los proyectos modernos y mucho más.
                        </p>
                    </div>
                    <Navigation />
                </article>
            </div>
        </PageContent>
    );
};

export default QueEsAvalanche;
