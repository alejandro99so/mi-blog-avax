import Title from '@/components/title/Title';
import React from 'react';
import Navigation from '@/components/navigation/Navigation';
import PageContent from '@/components/pageContent/PageContent';
import Link from 'next/link';
import Image from 'next/image';
import Subtitle from '@/components/subtitle/Subtitle';
import CommandBlock from '@/components/CommandBlock/CommandBlock';
import CodeBlock from '@/components/CodeBlock/CodeBlock';
import styles from "@/styles/Teleporter.module.css";
import { TeleporterMessageInput, SenderOnCChainWithRegistry, ReceiverOnDispatchWithRegistry } from '@/utils/data/code';

const Teleporter: React.FC = () => {
    return (
        <PageContent>
            <div className={styles.container}>

                <article className={styles.description}>
                    <div className={styles.content}>
                        <Title title='Teleporter' />
                        <p>
                            This technology allows us to communicate between one Blockchain and another, in this case between one subnet and another.
                            For now, it&apos;s available between the Dispatch (D), Echo (E), and C-Chain subnets. If we want to use these networks, it&apos;s
                            crucial to have the native tokens. We can request them from the official Avalanche faucet by clicking
                            <Link href="https://core.app/tools/testnet-faucet/?subnet=dispatch&token=dispatch" target='_blank' className={styles.link}> <b>aquí para Dispatch</b></Link>,
                            <Link href="https://core.app/tools/testnet-faucet/?subnet=echo&token=echo" target='_blank' className={styles.link}> <b>aquí para Echo</b></Link> y
                            <Link href="https://core.app/tools/testnet-faucet/?subnet=c&token=c" target='_blank' className={styles.link}> <b>aquí para C-Chain</b></Link>;
                            In addition to the native tokens, it&apos;s important to have TP Tokens, which are used to access this service. We can find them at
                            <Link href="https://ohmywarp.com/mint" target='_blank' className={styles.link}> <b>https://ohmywarp.com/mint</b></Link>.
                            At the moment, we can only mint TP for C-Chain, but we can later bridge them and send TP to the other two networks.
                        </p>
                        <br />
                        <p>
                            Once we have tokens in the respective networks, we can ask ourselves the question: How do we send information from a contract on the source network
                            to a contract on the destination network?
                        </p>
                        <br />
                        <p>
                            To answer this question, we must understand what it means to send information from one network to another. Let&apos;s imagine the following scenario:
                        </p>
                        <div className={styles.containerImages}>
                            <div className={styles.containerImage}>
                                <Image
                                    src="/assets/blogs/amplify.png"
                                    alt="amplify"
                                    width={300}
                                    height={300}
                                />
                                <p className={styles.network}>Source network</p>
                            </div>
                            <div className={styles.containerImage}>
                                <Image
                                    src="/assets/blogs/bulletin.png"
                                    alt="bulletin"
                                    width={300}
                                    height={300}
                                />
                                <p className={styles.network}>Destination network</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <p>
                            Two different subnets that are technically isolated, each with information about their own state and without information about the state of the other,
                            in this case, there must be an entity outside of the subnets listening to information from somewhere and processing that information, sending it from
                            the source subnet to the destination subnet when a certain condition is met.

                        </p>
                        <div className={styles.containerImage}>
                            <Image
                                src="/assets/blogs/twoSubnet.png"
                                alt="twoSubnet"
                                width={300}
                                height={300}
                            />
                        </div>
                        <br />
                        <br />
                        <p>
                            That entity outside of the blockchain is called a <b>Relayer</b>, and it&apos;s responsible for listening to information coming from a special contract on
                            the source network, validating its truthfulness and that of the validators on that network, and then sending that message to the destination network. This
                            involves something more technically complex, but <b>Teleporter</b> allows us to simplify it to that extent, making the process of sending information between
                            two subnets much easier.
                        </p>
                        <br />
                        <p>
                            Now let&apos;s see technically what we need to know to be able to send these messages and receive them correctly.
                        </p>
                        <br />
                        <Subtitle title='Teleporter Contracts' id='teleporter-contracts' />
                        <p>
                            To start, we need to understand that in this process of sending and receiving information, we must make use of four contracts that can be found in the official repository of
                            <Link href="https://github.com/ava-labs/teleporter/tree/main/contracts/src/Teleporter" target='_blank' className={styles.link}> <b>ava-labs</b></Link>. One is the contract
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}> ITeleporterMessenger.sol</Link>,
                            another is the contract <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol" target='_blank' className={styles.link}> ITeleporterReceiver.sol</Link>.
                            Both are important in our process of sending and receiving information between subnets, as we will use some functions and interfaces from them.
                        </p>
                        <br />
                        <p>
                            The other two were recently added in an update called Durango, which are <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry </Link>
                            and IWarpMessenger, referenced in <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry </Link>
                            and they are used to handle versioning of the Teleporter contracts on each network.
                        </p>
                        <br />
                        <Subtitle title='Information Output Implementation' id='information-output-implementation' />
                        <p>
                            A contract that will send information from a source subnet to a destination subnet must import the contract <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}>ITeleporterMessenger.sol</Link>,
                            which will allow it to make use of this interface, and thus its methods, among which there is one called <span className={styles.span}>sendCrossChainMessage</span>.
                        </p>
                        <br />
                        <p>
                            Furthermore, it must import the contract <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry</Link>, to have access to the version of Teleporter it will use.
                        </p>
                        <br />
                        <p>
                            If we think for a moment, we are accessing a contract and calling a function from it, which implies that a contract must exist previously deployed in the subnet we are using as the source of information, and this contract must literally have the code that appears in
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}> ITeleporterMessenger.sol</Link>.
                            This is one of the reasons why we will limit testing for now to the three subnets mentioned at the beginning of this section.
                        </p>
                        <br />
                        <Subtitle title='Instance' id='instance' />
                        <p>
                            Now, with the above in mind and being aware of what we are doing, we can say that we must define an instance of the TeleporterRegistry contract in our contract to access its methods and the versions of TeleporterMessenger. For that, we must give it the address at which said contract was
                            previously deployed, in our source subnet, this contract is deployed at the address: <span className={styles.span}>0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span>
                            so an instance is summarized by writing the following line of code:
                        </p>
                        <br />
                        <CommandBlock command='TeleporterRegistry public immutable teleporterRegistry = TeleporterRegistry(0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b);' />
                        <br />
                        <p>
                            In other words, a public, immutable variable of type <span className={styles.span}>TeleporterRegistry</span> coming from the importation of the repository
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry</Link>,
                            named teleporterRegistry, which is equal to an instance of <span className={styles.span}>TeleporterRegistry</span>, at the address <span className={styles.span}>0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span>.
                        </p>
                        <br />
                        <p>
                            Now we instantiate our teleporterMessenger like this:
                        </p>
                        <br />
                        <CommandBlock command='ITeleporterMessenger teleporterMessenger = teleporterRegistry.getLatestTeleporter();' />
                        <br />
                        <Subtitle title='Information Transmission' id='information-transmission' />
                        <p>
                            To send the information, we can simply call the instance we have in our contract of the contract
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}> ITeleporterMessenger.sol</Link>,
                            and call the method <span className={styles.span}>sendCrossChainMessage</span>, when doing so we must send the following:
                        </p>
                        <br />
                        <CodeBlock code={TeleporterMessageInput} />
                        <br />
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                <b>destinationBlockchainID</b> is the identifier of the subnet that will receive
                                the message within the Avalanche P-Chain, which in the case
                                of <b>Dispatch</b> is <span className={styles.span}>0x9f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7</span> in the case
                                of <b>C-Chain</b> is <span className={styles.span}>0x7fc93d85c6d62c5b2ac0b519c87010ea5294012d1e407030d6acd0021cac10d5</span> and in the case
                                of <b>Echo</b> is <span className={styles.span}>0x1278d1be4b987e847be3465940eb5066c4604a7fbd6e086900823597d81af4c1</span>
                            </li>
                            <li>
                                <b>destinationAddress</b> is the address of the contract that will receive the
                                message in the destination subnet, i.e., the address of the receiving contract.
                            </li>
                            <li>
                                <b>feeInfo</b> contains the information of the ERC20 address and the amount that
                                will be paid as an incentive to the Relayer for their work, in the test cases
                                of the mentioned networks there is a public Relayer, so there is no need to send
                                an incentive to these, that&apos;s why we define an address of 0 and an amount of 0
                                (This will be very important as it plays a key role as the incentive for the entities
                                that send the information between subnets).
                            </li>
                            <li>
                                <b>requiredGasLimit</b>  is the required gas limit to execute the transaction,
                                if not defined the relayer can send the transaction with less gas and still receive
                                the reward regardless of whether the message is delivered to the destination subnet
                                or not.
                            </li>
                            <li>
                                <b>allowedRelayerAddresses</b> is a whitelist of addresses that can serve as Relayers
                                to send information from our network to the destination network, if it is empty
                                as in our example it indicates that anyone can take the request, process it, and
                                receive the reward, in the case of two private subnets with sensitive information,
                                a trusted relayer can be defined who can relay the information without exposing
                                it outside of a geographic boundary or a company.
                            </li>
                            <li>
                                <b>message</b> is the message being sent in bytes format, to do this we can make
                                use of the <b>abi.encode()</b> function, an example when sending two numbers,
                                <span className={styles.span}>num1</span> and <span className={styles.span}>num2</span> is as follows
                            </li>
                            <CommandBlock command='bytes memory message = abi.encode(num1,num2);' />
                            <br />
                            <p>where the variable <span className={styles.span}>message</span> is in the appropriate format to be sent.
                            </p>
                        </ol>
                        <br />
                        <Subtitle title='Code Example' id='code-example' />
                        <p>
                            Below, we&apos; ll see an example of code that sends information from the C-Chain subnet to the Dispatch subnet.
                        </p>
                        <br />
                        <CodeBlock code={SenderOnCChainWithRegistry} />
                        <br />
                        <p>
                            In the previous example code, a text is sent to a contract in the Dispatch subnet. The function <span className={styles.span}>sendMessage</span>
                            is responsible for receiving the address of the contract in Dispatch and the message to be sent. With this information, an event is emitted with
                            the information of the contract address in Dispatch, the identifier of that subnet in the P-Chain, a reward for the Relayer who takes the transaction,
                            instructions on how much gas can be spent, a list of Relayers that can execute it (In this example it is zero so anyone can take it), and the message in bytes.
                        </p>
                        <br />
                        <p>
                            At this point, a relayer automatically takes the request and performs the necessary validations, sending the message to the destination subnet.
                        </p>
                        <br />
                        <Subtitle title='Implementation of Information Reception' id='implementation-of-information-reception' />
                        <p>
                            A contract that will receive the information in a destination subnet from an origin subnet must import the contracts of
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}> ITeleporterMessenger.sol</Link>,
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol" target='_blank' className={styles.link}> ITeleporterReceiver.sol</Link> and
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}> TeleporterRegistry</Link>.
                            By doing so, it will be able to instantiate the contract of <span className={styles.span}>ITeleporterMessenger</span> and validate who is trying to call its methods, and the most important
                            function in this case, the once it confirms that everything is correct and it can send the message. This function delivers to this contract in the destination subnet the id of the origin
                            chain of the message in the P-Chain, the address of the contract that sent the message in the origin chain, and the message they sent.
                        </p>
                        <br />
                        <p>
                            If we break the fourth wall again and become aware without going on autopilot through the world, we will realize that in this subnet there must also have been deployed a contract of
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}> ITeleporterMessenger.sol</Link> and
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}> TeleporterRegistry</Link>,
                            and coincidentally the address of this contract is the same as in the <span className={styles.span}>C-Chain: 0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span>. Well, nothing is a coincidence,
                            it has to do with the wallet used for deployment, but we&apos;ll talk about that another time.
                        </p>
                        <br />
                        <Subtitle title='Instance' id='instance' />
                        <p>
                            With the above in mind and being aware again of what we are doing, we can say that we must define an instance of that contract in our contract to be able to access its methods, and for that,
                            we must give it the address at which said contract was previously deployed, in our destination subnet, this contract is deployed at the address: <span className={styles.span}> 0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span>
                            so an instance is summarized in writing the following line of code:
                        </p>
                        <br />
                        <CommandBlock command='TeleporterRegistry public immutable teleporterRegistry = TeleporterRegistry(0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b);' />
                        <br />
                        <p>
                            That is, a publica and immutable variable of type <span className={styles.span}>TeleporterRegistry</span> coming from the import of the repository of
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}> TeleporterRegistry</Link>, named teleporterRegistry,
                            which is equal to an instance of  <span className={styles.span}>TeleporterRegistry</span> at the address <span className={styles.span}>0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span>.
                        </p>
                        <br />
                        <p>
                            Now, we instantiate our teleporterMessenger like this:
                        </p>
                        <br />
                        <CommandBlock command='ITeleporterMessenger teleporterMessenger = teleporterRegistry.getLatestTeleporter();' />
                        <br />
                        <Subtitle title='Information Reception' id='information-reception' />
                        <p>
                            To receive the information, we can simply call the function <span className={styles.span}>receiveTeleporterMessage</span> from the
                            <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol" target='_blank' className={styles.link}> ITeleporterReceiver.sol</Link> contract, and use the variables
                            <span className={styles.span}> originChainID</span>, <span className={styles.spna}>originSenderAddress</span>, and <span className={styles.span}>message</span>
                        </p>
                        <br />
                        <p>
                            Let&apos;s consciously think for a moment again, we are accessing functions of a code, how is this possible? This is thanks to inheritance, therefore our contract must inherit from
                            <span className={styles.span}> ITeleporterReceiver</span>, for this the contract must be created as follows:
                        </p>
                        <br />
                        <CommandBlock command='contract ReceiveMessageOnDispatch is ITeleporterReceiver {...}' />
                        <br />
                        <p>
                            With this, we ensure that we can use the functions of ITeleporterReceiver, functions such as <span className={styles.span}>receiveTeleporterMessage</span>.
                        </p>
                        <br />
                        <p>
                            Once we have the information and validate that it comes from a Relayer and from another blockchain and is not called by a user from a block explorer or from another contract, it&apos;s time to see the message,
                            and for that, we must convert from <span className={styles.span}>bytes</span> to our original type, in our example some <span className={styles.span}>uint256</span>, for this, we can access the variables as follows:
                        </p>
                        <br />
                        <CommandBlock command='lastMessage = abi.decode(message, (string));' />
                        <br />
                        <p>
                            With the above line, we&apos;re telling our code to create a local variable of type
                            <span className={styles.span}>string</span>
                            and its value will be obtained after going through a <span className={styles.span}>decoding</span> process of the received message.
                        </p>
                        <br />
                        <p>
                            After this, we can process the <span className={styles.span}>lastMessage</span> variables as we want in the functions we want.
                        </p>
                        <br />
                        <Subtitle title='Code Example' id='code-example' />
                        <p>
                            Below, we&apos;ll see an example of code of a contract that is receiving a message in Dispatch from C-Chain.
                        </p>
                        <br />
                        <CodeBlock code={ReceiverOnDispatchWithRegistry} />
                        <br />
                        <p>
                            In the previous code, we can see how the <span className={styles.span}>receiveTeleporterMessage</span>
                            function is responsible for receiving the message, validating its origin, and executing logic based on what is received.
                            This logic modifies the state of the variables in the contract, making it easy to validate if our connection between the subnets was executed correctly.
                        </p>
                        <br />
                        <Subtitle title='Conclusion' id='conclusion' />
                        <p>
                            After reviewing each contract in detail, we can conclude that sending information between subnets using Teleporter requires an emitting contract that
                            instantiates a Teleporter contract in the source subnet and a receiving contract that inherits from a Teleporter contract and instantiates another in
                            the destination subnet. Furthermore, we know that messages are sent in bytes, so it is essential to perform <b>encode</b> and <b>decode</b> operations,
                            both in the source and destination networks respectively.
                        </p>
                        <br />
                        <p>
                            Once we have the information, the sky&apos;s the limit, as we can send any type of data and logic between one network and another. I invite you to contribute to this
                            <Link href="https://github.com/alejandro99so/teleporter" target="_blank" rel="noopener noreferrer" className={styles.link}> <b>proyecto</b></Link>
                            created by me, where there is an example of a teleporter contract, somewhat decoupling the sending of information and the reception with proxy contracts,
                            using Hardhat with TypeScript. There, you can increase the complexity of the example, and we will build more interesting structures to learn together.
                        </p>
                    </div>
                    <Navigation />
                </article>
            </div>
        </PageContent>
    );
};

export default Teleporter;

