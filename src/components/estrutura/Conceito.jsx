import styles from '../../styles/Conceito.module.scss';
/* import Image from 'next/image';
import oliva from '../../../public/oliva.svg'; */


export default function Conceito(){
    return (
        <div className={styles.fundo}>
            <div className={styles.container}>
                <p className={styles.titulo}>OliveAGE®: conheça os benefícios da oliveira através da nossa linha de suplemento alimentar</p>
                <p className={styles.texto}>O OliveAGE® é um extrato natural extraído da oliveira, uma fonte rica em Oleuropeína, Hidroxitirosol e mais de 50 agentes metabólitos. Estes potentes antioxidantes combatem os radicais livres, reduzem o estresse oxidativo e protegem células e tecidos vitais.</p>
            </div>
            <div className={styles.oliva}>
                {/* <Image 
                src={oliva}  
                alt="Imagem de um galho de oliveira com fruto"
                fill
                objectFit="contain"
                unoptimized
                /> */}
            </div>
        </div>
    )
}