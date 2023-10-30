import style from '../../styles/Inovacao.module.scss';
/* import Image from 'next/image';
import origemConfiavel from '../../../public/origemConfiavel.svg';
import padraoDeQualidade from '../../../public/padraoDeQualidade.svg';
import integridadeNutricional from '../../../public/integridadeNutricional.svg';
import assistenciaEspecializada from '../../../public/assistenciaEspecializada.svg';
 */
export default function Inovacao(){
    return (
        <div className={style.fundo}>
            <p className={style.titulo}>OliveAGE®: Onde a Natureza e a Inovação Se Encontram</p>
            <div className={style.quadrantes}>
                <div className={style.quadrante1}>
                    <div className={style.Q1}>
                        <p className={style.titulo}>Melhor custo benefício</p>
                        <p className={style.texto}>Cápsulas com maior miligramagem e menor preço comparadas aos  produtos similares no mercado.</p>
                    </div>
                    <div className={style.Q2}>
                        <p className={style.titulo}>Origem Confiável</p>
                        <p className={style.texto}>Produzido a partir de oliveiras de cultivo próprio, sem contaminantes e agrotóxicos.</p>
                        {/* <Image src={origemConfiavel} fill objectFit="contain" alt="My Image" unoptimized /> */}
                    </div>
                    <div className={style.Q3}>
                        <p className={style.titulo}>Padrão de Qualidade</p>
                        <p className={style.texto}>Cada lote é submetido a rigorosos controles de qualidade, assegurando os mais altos padrões de segurança, pureza e eficácia.</p>
                        {/* <Image src={padraoDeQualidade} fill objectFit="contain" alt="My Image" unoptimized /> */}
                    </div>
                    <div className={style.Q4}>
                        <p className={style.titulo}>Teores Garantidos</p>
                        <p className={style.texto}>Realização de análises laboratoriais por laboratórios confiáveis e credenciados.</p>
                    </div>

                </div>
                <div className={style.quadrante2}>
                    <div className={style.Q5}>
                        <p className={style.titulo}>Transparência e Rastreabilidade</p>
                        <p className={style.texto}>Comprometimento com a transparência em todos os processos, desde a origem dos ingredientes até o produto final, garantindo total rastreabilidade e confiança.</p>
                    </div>
                    <div className={style.Q6}>
                        <p className={style.titulo}>Integridade Nutricional</p>
                        <p className={style.texto}>Processamento com técnicas avançadas, para preservar a integridade dos compostos bioativos da oliveira, garantindo a máxima eficácia dos produtos.</p>
                       {/*  <Image src={integridadeNutricional} fill objectFit="contain" alt="My Image" unoptimized /> */}
                    </div>
                    <div className={style.Q7}>
                        <p className={style.titulo}>Assistência Especializada</p>
                        <p className={style.texto}>Equipe com profissionais prontos para fornecer orientações personalizadas sobre o uso adequado do suplemento e seus benefícios.</p>
                        {/* <Image src={assistenciaEspecializada} fill objectFit="contain" alt="My Image" unoptimized /> */}
                    </div>
                    <div className={style.Q8}>
                        <p className={style.titulo}>Histórico de Excelência</p>
                        <p className={style.texto}>A Folhas de Oliva é pioneira no Brasil na fabricação de produtos de oliva, com uma reputação construída ao longo dos anos, graças ao compromisso com a qualidade e o bem estar de seus clientes.</p>
                    </div>
                </div>
            </div>
        </div>
    )   
}