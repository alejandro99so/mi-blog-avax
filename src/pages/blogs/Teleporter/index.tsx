import Title from '@/components/title/Title';
import React from 'react';
import styles from "./styles.module.css"
import Navigation from '@/components/navigation/Navigation';
import PageContent from '@/components/pageContent/PageContent';
import Link from 'next/link';
import Image from 'next/image';
import Subtitle from '@/components/subtitle/Subtitle';
import CommandBlock from '@/components/CommandBlock/CommandBlock';
import CodeBlock from '@/components/CodeBlock/CodeBlock';
import { ReceiverOnDispatchWithRegistry, SenderOnCChainWithRegistry, TeleporterMessageInput } from '../../../utils/data/code';

const Teleporter: React.FC = () => {
    return (
        <PageContent>
            <div className={styles.container}>
                <hr className={styles.border} />
                <article className={styles.description}>
                    <div className={styles.content}>
                        <Title title='Teleporter' />
                        <p>
                            Esta tecnología nos permite comunicarnos entre una Blockchain y otra, en este caso entre una subnet y otra, por ahora está disponible
                            entre las subnets de Dispatch (D), Echo (E) y C-Chain; si queremos usar estas redes es muy importante que tengamos los tokens nativos,
                            los cuales los podemos solicitar del faucet oficial de Avalanche haciendo clic <Link href="https://core.app/tools/testnet-faucet/?subnet=dispatch&token=dispatch" target='_blank' className={styles.link}>aquí para Dispatch</Link>,
                            <Link href="https://core.app/tools/testnet-faucet/?subnet=echo&token=echo" target='_blank' className={styles.link}> aquí para Echo</Link> y <Link href="https://core.app/tools/testnet-faucet/?subnet=c&token=c" target='_blank' className={styles.link}> aquí para C-Chain</Link>;
                            adicional a los token nativos, es importante que tengamos Tokens de TP, los cuales son usados para poder usar este servicio, los podemos encontrar en
                            <Link href="https://ohmywarp.com/mint" target='_blank' className={styles.link}> https://ohmywarp.com/mint</Link>, por el momento solo podemos mintear TP para C-Chain, pero podemos hacer luego un bridge y mandar TP a las otras dos redes.
                        </p>
                        <br />
                        <p>
                            Una vez tengamos tokens en las respectivas redes podemos plantearnos la pregunta ¿Cómo mandamos información de un contrato en la red de origen a un contrato en la red de destino?
                        </p>
                        <br />
                        <p>
                            Para responder a esta pregunta debemos entender que significa mandar información de una red a otra, imaginemos lo siguiente
                        </p>
                        <div className={styles.containerImages}>
                            <div className={styles.containerImage}>
                                <Image
                                    src="/assets/blogs/amplify.png"
                                    alt="amplify"
                                    width={300}
                                    height={300}
                                />
                                <p className={styles.network}>Red de origen</p>
                            </div>
                            <div className={styles.containerImage}>
                                <Image
                                    src="/assets/blogs/bulletin.png"
                                    alt="bulletin"
                                    width={300}
                                    height={300}
                                />
                                <p className={styles.network}>Red de destino</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <p>
                            Dos Subnet diferentes que están técnicamente aisladas, cada una con información acerca del estado de ellas mismas y sin información del estado de la otra, en este caso debe de haber un ente afuera de las subnets que esté escuchando información
                            de algún lado y procesando dicha información, enviandola de la subnet de origen a la subnet de de destino cuando alguna condición se cumpla.
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
                            Esa entidad afuera de la blockchain se llama <b>Relayer</b> y se encarga de escuchar la información proveniente de un contrato especial en la red de origen, validar la veracidad de este y de los validadores en dicha red y enviar ese mensaje en la red de destino,
                            esto implica algo más complejo a nivel técnico pero <b>Teleporter</b> nos permite simplificarlo a eso, por lo que el usar esta tecnología nos facilita mucho el proceso de mandar información entre dos subnets.
                        </p>
                        <br />
                        <p>
                            Ahora veamos a nivel técnico que debemos saber para poder mandar estos mensajes y recibirlos de manera correcta.
                        </p>
                        <br />
                        <Subtitle title='Contratos de teleporter' id='contratos-de-teleporter' />
                        <p>
                            Para empezar debemos entender que en este proceso de enviar y recibir información debemos hacer uso de cuatro contratos que podemos encontrar en repositorio oficial de
                            <Link href="https://github.com/ava-labs/teleporter/tree/main/contracts/src/Teleporter" target='_blank' className={styles.link}> ava-labs</Link>, uno es el contrato
                            de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}>ITeleporterMessenger.sol</Link>,
                            otro es el contrato de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol" target='_blank' className={styles.link}>ITeleporterReceiver.sol</Link>,
                            ambos son importantes en nuestro proceso de mandar y recibir información entre subnets, ya que usaremos algunas funciones e interfaces de ellos.
                        </p>
                        <br />
                        <p>
                            Lo otros dos se agregaron recientemente en una actualización llamada durango los cuales son <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry </Link>
                            y IWarpMessenger, el cual es referenciado en <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry</Link> y son usados para manejar un versionado de los
                            contratos de Teleporter en cada red.
                        </p>
                        <br />
                        <Subtitle title='Implementación de salida de información' id='implementacion-de-salida-de-informacion' />
                        <p>
                            Un contrato que enviará información de una subnet de origen a una subnet de destino debe importar el contrato de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}>ITeleporterMessenger.sol</Link>,
                            el cual le permitirá hacer uso de dicha interfaz, y por ende de sus métodos, entre los cuales hay uno llamado <span className={styles.span}>sendCrossChainMessage</span>.
                        </p>
                        <br />
                        <p>
                            A su vez debe importar el contrato de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry</Link>, para tener acceso a la versión de Teleporter que usará.
                        </p>
                        <br />
                        <p>
                            Si pensamos por un momento, estamos accediendo a un contrato y estamos llamando una función de este, lo que implica que debe de existir previamente un contrato desplegado en la subnet que estamos usando de origen de la información, y este debe tener literalmente el código que aparece
                            en <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}>ITeleporterMessenger.sol</Link>, esta es una de las razones por las cuales limitaremos las pruebas por el momento a las tres subnets mencionadas al principio de esta sección.
                        </p>
                        <br />
                        <Subtitle title='Instancia' id='instancia' />
                        <p>
                            Ahora con lo anterior en mente y siendo conscientes de que estamos haciendo, podemos decir que debemos definir una instancia del contrato de TeleporterRegistry en nuestro contrato para poder acceder a sus métodos y a las versiones de TeleporterMessenger, para eso debemos darle la dirección en la cual fue previamente desplegado dicho
                            contrato, en nuestra subnet de origen, este contrato está desplegado en la dirección: <span className={styles.span}>0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span> por lo que una instancia se resume a escribir la siguiente linea de código:
                        </p>
                        <br />
                        <CommandBlock command='TeleporterRegistry public immutable teleporterRegistry = TeleporterRegistry(0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b);' />
                        <br />
                        <p>
                            Es decir, una variable publica, inmutable de tipo <span className={styles.span}>TeleporterRegistry</span> que viene de la importación del repositorio de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry</Link>,
                            con el nombre de <span className={styles.span}>TeleporterRegistry</span>, la cual es igual a una instancia de TeleporterRegistry a la dirección <span className={styles.span}>0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span>.
                        </p>
                        <br />
                        <p>
                            Ahora instanciamos nuestro teleporterMessenger así:
                        </p>
                        <br />
                        <CommandBlock command='ITeleporterMessenger teleporterMessenger = teleporterRegistry.getLatestTeleporter();' />
                        <br />
                        <Subtitle title='Envío de la información' id='envio-de-la-informacion' />
                        <p>
                            Para enviar la información podemos simplemente llamar la instancia que tenemos en nuestro contrato del contrato de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}>ITeleporterMessenger.sol</Link>,
                            y llamar el método <span className={styles.span}>sendCrossChainMessage</span>, al hacerlo debemos enviar lo siguiente:
                        </p>
                        <br />
                        <CodeBlock code={TeleporterMessageInput} />
                        <br />
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                <b>destinationBlockchainID</b> es el identificador de la subnet que recibirá el mensaje dentro de la P - Chain de Avalanche, que en el caso
                                de <b>Dispatch</b> es <span className={styles.span}>0x9f3be606497285d0ffbb5ac9ba24aa60346a9b1812479ed66cb329f394a4b1c7</span> en el caso
                                de <b>C-Chain</b> es <span className={styles.span}>0x7fc93d85c6d62c5b2ac0b519c87010ea5294012d1e407030d6acd0021cac10d5</span> y en el caso
                                de <b>Echo</b> es <span className={styles.span}>0x1278d1be4b987e847be3465940eb5066c4604a7fbd6e086900823597d81af4c1</span>
                            </li>
                            <li>
                                <b>destinationAddress</b> es la dirección del contrato que recibirá el mensaje en la subnet de destino, es decir la dirección del contrato receptor.
                            </li>
                            <li>
                                <b>feeInfo</b> tiene la información de la dirección del ERC20 y la cantidad que se pagará como incentivo al Relayer por su labor, en los casos de prueba de las redes mencionadas hay un Relayer público, por lo que no hay necesidad de enviar un incentivo a estos, por eso definimos una dirección de
                                0 y un amount de 0 (Esto será muy importante ya que juega un papel clave al ser el incentivo de los entes que envian la información entre las subnets).
                            </li>
                            <li>
                                <b>requiredGasLimit</b> es el limite de gas requerido para ejecutar la transacción, si no se define el relayer puede enviar la transacción con menos gas y aún así recibir la recompensa independientemnte de que se entregue o no el mensaje en la subnet de llegada.
                            </li>
                            <li>
                                <b>allowedRelayerAddresses</b> es una lista blanca de direcciones que pueden servir de Relayers para mandar información de nuestra red a la red de destino, si está vacía como en nuestro ejemplo indica que cualquiera puede tomar la solicitud, procesarla y recibir la recompensa, en el caso de dos
                                subnets privadas con información sensible, se puede definir un relayer de confianza que pueda retransmitir la información sin exponerla fuera de una frontera geografica o de una empresa.{" "}
                            </li>
                            <li>
                                <b>message</b> es el mensaje que se envia en formato bytes, para hacerlo podemos hacer uso de la función <b>abi.encode()</b>, un ejemplo al enviar dos números, <span className={styles.span}>num1</span> y <span className={styles.span}>num2</span> es el siguiente
                            </li>
                            <CommandBlock command='bytes memory message = abi.encode(num1,num2);' />
                            <br />
                            <p>donde la variable <span className={styles.span}>message</span> se encuentra en el formato adecuado para ser enviado.</p>
                        </ol>
                        <br />
                        <Subtitle title='Ejemplo de código' id='ejemplo-de-codigo' />
                        <p>
                            A continuación, veremos un ejemplo de un código que envía información desde la subnet de C-Chain a la subnet de Dispatch
                        </p>
                        <br />
                        <CodeBlock code={SenderOnCChainWithRegistry} />
                        <br />
                        <p>
                            En el anterior código de ejemplo se mandan un texto a un contrato en la subnet de Dispatch, la función <span className={styles.span}>sendMessage</span> se encarga de recibir la dirección del contrato en Dispatch y el mensaje que se quiere enviar, con dicha información se emite un evento con la
                            información de la dirección del contrato en Dispatch, el identificador de esa subnet en la P - Chain, una recompensa para el Relayer que tome la transacción, instrucciones de cuanto gas puede gastar, una lista de los Relayers que pueden ejecutarla (En este ejemplo es cero por lo que cualquiera la puede tomar) y el mensaje en bytes.
                        </p>
                        <br />
                        <p>
                            En ese punto un relayer de manera automática toma la solicitud y hace las validaciones pertinentes enviando el mensaje a la subnet de destino.
                        </p>
                        <br />
                        <Subtitle title='Implementación de recepción de información' id='implementacion-de-recepcion-de-informacion' />
                        <p>
                            Un contrato que recibirá la información en una Subnet de destino proveniente de una subnet de origen, debe importar los contrato de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}>ITeleporterMessenger.sol</Link>,
                            de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol" target='_blank' className={styles.link}>ITeleporterReceiver.sol</Link> y de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry</Link>,
                            al hacerlo podra instanciar el contrato de <span className={styles.span}>ITeleporterMessenger</span> y validar quien trata de llamar sus métodos, y la función más importante en este caso, la de <span className={styles.span}>receiveTeleporterMessage</span> , esta última es la ejecutada por el <b>Relayer</b> una vez a confirmado que todo está correcto y que puede enviar el
                            mensaje, esta función le entrega a este contrato en la Subnet de destino el id de la cadena de origen del mensaje en la P - Chain, la dirección del contrato que le envió el mensaje en la cadena de origen y el mensaje que le enviaron.
                        </p>
                        <br />
                        <p>
                            Si rompemos nuevamente la cuarta pared y tomamos consciencia sin irnos en piloto automático por el mundo, nos daremos cuenta que en esta subnet también debe de haber sido desplegado un contrato de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterMessenger.sol" target='_blank' className={styles.link}>ITeleporterMessenger.sol</Link>,
                            y <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry</Link> y casualmente la dirección de este contrato es la misma que en <span className={styles.span}>C-Chain: 0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span>. Bueno nada es casualidad, tiene que ver
                            con la wallet usada para el despliegue, pero de eso hablaremos en otra ocasión.
                        </p>
                        <br />
                        <Subtitle title='Instancia' id='Instancia' />
                        <p>
                            Con lo anterior en mente y siendo conscientes nuevamente de que estamos haciendo, podemos decir que debemos definir una instancia de ese contrato en nuestro contrato para poder acceder a sus métodos, y para eso debemos darle la dirección en la cual fue previamente desplegado dicho contrato, en nuestra subnet de destino, este contrato está desplegado en la dirección:
                            <span className={styles.span}> 0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span> por lo que una instancia se resume a escribir la siguiente linea de código:
                        </p>
                        <br />
                        <CommandBlock command='TeleporterRegistry public immutable teleporterRegistry = TeleporterRegistry(0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b);' />
                        <br />
                        <p>
                            Es decir, una variable publica, inmutable de tipo <span className={styles.span}>TeleporterRegistry</span> que viene de la importación del repositorio de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/upgrades/TeleporterRegistry.sol" target='_blank' className={styles.link}>TeleporterRegistry</Link>, con el nombre de teleporterRegistry,
                            la cual es igual a una instancia de <span className={styles.span}>TeleporterRegistry</span> a la dirección <span className={styles.span}>0xEeeAA8e0e25802A3748Cd7FbFA96b851E76DFF9b</span>.
                        </p>
                        <br />
                        <p>Ahora instanciamos nuestro teleporterMessenger así:</p>
                        <br />
                        <CommandBlock command='ITeleporterMessenger teleporterMessenger = teleporterRegistry.getLatestTeleporter();' />
                        <br />
                        <Subtitle title='Recepción de información' id='recepcion-de-informacion' />
                        <p>
                            Para recibir la información podemos simplemente llamar la función <span className={styles.span}>receiveTeleporterMessage</span> que proviene del contrato de <Link href="https://github.com/ava-labs/teleporter/blob/main/contracts/src/Teleporter/ITeleporterReceiver.sol" target='_blank' className={styles.link}>ITeleporterReceiver.sol</Link>, y usar las variables
                            de <span className={styles.span}>originChainID</span>, <span className={styles.spna}>originSenderAddress</span> y <span className={styles.span}>message</span>
                        </p>
                        <br />
                        <p>
                            Pensemos de nuevo conscientemente un momento, estamos accediendo a funciones de un código, ¿Cómo es posible este suceso? Esto es gracias a la herencia por lo tanto nuesto contrato debe heredar de <span className={styles.span}>ITeleporterReceiver</span>, para esto se debe crear el contrato así:
                        </p>
                        <br />
                        <CommandBlock command='contract ReceiveMessageOnDispatch is ITeleporterReceiver {...}' />
                        <br />
                        <p>
                            Con esto aseguramos que podemos hacer uso de las funciones de ITeleporterReceiver, funciones como la de <span className={styles.span}>receiveTeleporterMessage</span>.
                        </p>
                        <br />
                        <p>
                            Una vez tenemos la información y validamos que si venga de un Relayer y de otra blockchain y no la llamo un usuario desde un explorador de bloques o desde otro contrato, es el momento de ver el mensaje, y para eso debemos pasar de <span className={styles.span}>bytes</span> a nuestra tipo original,
                            en nuestro ejemplo unos <span className={styles.span}>uint256</span>, para eso podemos acceder a los variables de la siguiente manera:
                        </p>
                        <br />
                        <CommandBlock command='lastMessage = abi.decode(message, (string));' />
                        <br />
                        <p>
                            Con la linea anterior estamos diciendole a nuestro código que va a crear una variable local de tipo <span className={styles.span}>string</span> y su valor será el obtenido luego de pasar por un proceso de <span className={styles.span}>decode</span> del mensaje recibido.
                        </p>
                        <br />
                        <p>
                            Luego de esto podemos procesar las variables <span className={styles.span}>lastMessage</span> como queramos en las funciones que queramos.
                        </p>
                        <br />
                        <Subtitle title='Ejemplo de código' id='ejemplo-de-codigo' />
                        <p>A continuación, veremos un ejemplo de un código de un contrato que está recibiendo un mensaje en Dispatch proveniente de C-Chain</p>
                        <br />
                        <CodeBlock code={ReceiverOnDispatchWithRegistry} />
                        <br />
                        <p>
                            En el anterior código se ve como la función <span className={styles.span}>receiveTeleporterMessage</span> se encarga de recibir el mensaje, validar la procedencia de este y ejecutar lógica con base en lo recibido, dicha lógica modifica el estado de las variables en dicho contrato por lo que es facil validar que si se ejecuto correctamente nuestra conexión entre las subnets.
                        </p>
                        <br />
                        <Subtitle title='Conclusión' id='conclusion' />
                        <p>
                            Luego de revisar a detalle cada contrato podemos concluir que el envío de información entre subnets haciendo uso de Teleporter requiere de un contrato emisor que instancia un contrato de Teleporter en la subnet de origen y un contrato receptor que hereda un contrato de teleporter e instancia otro en la subnet de destino, a su vez, sabemos que los mensajes se mandan en tipo bytes,
                            por lo que es muy importante hacer el <b>encode</b> y <b>decode</b>, tanto en la red de origen como en la de llegada respectivamente.
                        </p>
                        <br />
                        <p>
                            Luego de tener la información el cielo es el limite, ya que podemos mandar cualquier tipo de dato y de lógica entre una red y otra, los invito a contribuir en este <b>proyecto</b> creado por mi, donde hay un ejemplo de un contrato de teleporter desacoplando un poco el envio de información y la recepción con contratos proxies, usando hardhat con typescript, allí podrán aumentar la complejidad
                            del ejemplo e iremos construyendo estructuras más interesante para aprender entre todos.
                        </p>
                    </div>
                    <Navigation />
                </article>
            </div>
        </PageContent>
    );
};

export default Teleporter;

