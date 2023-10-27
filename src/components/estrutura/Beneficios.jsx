
import Item from '../Item';
import style from '../../styles/Beneficios.module.scss';


export default function Beneficios(){


    return (
        <div className={style.fundo}>
            <p className={style.destaque}>Estudos apontam que os efeitos antioxidantes, anti-inflamatórios e regulatórios encontrados nestes bioativos naturais, oferecem um leque amplo de aplicações potenciais, entre eles:</p>
            <Item  item={'Saude Cardiovascular'} descricao={'Auxilia na saúde do coração, melhorando a função vascular e regulando a pressão arterial.'}/>
            <Item  item={'Saude Antienvelhecimento'} descricao={'Auxilia na Contribui para a proteção das células contra o envelhecimento precoce, mantendo a vitalidade da pele e dos órgãos.'}/>
            <Item  item={'Saude Suporte ao Sistema Imunológico'} descricao={'Auxilia na saúde do coração, Reforça as defesas naturais do corpo, promovendo um sistema imunológico forte e resiliente.'}/>
            <Item  item={'Saude Bem-Estar Geral'} descricao={'Auxilia na prevenção de doenças crônicas, entre elas síndrome de fadiga crônica e no aumento da energia e vitalidade.'}/>
            <Item  item={'Melhoria da sensibilidade à insulina'} descricao={'As células ficam mais responsivas aos sinais da insulina, permitindo que a glicose seja absorvida mais eficientemente pelas células e, assim, reduzindo os níveis de glicose no sangue.'}/>
            <Item  item={'Saude Proteção das células beta pancreáticas'} descricao={'As células beta do pâncreas são responsáveis pela produção de insulina. Estes ativos podem ter efeitos protetores sobre essas células, ajudando a preservar sua função e reduzindo o risco de declínio da produção de insulina.'}/>
            <Item  item={'Saude Estímulo dos osteoblastos'} descricao={'Estes ativos podem promover a diferenciação e a atividade dos osteoblastos, contribuindo para a formação de osso novo.'}/>
            <Item  item={'Saude Neuroproteção'} descricao={'Auxiliam na sobrevivência das células neurais e na melhoria da memória e concentração.'}/>
            <button className={style.botao}>Saiba Mais</button>
            {/* <div className={style.botao}>
                <Botao url={'https://www.google.com/'} width={'17rem'} height={'6rem'} fontSize={'2rem'} text={'Saiba Mais'}/>
            </div> */}

        </div>
    )
}