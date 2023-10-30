import styles from '../../styles/Cabecalho.module.scss';
/* import Image from 'next/image';
import logo from '../../../public/logo.svg';
import idosos from '../../../public/idosos.svg';
import produtos from '../../../public/produtos.svg'; */


export default function Cabecalho(){
    return (
        <div className={styles.fundo}>
            <div className={styles.container}>
                <div className={styles.logo1}>
                    {/* <img src="/logo.svg" alt="Logo do site" /> */}
                    {/* <Image 
                    className={styles.logo} 
                    src={logo}  
                    alt="Logo"
                    fill
                    objectFit="contain"
                    unoptimized
                    /> */}
                </div>
                <p className={styles.texto}>Olive Age: Para alívio da pressão do dia a dia.</p>
            </div>
            <div className={styles.produtos1}>
            {/* <Image 
            className={styles.produtos} 
            src={produtos} 
            alt="Imagem com recipientes de cápsula e frasco de liquido" 
            fill
            objectFit="contain"
            unoptimized
            /> */}
            </div>
            <div className={styles.idosos1}>
            {/* <Image 
            className={styles.idosos} 
            src={idosos} 
            alt="Homem e mulher de terceira idade com sorriso no rosto se abraçando" 
            fill
            objectFit="contain"
            unoptimized
            /> */}
            </div>
        </div>
    )
}