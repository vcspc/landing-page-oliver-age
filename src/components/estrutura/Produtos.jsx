/* import Image from 'next/image'; */
import style from '../../styles/Produtos.module.scss';
/* import produtoPilula60 from '../../../public/produtoPilula60.svg';
import produtoPilula120 from '../../../public/produtoPilula120.svg';
import produtoLiquido from '../../../public/produtoLiquido.svg';
 */
function handleClickP60() {
    window.location.href = 'https://www.folhasdeoliva.com.br/product-page/extrato-de-oliveira-micronizado-folhas-de-oliva-60-caps-de-500-mg-30g';
  }

function handleClickP120() {
    window.location.href = 'https://www.folhasdeoliva.com.br/product-page/extrato-de-oliveira-micronizado-folhas-de-oliva-120-caps-de-500-mg-60g';
  }

function handleClickL() {
    window.location.href = 'https://www.folhasdeoliva.com.br/product-page/aditivo-alimentar-olive-age-200-ml';
}

export default function Produtos(){
    return (
        <div className={style.fundo}>
            <p className={style.titulo}>Aproveite o lançamento e adquira com preço mais baixo</p>
            <div className={style.produto}>
                <div className={style.imagem}>
                    <img src="/produtoPilula60.svg" style={{ width: "100%;", height: "auto;", }}/>
                    {/* <Image src={produtoPilula60} fill objectFit="contain" alt="My Image" unoptimized/> */}
                </div>
                <div className={style.container}>
                    <p className={style.descricao}>60 cápsulas (500 mg cada)</p>
                    <div className={style.preco}>
                        <div className={style.cifrao}>
                            <p className={style.por}>por</p>
                            <p className={style.rs}>R$</p>
                        </div>
                        <p className={style.valor}>53</p>
                        <p className={style.centavos}>,10</p>
                    </div>
                    <button onClick={handleClickP60} className={style.botao}>Compre em Cápsulas</button>
                </div>
            </div>
            <div className={style.produto}>
                <div className={style.imagem}>
                    <img src="/produtoPilula120.svg" style={{ width: "100%;", height: "auto;", }}/>
                    {/* <Image src={produtoPilula120} fill objectFit="contain" alt="My Image" unoptimized/> */}
                </div>
                <div className={style.container}>
                    <p className={style.descricao}>120 cápsulas (500 mg cada)</p>
                    <div className={style.preco}>
                        <div className={style.cifrao}>
                            <p className={style.por}>por</p>
                            <p className={style.rs}>R$</p>
                        </div>
                        <p className={style.valor}>97</p>
                        <p className={style.centavos}>,35</p>
                    </div>
                    <button onClick={handleClickP120} className={style.botao}>Compre em Cápsulas</button>
                </div>
            </div>
            <div className={style.produto}>
                <div className={style.imagem}>
                    <img src="/produtoLiquido.svg" style={{ width: "100%;", height: "auto;", }}/>
                    {/* <Image src={produtoLiquido} fill objectFit="contain" alt="My Image" unoptimized/> */}
                </div>
                <div className={style.container}>
                    <p className={style.descricao}>Suplemento Alimentar Líquido (200 ml)</p>
                    <div className={style.preco}>
                        <div className={style.cifrao}>
                            <p className={style.por}>por</p>
                            <p className={style.rs}>R$</p>
                        </div>
                        <p className={style.valor}>150</p>
                        <p className={style.centavos}>,00</p>
                    </div>
                    <button onClick={handleClickL} className={style.botao}>Compre Versão Líquida</button>
                </div>
            </div>
        </div>
    )
}