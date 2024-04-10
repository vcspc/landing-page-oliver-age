import style from '../../styles/Video.module.scss';
import React from 'react';

function handleClick() {
    window.location.href = 'https://www.folhasdeoliva.com.br/linha-oliveage/';
  }

/* export default function Video() {
    return (
        <div className={style.container}>
            <video className={style.video} src="/video-apresentacao.mp4" controls autoplay/>
            <button onClick={handleClick} className={style.botao}>ADQUIRA AGORA</button>
        </div>
    )
} */

export default function Video() {
    const videoRef = React.useRef(null);

    React.useEffect(() => {
        // Quando o componente é montado, adicionamos um ouvinte para o evento "loadedmetadata"
        // que é acionado quando o vídeo está pronto para ser reproduzido.
        videoRef.current.addEventListener('loadedmetadata', () => {
            // Inicie a reprodução do vídeo assim que ele estiver pronto.
            videoRef.current.play();
        });
    }, []);

    return (
        <div className={style.container}>
            <video ref={videoRef} className={style.video} src="/video-apresentacao.mp4" controls/>
            <button onClick={handleClick} className={style.botao}>ADQUIRA AGORA</button>
        </div>
    );
}
