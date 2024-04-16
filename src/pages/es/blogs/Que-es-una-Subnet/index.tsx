import Title from '@/components/title/Title';
import React from 'react';
import styles from "@/styles/WhatIsSubnet.module.css"
import Navigation from '@/components/navigation/Navigation';
import PageContent from '@/components/pageContent/PageContent';
import Link from 'next/link';

const QueEsUnaSubnet: React.FC = () => {
    return (
        <PageContent>
            <div className={styles.container}>

                <article className={styles.description}>
                    <div className={styles.content}>
                        <Title title='¿Qué es una Subnet?' />
                        <p>
                            Si traducimos a rajatabla el término “Subnet” llegamos a la conclusión de que son dos palabras “sub” y “net” que traducen: “sub” que está por debajo o que comparte cualidades de algo más grande; y “net”, que significa red; lo que significa una Cadena de bloques que comparte algo con otra más grande, ahora bien, ¿Qué comparte?
                        </p>
                        <br />
                        <p>
                            Las Subnets comparten las configuraciones usadas para construir la C-Chain de Avalanche, es decir la Blockchain de producción donde se están ejecutando y desplegando en la actualidad Contratos Inteligentes, por lo que Avalanche ofrece la posibilidad de crear una blockchain que comparta el mecanismo de consenso, lenguaje de programación para contratos, y todas las configuraciones necesarias para poder tener una Blockchain al aire.
                        </p>
                        <br />
                        <p>
                            Pero esto no se queda ahí, porque también nos permite hacer las siguientes cosas:
                        </p>
                        <br />
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                <b>Modificar la capacidad de la maquina virtual</b> que procesa las transacciones, lo que nos permite tener más procesador en la blockchain y se traduce en un limite de gas mucho mayor, lo que le da cabida a nuevos proyectos cuyo ingreso a la Blockchain estaba frenado por dicha capacidad de las maquinas virtuales existentes.
                            </li>
                            <li>
                                <b>Definir una lista blanca de usuarios que pueden interactuar con la Blockchain</b>, permitiendo así tener un control sobre las transacciones que se realizan en la Blockchain, algo de suma importancia para entidades gubernamentales donde los entes que garantizan la confianza suelen ser centralizados para poder asegurar factores como la confidencialidad.
                            </li>
                            <li>
                                <b>Definir una lista blanca de validades</b>, algo muy útil si de entidades públicas se trata, ya que permite a los usuarios de la blockchain poder salvaguardar la información en alguna frontera fisica geograficamente hablando, abriendo la posibilidad de que entidades públicas guarden sus datos en esta nueva blockchain, algo muy importante para ellos ya que asegura el tema de confidencialidad de la información bajo fronteras nacionales.
                            </li>
                            <li>
                                <b>Definir un tipo de maquina virtual como EVM o WASM</b>, lo que permite a los desarrolladores desarrollar Contratos Inteligentes en lenguajes como Solidity o Rust, según su modelo de negocio, teniendo un lenguaje que se adapta más a sus necesidades y no impuesto de fabrica por un tercero.
                            </li>
                            <li>
                                <b>Los precompilados en las nuevas blockchain</b>, este es un tema un poco más avanzado pero muy interesante, ya que permite desarrollar a más bajo nivel algunas funciones nativas para la nueva blockchain, funciones que están optimizadas como unas librerías en un lenguaje de programación tradicional, se deben realizar antes de crear la subnet, ya que esta debe estar configurada de fabrica para que pueda acceder a estas nuevas propiedades nativas.
                            </li>
                            <li>
                                <b>Tener un token propio</b> es una ventaja competitiva gigante si se sabe aprovechar, ya que se desvincula la economía del proyecto y el trafico de información que este genera con la de cualquier otra red como la C - Chain, lo que da el verdadero poder de “escalabilidad infinita”, ya que si se configura de manera correcta esta nueva subnet, se tendrá la capacidad de procesar mucha pero mucha información a un precio de gas insignificante, pero gas que es pagado en este nuevo token nativo que nada tiene que ver con el Avax de la C - Chain, por lo que dicho proyecto no le hará ni cosquillas al precio de Avax en la red principal, esto puede ser un arma de doble filo, ya que si se aprovecha de la manera correcta puede generar un sistema económico prospero pero sino llevara el proyecto a un desastre, los tokens en los proyectos son similares a las monedas en los paises, deben manejar su tesorería como si fuera su banco central y impedir a toda costa que su sistema se convierta en el de una economía sumida en la crisis como Venezuela o Argentina, este es un tema delicado e interesante de tratar.
                            </li>
                        </ol>
                        <p>
                            Los anteriores son algunos ejemplos y casos de mejoras potenciales que puede tener una subnet usando la tencología de Avalanche, para aprender un poco más de esto, les recomiendo el curso oficial de la
                            <Link href="" target='_blank' rel='noopener noreferrer' className={styles.link}> <b>Academia de Avalanche</b>.</Link>
                        </p>
                    </div>
                    <Navigation />
                </article>
            </div>
        </PageContent>
    );
};

export default QueEsUnaSubnet;
