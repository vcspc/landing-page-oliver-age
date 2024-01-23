import style from '../../styles/Video.module.scss';

function handleClick() {
    window.location.href = 'https://www.folhasdeoliva.com.br/linha-oliveage/';
  }

export default function Video() {
    return (
        <div className={style.container}>
            <video className={style.video} src="/video-apresentacao.mp4" controls />
            <button onClick={handleClick} className={style.botao}>ADIQUIRA AGORA</button>
        </div>
    )
}