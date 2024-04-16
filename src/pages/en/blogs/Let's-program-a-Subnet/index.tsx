import Title from '@/components/title/Title';
import React from 'react';
import styles from "@/styles/LetsProgramSubnet.module.css";
import Navigation from '@/components/navigation/Navigation';
import PageContent from '@/components/pageContent/PageContent';
import Subtitle from '@/components/subtitle/Subtitle';
import CommandBlock from '@/components/CommandBlock/CommandBlock';
import Link from 'next/link';
import Image from 'next/image';

const ProgramemosUnaSubnet: React.FC = () => {
    return (
        <PageContent>
            <div className={styles.container}>
                <article className={styles.description}>
                    <div className={styles.content}>
                        <Title title='Let&apos;s Program a Subnet' />
                        <p>
                            Next, we are going to create, deploy, and use a subnet locally with our core wallet and Metamask, in order to deploy code using Remix and Hardhat.

                        </p>
                        <br />
                        <Subtitle title='Installation of Requirements' id='installation-of-requirements' />
                        <p>
                            To begin with this, we need to install the Avalanche CLI in our terminal, but first, we must ask ourselves, what operating system do we have?
                        </p>
                        <br />
                        <Subtitle title='Linux' id='linux' />
                        <p>
                            For this operating system, we need to open a terminal and copy the following:
                        </p>
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                <CommandBlock command='curl -sSfL https://raw.githubusercontent.com/ava-labs/avalanche-cli/main/scripts/install.sh | sh -s' />
                            </li>
                            <li>
                                <CommandBlock command='export PATH=~/bin:$PATH' />
                            </li>
                            <li>
                                <CommandBlock command='export PATH=~/bin:$PATH >> .bashrc' />
                            </li>
                        </ol>
                        <p>
                            Now let&apos;s understand what happened?.

                        </p>
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                In step <b>1</b> we downloaded and installed the binary file we need to use Avalanche CLI in our terminal.
                            </li>
                            <li>
                                In step <b>2</b> we exported this path so we can call our binary file from any path in our terminal (Note: The code works as is if we are
                                in the root path in the terminal. How do we know that? Because our terminal starts like this:
                                <span className={styles.span}> usuario@perfil:$</span>, if we were in a path, the path would be observed after the
                                <span className={styles.span}> ~</span> symbol and before the <span className={styles.span}> $</span> symbol like this <span className={styles.span}> usuario@perfil:/myfolder$</span>).
                            </li>
                            <li>
                                Now it&apos;s set up, but we don&apos;t want to have to export this every time, so we add it to a file that is executed when opening the terminal, in this case, our terminal runs
                                <span className={styles.span}> bash</span> so the code is sent to the <span className={styles.span}> .bashrc</span>, file, if our terminal runs
                                <span className={styles.span}> zsh</span> we must send the code to <span className={styles.span}> .zshrc</span>, now you may wonder if you are not sure which one your PC uses, no problem, type
                                <span className={styles.span}> cat .bashrc</span> if this shows something, your terminal uses <span className={styles.span}> bash</span>, in my case when I do it, I receive the contents of the file, and when running
                                <span className={styles.span}> cat .zshrc</span> I receive this: <span className={styles.span}> cat: .zshrc: No such file or directory</span> which means my terminal uses <span className={styles.span}>bash </span>
                                instead of <span className={styles.span}> zsh</span>.
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Windows' id='windows' />
                        <p>
                            Being honest with you, everything above that works on Linux, I did it all from Windows, so you can be sure that here we can also use Avalanche CLI. However, instead of using any terminal, we need to go to the
                            <span className={styles.span}> microsoft store</span> and download <span className={styles.span}>Ubuntu</span> This will create a small partition that will give us a workspace with the
                            <span className={styles.span}> Ubuntu</span> distribution of <span className={styles.span}>Linux</span> which brings us back to the previous step. By typing the word
                            <span className={styles.span}> Ubuntu</span> in our search bar, it will show us a terminal. When we open it, we&apos;ll be right about to start step <b>1</b> of the Linux example, so needless to say, what follows is to
                            follow steps 1, 2, and 3 described for <b>Linux</b>.
                        </p>
                        <br />
                        <Subtitle title='MAC' id='mac' />
                        <p>
                            Go to the official Avalanche academy in the section
                            <Link href="https://academy.avax.network/?msg=not-logged-in" target="_blank" className={styles.link}> Install Avalanche CLI en MacOs</Link>.
                        </p>
                        <br />
                        <Subtitle title='Subnet Creation' id='subnet-creation' />
                        <p>
                            Let&apos;s start by creating a basic subnet. For this, we need to have our terminal open (Windows users, remember to have the <b>Ubuntu</b> terminal open), now, let&apos;s execute the following command:
                            <span className={styles.span}> avalanche subnet create testNet</span>, pero ¿Qué significa esto?
                        </p>
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                <b>avalanche:</b> We&apos;re instructing the terminal to utilize the Avalanche
                                CLI. It&apos;s akin to python, python3, node, npx, etc., but in this case, we&apos;re
                                opting for Avalanche CLI.
                            </li>
                            <li>
                                <b>subnet:</b>  We&apos;re specifying the type of process we want to invoke, in
                                this instance, a subnet (we&apos;ll explore others later).
                            </li>
                            <li>
                                <b>create:</b> We&apos;re instructing it to call the create method of the process
                                associated with subnets. It&apos;s akin to treating <b>subnet</b> as a class and
                                invoking <b>subnet.create</b>.
                            </li>
                            <li>
                                <b>testNet:</b> This is the arbitrary name I chose for this subnet. I could
                                have selected pikachu, pikaNet, redRanger, rickPrimeNet, or any other name,
                                but I settled on testNet. In this scenario, following the earlier analogy,
                                it&apos;s like calling <b>subnet.create(&quot;testNet&quot;)</b>.
                            </li>
                        </ol>
                        <p>
                            Now that we grasp this statement, let&apos;s begin.
                        </p>
                        <ol type='i' className={styles.numberedList}>
                            <li>
                                <b>Virtual Machine Selection:</b> Once the command <span className={styles.span}>avalanche subnet create testNet</span>
                                has been executed on the command line, we&apos;ll be prompted to choose
                                between two options: a Subnet that utilizes the Ethereum virtual machine (
                                <b>Subnet-EVM</b>), allowing us to program smart contracts in Solidity and
                                use addresses like 0x... with ease and familiarity; or a custom virtual
                                machine (<b>Custom</b>), which enables us to use another operating system
                                like Rust for our code and requires us to input the path to the genesis
                                block configuration. Since we&apos;re taking the straightforward route, we&apos;ll
                                select <b>Subnet-EVM</b> this time.
                            </li>
                            <li>
                                <b>Chain Identifier Selection for the Subnet:</b> The concept of <b>chainId</b> might seem a bit confusing at first,
                                but it&apos;s nothing too complicated; it&apos;s just like our identification number. Every blockchain has one, and it&apos;s
                                important not to duplicate it, as it would be awkward if someone shared your
                                same identification number. Also, sharing the same identification number in
                                the blockchain universe can cause confusion. To ensure we don&apos;t repeat, we
                                consult the unique registry of blockchain identification documents (I made
                                up that name) at <Link href="https://chainlist.org/" target='_blank' className={styles.link}><b>https://chainlist.org </b></Link>
                                We specify that we want to include documents for both adults and minors (meaning including Testnets), and then
                                we perform the search. For example, if today is January 27, 2024, I&apos;ll try
                                the number <b>270124</b>, and voila! It&apos;s available. Now, I know I can use <b>270124</b> as a chainId
                                since it won&apos;t collide with another blockchain identification document. Just like this, I can try any other number, and the
                                <Link href="https://chainlist.org" target='_blank' className={styles.link}> <b>https://chainlist.org</b></Link> page will provide me with its availability.
                            </li>
                            <li>
                                <b>Selection of a Symbol for the Native Token:</b> This attribute might seem
                                a bit confusing, but let&apos;s think of the native token like a country&apos;s currency.
                                In my case, I&apos;m writing this from Colombia, where our native token is the <b> Colombian Peso,
                                </b> but it has an alias for quicker identification, which is three letters long,
                                the <b>COP</b>. Similarly, blockchains and subnets can have a long name like
                                Bitcoin and have an associated symbol (BTC), Avax (AVAX), Ether (ETH), Matic
                                (MATIC), etc. So, when it&apos;s time to select a symbol, I&apos;ll choose <b>TNET</b>,
                                which I consider to be an acronym for testNet. I could use anything else like <b>TNT, </b>
                                <b>MYT,</b> <b>ASD,</b> or anything unrelated to the project, but for consistency,
                                I&apos;ll go with <b>TNET.</b>
                            </li>
                            <li>
                                <b>Selection of the Ethereum Virtual Machine Version to Use:</b> Since we&apos;ve
                                decided to use the Ethereum virtual machine as the processing engine, this machine
                                has undergone modifications and improvements over time, resulting in several
                                versions. It&apos;s advisable to try to always use the latest version as it usually
                                has more security patches to protect against common hacking incidents. Therefore,
                                I recommend selecting the option labeled <b>Use latest version.</b>
                            </li>
                            <li>
                                <b>Fee Configuration:</b> This section might seem a bit confusing due to discussing
                                fees and having to select disk capacity, but they go hand in hand. The lower
                                the disk capacity, the less information it can process, making it more costly
                                to process. However, if the virtual machines running the subnet have higher capacity,
                                they can execute more transactions at a lower cost since the hardware is more
                                powerful for this purpose. We can also customize these fees. Since this is our
                                first subnet, I recommend selecting a high-capacity disk that allows processing
                                of 5,000 gas units per second (<b>High disk use / High Throughput 5 thousand gas/s</b>).
                            </li>
                            <li>
                                <b>Funds Distribution:</b> This step is crucial because we&apos;ve chosen a traditional
                                configuration where we need to pay gas to process transactions. This means we
                                need to have tokens of <b>TNET</b> to pay those fees. However, since the <b>TNET</b>
                                token is just about to be created, we don&apos;t have any supplies of it in our
                                wallets yet. Avalanche CLI gives us two options: either we provide 1 million
                                tokens to a default address, from which we&apos;ll later receive the private key to
                                import into our wallet, or we pass one or more public addresses, which will be
                                configured from the genesis block as wallets with balances to pay gas. In this
                                case, I&apos;ll choose the second option since I want to use my trusted account that
                                I use for testing. I&apos;ll copy this address 0x... from core and select the option
                                <b> Customize your airdrop, </b> this will prompt me to enter the address 0x... that
                                will receive the tokens (<b>Address to airdrop to</b>). So, I&apos;ll paste the address 0x...
                                that I obtained from core, followed by hitting the enter key. After this, it will ask me for
                                the amount <b>Amount to airdrop (in AVAX units),</b> that&apos;s because each token
                                has decimals in a clever way, since decimals (0.1) can&apos;t be used, for example,
                                in Solidity. A standard of decimals is defined, and in reality, the unit is given
                                by many zeros. For example, an AVAX is not 1 token, it&apos;s 1 x 10^9 tokens. So
                                saying <b>in AVAX units</b> refers to mentioning how many tokens I want to receive
                                considering that each token will be multiplied by 1 x 10^9. Then, if I write
                                1000000 (1 million), in code, I&apos;ll receive 1 million times 10 to the power of
                                9, but visually I&apos;ll only see 1 million, and the gas will cost fractions of 1,
                                like 0.001 TNET, but we already know that this fraction is fictitious since 0.001
                                TNET is 1 x 10^6 tokens, as they are less than the unit, they appear as decimals,
                                but internally they are more than 1. This is very important when programming
                                smart contracts involving crypto assets like the native token or an ERC20 token
                                because it will be just my account. I&apos;ll say No to the question of whether I
                                would like to airdrop more tokens (<b>Would you like to airdrop more tokens?</b>).
                            </li>
                            <li>
                                <b>Would you like to add a custom precompile to modify the EVM?:</b> This is
                                a more advanced topic that we&apos;ll address at another time. For now, let&apos;s try
                                to understand what we&apos;ve covered so far and finish configuring our virtual machine,
                                so we&apos;ll select No to the question of <b>Advanced: Would you like to add a custom precompile to modify the EVM?</b>
                            </li>
                            <li>
                                <b>Success Message 😎:</b>
                                If everything was configured correctly, we should see the following message: <b>Successfully created subnet configuration</b>
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Viewing My Subnets' id='viewing-my-subnets' />
                        <ol type='i' className={styles.numberedList}>
                            <li>
                                If we want to see the list of subnets we have created on our device, we run the command <span className={styles.span}>avalanche subnet list</span>, which
                                following the analogy we laid out at the beginning is like calling the <b>subnet.list()</b> function from Avalanche CLI, which does not require any input
                                parameters. Calling this will return a table with information such as the subnet name, the chainId, the virtual machine ID (VMID), and other details like
                                the type of virtual machine and its version, as well as whether it comes from a repository or the default one was used.
                            </li>
                            <li>
                                If we want to see detailed information about a specific subnet, we execute the command <span className={styles.span}>avalanche subnet describe testNet</span>, in
                                this case ending with the name of our subnet, in my case, I named it testNet. Following the analogy, it&apos;s equivalent to <b>subnet.describe(&quot;testNet&quot;),</b> as this
                                time it does receive an attribute, which is the name of the subnet we want information about. This will give us <b>details, gas configuration</b> information, <b>airdrops</b>
                                (showing the amount and the receiving address), as well as precompiles, in this case, I see <b>No precompiles set</b> because I didn&apos;t configure any.
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Setting Up a Local Node (Before Deployment)' id='setting-up-a-local-node' />
                        <p>
                            This step is sometimes overlooked, but it&apos;s healthier to perform it to avoid errors in the future. So at this point, we&apos;re going to run the command
                            <span className={styles.span}> avalanche network start</span> to start five nodes on our computer locally. Now, let&apos;s run the command <span className={styles.span}>avalanche network status</span>
                            to see the status of these nodes we just started. We should see the identifier of each node as well as the endpoint used to expose them.
                        </p>
                        <br />
                        <p>Note: Here the class is no longer subnet but network 👀</p>
                        <br />
                        <Subtitle title='Subnet Deployment' id='subnet-deployment' />
                        <p>
                            At this point, we have configured a Subnet and exposed the nodes, everything is set up to start the rocket launch (deployment of our subnet). To do this, we&apos;ll execute the command
                            <span className={styles.span}> avalanche subnet deploy testNet</span> (subnet.deploy(&quot;testnet&quot;))
                        </p>
                        <ol type='I' className={styles.numberedList}>
                            <li>
                                <b>Selection of a network for deployment operation:</b> Here, it&apos;s like selecting
                                an environment. For local testing, which is the purpose of this section, we&apos;ll
                                select the local network.</li>
                            <li>
                                Gathering Important Data: Once the subnet is deployed, it will throw a bunch of information at us, but what&apos;s really important from all of this?
                                <ol type='i' className={styles.numberedList}>
                                    <li>
                                        <b>RPC URL:</b>
                                        Remote Procedure Call URL, remember that the blockchain is
                                        not a webpage, it&apos;s a cryptographic storage and communication standard with
                                        gamification among devices; that is, a group of devices agree on how to add
                                        information and communicate it to each other, receiving a benefit for doing
                                        so in the expected manner. These devices are our gateway to reading or adding
                                        information, so we must send our read or write request to them. Only authorized
                                        nodes can interact. An <b>RPC</b> is like an API that we can write to, using
                                        web2 architecture with web3 world information.
                                    </li>
                                    <li>
                                        <b>Funded address:</b> The address with the funds is our test address, we verify it.
                                    </li>
                                    <li>
                                        <b>Network name:</b> We verify that it says <b>testNet</b> or the name we gave it.
                                    </li>
                                    <li>
                                        <b>Chain ID:</b> We verify that it is the one we chose, in my case it&apos;s <b>270124</b>
                                    </li>
                                    <li>
                                        <b>Currency Symbol:</b> We verify that it&apos;s our acronym  <b>TNET</b>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Importing the Subnet into Core' id='importing-the-subnet-into-core' />
                        <p>
                            To import a blockchain, in this case a subnet, we must be clear about the final points from the previous step,
                            such as the RPC, the chainId, etc., with these in hand, we&apos;ll continue with the following:
                        </p>
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                Open the core wallet as a browser extension or on our mobile device.
                            </li>
                            <li>
                                Click on the dropdown list at the top right, which has the Avalanche logo.
                            </li>
                            <Image
                                src={"/assets/blogs/networkList.png"}
                                alt='networkList'
                                height={50}
                                width={380}
                            />
                            <br />
                            <br />
                            <li>
                                Click on the last option with an icon of a gear, which is Manage Networks.
                            </li>
                            <li>
                                Click on the + icon on the right.
                            </li>
                            <Image
                                src={"/assets/blogs/newNetwork.png"}
                                alt='newNetwork'
                                height={50}
                                width={380}
                            />
                            <br />
                            <br />
                            <li>
                                Once here, it will ask for:
                                <ol type='a' className={styles.numberedList}>
                                    <li>
                                        <b>RPC URL:</b> <i>http://127.0.0.1:9650/ext/bc/27J…wEH/rpc</i> (Nuesto RPC).
                                    </li>
                                    <li>
                                        <b>Network Name:</b> testNet.
                                    </li>
                                    <li>
                                        <b>Chain ID:</b> 270124.
                                    </li>
                                    <li>
                                        <b>Network Token Symbol:</b> TNET
                                    </li>
                                    <li>
                                        <b>Network Token Name:</b> TestNet coin (Name others will see for the token)
                                    </li>
                                    Leave the rest blank for now, then click <b>Save.</b>
                                </ol>
                                <br />
                                <li>
                                    Once the network is added, click on it, and in the main section of the wallet, we
                                    should see something like this:
                                </li>
                                <Image
                                    src={"/assets/blogs/testNet.png"}
                                    alt='testNet'
                                    height={300}
                                    width={380}
                                />
                                <br />
                                <br />
                                If we&apos;ve reached this point, congratulations! We now have our subnet in our core wallet,
                                and we can use it to deploy smart contracts in
                                <Link href="https://remix.ethereum.org" target='_blank' rel="noopener noreferrer" className={styles.link}>
                                    <b> Remix.</b>
                                </Link>
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Importing the Subnet into Metamask' id='importing-the-subnet-into-metamask' />
                        <p>
                            To import a blockchain, in this case, a subnet, we must be clear about the final points from the previous step,
                            such as the RPC, the chainId, etc. With these in hand, we&apos;ll continue with the following:
                        </p>
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                Open the Metamask wallet as a browser extension or on our mobile device.
                            </li>
                            <li>
                                Click on the dropdown list at the top left in our web extension or at the top center in the mobile application.
                            </li>
                            <Image
                                src={"/assets/blogs/networkListMeta.png"}
                                alt='networkListMeta'
                                height={60}
                                width={300}
                            />
                            <br />
                            <br />
                            <li>
                                Once the menu is open, click on Add Network.
                            </li>
                            <Image
                                src={"/assets/blogs/newNetworkMeta.png"}
                                alt='newNetworkMeta'
                                height={600}
                                width={350}
                            />
                            <br />
                            <br />
                            <li>
                                This will open a new tab; here, click on <b>Add a network manually</b>.
                            </li>
                            <Image
                                src={"/assets/blogs/addNetworkManually.png"}
                                alt='addNetworkManually'
                                height={600}
                                width={600}
                            />
                            <br />
                            <br />
                            <li>
                                It will ask for the following:
                                <ol type='a' className={styles.numberedList}>
                                    <li>
                                        <b>Network Name:</b> testNet
                                    </li>
                                    <li>
                                        <b>New RPC URL:</b> <i>http://127.0.0.1:9650/ext/bc/27J…wEH/rpc</i> (Our RPC)
                                    </li>
                                    <li>
                                        <b>Chain ID:</b> 270124.
                                    </li>
                                    <li>
                                        <b>Currency Symbol:</b> TNET
                                    </li>
                                    Then, click on <b>Save</b>, followed by seeing the following message:
                                </ol>
                                <br />
                                <Image
                                    src={"/assets/blogs/saveMeta.png"}
                                    alt='saveMeta'
                                    height={300}
                                    width={300}
                                />
                            </li>
                            <li>
                                Click on Switch to testNet, and you&apos;ll see the following:
                            </li>
                            <Image
                                src={"/assets/blogs/switchToTestNet.png"}
                                alt='switchToTestNet'
                                height={450}
                                width={700}
                            />
                        </ol>
                        <br />
                        <br />
                        <p>
                            In this case, I don&apos;t have tokens because the address is different from the one I
                            received airdrops on, but I can send tokens from my core account to use Metamask, or
                            I could have added this address as the recipient when creating the subnet. In any
                            case, I now have my subnet added to my core and Metamask wallets.

                        </p>
                        <br />
                        <Subtitle title='Stopping the Running Nodes' id='stopping-the-running-nodes' />
                        <p>
                            Sometimes we close the terminal and think we&apos;ve closed everything, but the
                            process continues to run the nodes in the background. To stop them, we can
                            check if they are running with <span className={styles.span}>avalanche network status </span>
                            and then stop them with <span className={styles.span}>avalanche network stop</span>,
                            or stop them from the beginning, as you prefer.
                        </p>
                        <br />
                        <Subtitle title='restarting-the-previously-deployed-nodes-and-subnets' id='restarting-the-previously-deployed-nodes-and-subnets' />
                        <p>
                            To restart the stopped nodes, we execute the command <span className={styles.span}>avalanche network start</span>
                        </p>
                        <br />
                        <Subtitle title='Deleting Deployed Subnets from the Nodes' id='deleting-deployed-subnets-from-the-nodes' />
                        <p>
                            To remove the state of the subnets from the nodes, we must run the command <span className={styles.span}>avalanche network clean</span>,
                            thereby cleaning the local node deployments.
                        </p>
                        <br />
                        <Subtitle title='Deleting the Subnet' id='deleting-the-subnet' />
                        <p>
                            If we want to permanently delete the configuration we made for our subnet, we execute the following command
                            <span className={styles.span}> avalanche subnet delete testNet</span> ending the existence of our subnet <span className={styles.span}>testNet </span>
                            on our device 😢
                        </p>
                        <p>
                            Now, there are occasions where we want to access digital assets or information that are on another subnet or another blockchain like the C - Chain.
                            For example, to leverage the properties of an NFT in a project on the main net and provide benefits in our new subnet. For such cases, the Avalanche
                            team is developing a technology, which we have in Beta and can start testing right away. This technology allows us to communicate between the
                            Dispatch (D), Echo (E) subnets, and the C-Chain. This technology is called Teleporter.

                        </p>
                    </div>
                    <Navigation />
                </article>
            </div>
        </PageContent>
    );
};

export default ProgramemosUnaSubnet;
