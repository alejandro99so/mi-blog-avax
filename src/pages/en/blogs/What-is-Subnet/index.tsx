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
                        <Title title='What is a Subnet?' />
                        <p>
                            If we analyze the term &quot;Subnet&quot; literally, we conclude that it consists of two words: &quot;sub&quot; and &quot;net&quot;,
                            which translate to: &quot;sub&quot; meaning below or sharing qualities of something larger; and &quot;net&quot;, which means network.
                            This implies a Blockchain that shares something with another larger one. Now, what exactly is shared?
                        </p>
                        <br />
                        <p>
                            Subnets share the configurations used to build Avalanche&apos;s C-Chain, which is the production Blockchain where Smart Contracts
                            are currently being executed and deployed. Therefore, Avalanche offers the possibility of creating a blockchain that shares
                            he consensus mechanism, programming language for contracts, and all the necessary configurations to have a Blockchain up and running.
                        </p>
                        <br />
                        <p>
                            But it doesn&quot;t stop there, because it also allows us to do the following things:
                        </p>
                        <br />
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                <b>Modify the capacity of the virtual machine</b> processing transactions, allowing
                                us to have more processing power on the blockchain and resulting in a much higher
                                gas limit. This accommodates new projects whose entry into the Blockchain was
                                hindered by the capacity of existing virtual machines.
                            </li>
                            <li>
                                <b>Define a whitelist of users who can interact with the Blockchain</b>,
                                allowing for control over the transactions made on the Blockchain. This is of
                                utmost importance for governmental entities where the entities ensuring trust
                                are often centralized to ensure factors such as confidentiality.
                            </li>
                            <li>
                                <b>Define a whitelist of validators</b>, which is very useful for public
                                entities. It allows blockchain users to safeguard information within a
                                geographical physical boundary, opening up the possibility for public
                                entities to store their data on this new blockchain. This is very important
                                for them as it ensures the confidentiality of information under national
                                borders.
                            </li>
                            <li>
                                <b>Define a type of virtual machine such as EVM or WASM</b>, allowing
                                developers to develop Smart Contracts in languages like Solidity or Rust
                                according to their business model. This gives them a language that adapts
                                more to their needs and is not imposed by a third party.
                            </li>
                            <li>
                                <b>Precompiles in the new blockchains</b>,  this is a more advanced but very
                                interesting topic. It allows the development of some native functions for the
                                new blockchain at a lower level, functions that are optimized like libraries
                                in a traditional programming language. These must be performed before
                                creating the subnet, as it must be factory-configured to access these new
                                native properties.
                            </li>
                            <li>
                                <b>Having its own token</b> is a huge competitive advantage if used wisely, as
                                it decouples the project&apos;s economy and the information traffic it generates from
                                any other network like the C-Chain. This gives the true power of &quot;infinite scalability&quot;,
                                as if this new subnet is configured correctly, it will have the ability to process
                                a lot of information at an insignificant gas price. However, the gas is paid in
                                this new native token that has nothing to do with Avax on the C-Chain, so the
                                project will not affect the price of Avax on the main network. This can be a double-edged
                                sword, if used correctly, it can generate a prosperous economic system, but if
                                not, it can lead the project to disaster. Tokens in projects are similar to coins
                                in countries; they must manage their treasury as if it were their central bank
                                and prevent at all costs their system from becoming that of an economy in crisis
                                like Venezuela or Argentina. This is a delicate and interesting topic to address.
                            </li>
                        </ol>
                        <p>
                            The above are some examples and cases of potential improvements that a subnet can have using
                            Avalanche technology. To learn more about this, I recommend the official
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
