import style from '../../styles/Rodape.module.scss'



export default function Rodape() {
    return (
        <div className={style.fundo}>
            <div className={style.container}>
                <div className={style.contato}>
                    <img src="/Instagram.svg" alt="Icone do instagram" />
                    <p>@oliveage_folhas</p>
                </div>
                <div className={style.contato}>
                    <img src="/Instagram.svg" alt="Icone do instagram" />
                    <p>@folhasdeoliva</p>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.contato}>
                    <img src="/telefone.svg" alt="Icone de telefone" />
                    <p>(19) 3868-9979</p>
                </div>
                <div className={style.contato}>
                    <img src="/celular.svg" alt="Icone de celular" />
                    <p>(19) 99628-3136</p>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.contato}>
                    <img src="/email.svg" alt="Icone de email" />
                    <p>contato@folhasdeoliva.com.br</p>
                </div>
            </div>
        </div>
    )
}