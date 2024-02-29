import Title from '@/components/title/Title';
import React from 'react';
import styles from "./styles.module.css"
import Sidebar from '@/components/sidebar/Sidebar';
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
                <hr className={styles.border} />
                <article className={styles.description}>
                    <div className={styles.content}>
                        <Title title='Programemos una Subnet' />
                        <p>
                            A continuación, vamos a crear, desplegar y usar una subnet de manera local con nuestra wallet de core y metamask, para poder desplegar un código usando remix y hardhat.
                        </p>
                        <br />
                        <Subtitle title='Instalación de requerimientos' id='instalación-de-requerimientos' />
                        <p>
                            Para empezar con esto debemos instalar el Avalanche CLI en nuestra terminal, pero para esto debemos hacernos la pregunta, ¿Qué sistema operativo tenemos?
                        </p>
                        <br />
                        <Subtitle title='Linux' id='Linux' />
                        <p>
                            Para este sistema operativo debemos abrir una terminal y copiar lo siguiente:
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
                            Ahora entendamos ¿qué pasó?
                        </p>
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                En el paso <b>1</b> descargamos e instalamos el archivo binario que requerimos para usar Avalanche CLI en nuestra terminal.
                            </li>
                            <li>
                                En el paso <b>2</b> exportamos esta ruta para poder llamar nuestro archivo binario desde cualquier ruta en nuestra terminal (Nota: El código funciona tal cual si estamos en la ruta raíz en la términal, ¿Cómo sabemos eso? Porque nuestra terminal empieza así:
                                <span className={styles.span}> usuario@perfil:$</span>, si estuviera en una ruta se observara la ruta después del simbolo de
                                <span className={styles.span}> ~</span> y antes del simbolo de <span className={styles.span}> $</span> de la siguiente manera <span className={styles.span}> usuario@perfil:/myfolder$</span>).
                            </li>
                            <li>
                                Ahora ya quedó pero queremos no tener que exportar esto todo el tiempo por lo que lo agregamos a un archivo que se ejecuta al abrir la terminal, en este caso nuestra términal ejecuta
                                <span className={styles.span}> bash</span> por lo que el código se manda al archivo <span className={styles.span}> .bashrc</span>, si nuestra términal ejecuta
                                <span className={styles.span}> zsh</span> debemos mandar el código a <span className={styles.span}> .zshrc</span>, ahora se preguntaran que ni idea que no están seguros de que usa su pc, no pasa nada, escriban
                                <span className={styles.span}> cat .bashrc</span> si esto muestra algo su terminal usa <span className={styles.span}> bash</span>, en mi caso al hacerlo recibo el contenido del archivo y al correr
                                <span className={styles.span}> cat .zshrc</span> recibo esto: <span className={styles.span}> cat: .zshrc:</span> No such file or directory lo que significa que mi terminal usa bash en lugar de <span className={styles.span}> zsh</span>.
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Windows' id='windows' />
                        <p>
                            Siendoles sinceros lo anterior que funciona en linux lo hice todo desde windows, por lo que pueden estar seguros que acá también podemos usar Avalanche CLI, pero en lugar de usar una terminal cualquiera debemos ir a
                            la <span className={styles.span}>microsoft store</span> y descargar <span className={styles.span}>Ubuntu</span>  esto hará una partición pequeña que nos dará un espacio de trabajo con la
                            distribución <span className={styles.span}>Ubuntu</span> de <span className={styles.span}>Linux</span> con lo que volvemos al paso anterior, y escribiendo en nuestro buscador la
                            palabra <span className={styles.span}>Ubuntu</span> nos mostrara una terminal, al abrirla, estaremos justo por empezar el paso <b>1</b> del ejemplo de Linux, por lo que sobra decir que lo que sigue es seguir el paso 1, 2 y 3 descritos para <b>Linux</b>.
                        </p>
                        <br />
                        <Subtitle title='MAC' id='mac' />
                        <p>
                            Ver academy oficial de Avalanche en la sección
                            <Link href="https://academy.avax.network/?msg=not-logged-in" target="_blank" className={styles.link}> Install Avalanche CLI en MacOs</Link>.
                        </p>
                        <br />
                        <Subtitle title='Creación de subnet' id='creacion-de-subnet' />
                        <p>
                            Empecemos creando una subnet básica, para esto debemos tener nuestra terminal abierta (Recuerden los usuarios de windows terner abierta la de <b>Ubuntu</b>), ahora corramos el siguiente
                            comando: <span className={styles.span}>avalanche subnet create testNet</span>, pero ¿Qué significa esto?
                        </p>
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                <b>avalanche:</b> le estamos diciendo a la terminal que queremos usar el CLI de Avalanche, es como decir python, python3, node, npx, etc., pero en este caso es Avalance CLI a quien queremos usar.
                            </li>
                            <li>
                                <b>subnet:</b> le estamos especificando que tipo de proceso queremos llamar, en este caso una subnet (más adelante veremos otro).
                            </li>
                            <li>
                                <b>create:</b> le estamos diciendo que llame el método create del proceso relacionado a las <b>subnets</b>, es como si subnet fuera una clase y llamamos <b>subnet.create</b>.
                            </li>
                            <li>
                                <b>testNet:</b> Es el nombre arbitrario que le decidí dar a esa subnet, pude haber escogido pikachu, pikaNet, rangerRojo, rickPrimeNet o el nombre que quisiera, pero escogí testNet, en este caso si seguimos la analogía anterior es como si llamaramos lo siguiente <b>subnet.create(&quot;testNet&quot;)</b>.
                            </li>
                        </ol>
                        <p>
                            Ahora que entendemos esta sentencia empecemos:
                        </p>
                        <ol type='i' className={styles.numberedList}>
                            <li>
                                <b>Selección de la Maquina Virtual:</b> Una vez ejecutada en la linea de comandos la sentencia <span className={styles.span}>avalanche subnet create testNet</span>, nos pondrán a elegir entre dos cosas, una Subnet que utiliza la maquina virtual de Ethereum (<b>Subnet-EVM</b>), la
                                cual nos permite programar Contratos inteligentes en Solidity y usar direcciones 0x… con toda la facilidad y naturalidad del mundo; o una maquina virtual personalizada (<b>Custom</b>), una maquina virtual personalizada nos permitirá usar otro sistema operativo como Rust para nuestro
                                código, y requerirá que ingresemos la ruta de la configuración del bloque genesis. Ya que abordaremos el camino sencillo, seleccionaremos en esta ocasión una <b>Subnet-EVM</b>.
                            </li>
                            <li>
                                <b>Selección del identificador de la cadena para la subnet:</b> El concepto <b>chainId</b> puede resultar un poco confuso al incio, pero no es nada del otro mundo, es solo como nuestro número de identificación, cada blockchain tiene uno y es importante no repetir, ya que sería feo que
                                alguién comparta tu mismo número de identificación también es feo y generar confusión compartir el mismo número de identificación en el universo de las blockchain, para estar seguro de no repetir, buscamos en el registro unico de documentos de identificación para blockchains (Es broma me invente ese nombre)
                                el cual es y <Link href="https://chainlist.org/">https://chainlist.org</Link> le decimos que queremos incluir documentos de adultos y de menores de edad (Es decir incluir Testnets), y hacemos la busqueda, escribiendo un número por ejemplo hoy es 27 de enero de 2024, por lo que probare el número <b>270124</b> y
                                ¡Oh sorpresa! Está disponible, por lo que se que puedo usar <b>270124</b> como un chainId ya que no colisionará con otro documento de identificación de otra blockchain, así como este puedo probar cualquier otro número y la página de <Link href="https://chainlist.org">https://chainlist.org</Link> me dará la disponibilidad de este.
                            </li>
                            <li>
                                <b>Selección de un simbolo para el token nativo:</b> Este atributo puede parecer algo confuso pero pensemos en el token nativo como la moneda de un país, en mi caso escribo esto desde Colombia, acá nuestro token nativo es el <b>Peso Colombiano</b>, pero este tiene un seudonimo para identificarlo más rápido y es de tres letras,
                                el <b>COP</b>, así mismo las blockchain y subnet pueden tener un nombre largo como Bitcoin y tener un simbolo llamado (BTC), Avax (AVAX), Ether (ETH), Matic (MATIC), etc. Por lo que siendo el momento de seleccionar un simbolo, escogere <b>TNET</b> el cual considero es un acronimo de testNet, puedo usar cualquier otra cosa
                                como <b>TNT, MYT, ASD,</b> ocualquier cosa que no tenga nada que ver con el proyecto, pero por coherencia usaré <b>TNET</b>.
                            </li>
                            <li>
                                <b>Selección de la versión de la maquina virtual de Ethereum a utilizar:</b> Ya que seleccionamos que usaríamos la maquina virtual de Ethereum como maquina virtual de procesamiento de información, esta maquina ha sufrido modificaciones y mejoras con el pasar del tiempo, por lo que existen varias versiones, es recomendable tratar de usar
                                siempre la ultima ya que suele ser la que tiene más parches de seguridad blindandonos de casos de hackeos comunes, por lo que recomiendo seleccionar esta opción que aparece como <b>Use latest version</b>.
                            </li>
                            <li>
                                <b>Configuración de fees:</b> Este apartado puede verse un poco confuso el hecho de hablar fees y tener que seleccionar capacidad del disco, pero están de la mano, ya que, entre menor sea la capacidad del disco, menos información podrá procesar, por lo que resultará más costoso procesarla, pero si las maquinas virtuales que ejecutarán la subnet,
                                tienen una capacidad mayor, estas podrán ejecutar más transacciones a un menor costo, ya que el hardware es más potente para esto, también podemos personalizar estos fees, por el momento ya que es nuestra primer subnet, les recomiendo seleccionar un disco de alta capacidad que les permita procesar 5mil unidades de gas por segundo <b>( High disk use / High Throughput 5 mil gas/s )</b>
                            </li>
                            <li>
                                <b>Distribución de los fondos:</b> Este paso es muy importante, ya que escogimos una configuración tradicional en la cual debemos pagar gas para procesar transacciones, y esto significa que tenemos que tener tokens de <b>TNET</b> para poder pagar esos fees, pero como el token <b>TNET</b> apenas se va a crear, no tenemos aún suministros de este en nuestras billeteras, Avalanche CLI nos
                                da dos opciones: o entregamos 1 millón de tokens a una dirección default, de la cual luego recibiremos la dirección privada para importarla en nuestra wallet o pasamos una o más direcciones publicas, las cuales estarán configuradas desde el bloque genesis como las wallets con balances para poder pagar gas, en este caso seleccionaré la segunda opción ya que quiero usar mi cuenta de
                                confianza la cual uso para pruebas, copio esta dirección 0x… de core y selecciono la opción de <b>Customize your airdrop</b>, esto me pedirá que ingrese la dirección 0x… que recibirá los tokens ( <b>Address to airdrop to</b> ), por lo que pego la dirección 0x… que obtuve de core, seguido de la tecla enter. Luego de esto me preguntará la cantidad <b>Amount to airdrop (in AVAX units)</b>,
                                eso de <b>en unidades de AVAX</b> es porque cada token tiene decimales de una manera ingeniosa, ya que no se pueden usar decimales (0.1) por ejemplo en Solidity, se define un estándar de decimales y en realidad la unidad está dada por cifras de muchos ceros, por ejemplo un AVAX no es 1 token, es 1 x 10^9 tokens, por lo que el decir <b>in AVAX units</b> hace referencia a que mencione
                                cuantos tokens quiero recibir considerando que cada token se multiplicará por 1 x 10^9, entonces si escribo 1000000 (1 millón), a nivel de código recibiré 1 millón por 10 a la 9, pero visualmente veré 1 millón unicamente, y el gas costará fracciones de 1, como 0.001 TNET, pero sabemos ya que esta fracción es fictisia ya que 0.001 TNET son 1 x 10^6 tokens, ya que son menos de la unidad
                                se ven como decimales, pero internamente son más de 1, esto es muy importante al momento de programar contratos inteligentes que involucren cryptoactivos como el token nativo o un ERC20, ya que será solo mi cuenta, le diré que No a la pregunta de si me gustaría repartir más tokens (<b>Would you like to airdrop more tokens?</b>)
                            </li>
                            <li>
                                <b>Me gustaría agregar un precompilado personalizado para modificar la maquina virtual?:</b> Este es un tema más avanzado que abordaremos en otro momento, por ahora tratemos de entender lo que llevamos y terminar de configurar nuestra maquina virtual, por lo que seleccionaremos que No a la pregunta de <b>Advanced: Would you like to add a custom precompile to modify the EVM?</b>
                            </li>
                            <li>
                                <b>Mensaje de éxito 😎:</b> Si todo se configuró de manera correcta deberíamos ver el siguiente mensaje: <b>Successfully created subnet configuration</b>
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Ver mis subnets' id='ver-mis-subnets' />
                        <ol type='i' className={styles.numberedList}>
                            <li>
                                Si queremos ver la lista de subnets que tenemos en nuestro dispositivo creadas corremos el comando <span className={styles.span}>avalanche subnet list</span> que siguiendo la analogía que planteamos al principio es llamar desde el Avalanche CLI la función <b>subnet.list()</b>, la cual no requiere de parámetros de entrada; llamar eso nos retornará una tabla con la información del
                                nombre de la subnet, el chainId, el id de la maquina virtual (VMID), y otra información como el tipo de maquina virtual y la versión de esta, así como si viene de algún repositorio o se uso la que está por defecto.
                            </li>
                            <li>
                                Si queremos ver información detallada de una subnet en especifico, ejecutamos el comando <span className={styles.span}>avalanche subnet describe testNet</span>, en este caso terminando en el nombre de nuestra subnet, en mi caso la llame testNet, siguiendo la analogía es el equivalente a <b>subnet.describe(&quot;testNet&quot;)</b>, ya que esta vez si recibe un atributo, el cual es el nombre
                                de la subnet de la cual queremos información, esto nos dará <b>detalles</b>, información de la <b>configuración del gas</b>, de los <b>airdrop</b> (dandonos la cantidad y la dirección que los recibe), así como de los precompilados que en este caso observo <b>No precompiles set</b> porque no configuré ninguno.
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Levantar un nodo local (antes de desplegar)' id='levantar-un-nodo-local-(antes-de-desplegar)' />
                        <p>
                            Este paso a veces lo omitimos, pero es más saludable realizarlo para no tener errores en el futuro, por lo que en este punto vamos a correr el comando <span className={styles.span}>avalanche network start</span> para levantar cinco nodos en nuestro computador de manera local, y ahora corramos el comando <span className={styles.span}>avalanche network status</span> para ver el estado de estos nodos
                            que acabamos de levantar, deberiamos ver el identificador de cada nodo así como el endpoint utilizado para exponerlos.
                        </p>
                        <br />
                        <p>Nota: Acá la clase ya no es subnet sino network 👀</p>
                        <br />
                        <Subtitle title='Despliegue de Subnet' id='despliegue-de-subnet' />
                        <p>
                            En este punto ya tenemos configurada una Subnet y los nodos expuestos, todo el camino está preparado para empezar el lanzamiento del cohete (despliegue de nuestra subnet), para realizar esto último ejecutaremos el comando <span className={styles.span}>avalanche subnet deploy testNet</span> (subnet.deploy(&quot;testnet&quot;))
                        </p>
                        <ol type='I' className={styles.numberedList}>
                            <li>
                                <b>Selección de una red para la operación de despliegue:</b> Acá es como seleccionar un ambiente, para pruebas locales que es el ejercicio de esta sección, seleccionaremos la red local (Local Network)
                            </li>
                            <li>
                                Recolección de datos importantes: Una vez la subnet es desplegada, nos arrojará un montón de información, pero ¿Qué es realmente importante de todo esto?
                                <ol type='i' className={styles.numberedList}>
                                    <li>
                                        <b>RPC URL:</b> Punto de conexión remota, recordemos que la blockchain no es una página web, es un estándar de almacenamiento y comunicación criptografico con gamificación entre dispositivos; es decir, un grupo de dispositivos se ponen de acuerdo, en como agregar información y comunicarla entre si, recibiendo un beneficio por hacerlo de la manera esperada, estos dispositivos son nuestra
                                        puerta de entrada para leer información o agregarla, por lo que debemos enviarle a ellos nuestra solicitud de escritura o lectura, solo los nodos autorizados pueden interactuar, un <b>RPC</b> es como un API al que le puedo escribir para usar arquitectura web2 con información del mundo web3.
                                    </li>
                                    <li>
                                        <b>Funded address:</b> La dirección con los fondos es nuestra dirección de prueba, la verificamos.
                                    </li>
                                    <li>
                                        <b>Network name:</b> verificamos que diga <b>testNet</b> o el nombre que le dimos
                                    </li>
                                    <li>
                                        <b>Chain ID:</b> Verificamos que sea el que escogimos, en mi caso es el <b>270124</b>
                                    </li>
                                    <li>
                                        <b>Currency Symbol:</b> Verificamos que sea nuestro acrónimo <b>TNET</b>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Importación de la Subnet en core' id='importación-de-la-subnet-en-core' />
                        <p>
                            Para importar una blockchain, en este caso una subnet, debemos tener claro los últimos puntos del paso anterior, como el RPC, el chainId, etc., con estos a la mano continuaremos con lo siguiente:
                        </p>
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                Abrimos la billetera core como una extensión del navegador o en nuestro celular
                            </li>
                            <li>
                                Le damos clic a la lista desplegable que está en la parte superior derecha, la que tiene el logo de Avalanche
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
                                Le damos en la última opción que tiene un icono de una tuerca, es decir en Gestionar Redes.
                            </li>
                            <li>
                                Le damos en el icono de + que está a la derecha.
                            </li>
                            <Image
                                src={"/assets/blogs/newNetwork.png"}
                                alt='newNetwork'
                                height={50}
                                width={380}
                            />
                            <br />
                            <br />
                            <li>Una vez aquí nos pedirá:
                                <ol type='a' className={styles.numberedList}>
                                    <li>
                                        <b>URL de RPC de la red:</b> <i>http://127.0.0.1:9650/ext/bc/27J…wEH/rpc</i> (Nuesto RPC).
                                    </li>
                                    <li>
                                        <b>Nombre de la red:</b> testNet.
                                    </li>
                                    <li>
                                        <b>ID de la cadena:</b> 270124.
                                    </li>
                                    <li>
                                        <b>Símbolo del Token de la Red:</b> TNET
                                    </li>
                                    <li>
                                        <b>Network Token Name:</b> TestNet coin (Nombre que verán los demás del token)
                                    </li>
                                    Lo demás lo dejaremos vacío por ahora, y le damos clic en Guardar.
                                </ol>
                                <br />
                                <li>
                                    Una vez agregada la red le damos clic y deberíamos ver en el apartado principal de la wallet algo como esto:
                                </li>
                                <Image
                                    src={"/assets/blogs/testNet.png"}
                                    alt='testNet'
                                    height={300}
                                    width={380}
                                />
                                <br />
                                <br />
                                Si hemos llegado hasta aquí, felicidades, ya tenemos nuestra subnet en nuestra wallet core, ya podemos usarla para
                                desplegar contratos inteligentes en Remix.
                            </li>
                        </ol>
                        <br />
                        <Subtitle title='Importación de la Subnet en metamask' id='importación-de-la-subnet-en-metamask' />
                        <p>
                            Para importar una blockchain, en este caso una subnet, debemos tener claro los últimos puntos del paso anterior, como el RPC,
                            el chainId, etc., con estos a la mano continuaremos con lo siguiente:
                        </p>
                        <ol type='1' className={styles.numberedList}>
                            <li>
                                Abrimos la billetera metamask como una extensión del navegador o en nuestro celular.
                            </li>
                            <li>
                                Le damos clic a la lista desplegable que está en la parte superior izquierda en nuestra extensión web o en la parte superior en el centro en la aplicación mobile.
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
                                Una vez el menú abierto le damos en agregar red
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
                                Esto nos abrira una nueva pestaña, en esta le damos en agregar una red manualmente (<b>Add a network manually</b>)
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
                                Esta nos pedira lo siguiente:
                                <ol type='a' className={styles.numberedList}>
                                    <li>
                                        <b>Nombre de la red:</b> testNet.
                                    </li>
                                    <li>
                                        <b>URL de RPC de la red:</b> <i>http://127.0.0.1:9650/ext/bc/27J…wEH/rpc</i> (Nuesto RPC).
                                    </li>
                                    <li>
                                        <b>ID de la cadena:</b> 270124.
                                    </li>
                                    <li>
                                        <b>Símbolo del Token de la Red:</b> TNET
                                    </li>
                                    y finalizamos dandole clic en Guardar, seguido vemos el siguiente mensaje:
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
                                Le damos en Switch to testNet, a lo que vemos lo siguiente
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
                            En este caso no tengo tokens porque la dirección es diferente a la que recibí los airdrops,
                            pero puedo enviar tokens desde mi cuenta en core para poder usar metamask o haber agregado
                            esta dirección como la receptora al momento de crear la subnet, en cualquier caso ya tengo
                            mi subnet agregada a mis wallets de core y metamask.
                        </p>
                        <br />
                        <Subtitle title='Detener los nodos que están corriendo' id='detener-los-nodos-que-estan-corriendo' />
                        <p>
                            A veces cerramos la terminal y pensamos que ya cerramos todo, pero el proceso sigue ejecutando
                            los nodos en segundo plano, para detenerlos podemos observar que se están ejecutando
                            con <span className={styles.span}>avalanche network status</span> y posteriormente detenerlos con <span className={styles.span}>avalanche network stop</span>, o detenerlos desde el principio, como gusten.
                        </p>
                        <br />
                        <Subtitle title='Volver a correr los nodos y las subnets anteriormente desplegadas' id='volver-a-correr-los-nodos-y-las-subnets-anteriormente-desplegadas' />
                        <p>
                            Para correr de nuevo los nodos detenidos ejecutamos el comando <span className={styles.span}>avalanche network start</span>
                        </p>
                        <br />
                        <Subtitle title='Eliminar las subnets desplegadas de los nodos' id='eliminar-las-subnets-desplegadas-de-los-nodos' />
                        <p>
                            Para poder eliminar ese estado de las subnets de los nodos debemos correr el comando <span className={styles.span}>avalanche network clean</span>, de esta manera se limpian los despliegues de los nodos locales
                        </p>
                        <br />
                        <Subtitle title='Eliminar la subnet' id='eliminar-la-subnet' />
                        <p>
                            Si queremos eliminar de manera definitiva la configuración que habíamos realizado de nuestra subnet, ejecutamos el siguiente comando <span className={styles.span}>avalanche subnet delete testNet</span> dando
                            por terminado la existencia de nuestra subnet <span className={styles.span}>testNet</span> en nuestro dispositivo 😢
                        </p>
                        <p>
                            Ahora bien, hay ocasiones en las que queremos acceder a activos digitales o información que está en otra subnet u otra blockchain como la C - Chain, para por ejemplo aprovechar la propiedad de un NFT en un
                            proyecto que está en main net y darle un beneficio en nuestra nueva subnet, y para este tipo de casos el equipo de Avalanche está desarrollando una tecnología, la cual tenemos en Beta y podemos empezar a probar
                            desde ya, esta tecnología nos permite comunicarnos entre la subnet Dispatch (D), Echo (E) y la C-Chain; esta tecnología se llama Teleporter.
                        </p>
                    </div>
                    <Navigation />
                </article>
            </div>
        </PageContent>
    );
};

export default ProgramemosUnaSubnet;
