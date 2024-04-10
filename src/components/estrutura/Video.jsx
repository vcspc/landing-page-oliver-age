import style from '../../styles/Video.module.scss';
import React from 'react';
import { useRef, useEffect } from 'react';

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

/* export default function Video() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Verificamos se o vídeo já foi reproduzido antes
        const hasPlayedBefore = !!localStorage.getItem('hasPlayedBefore');
        if (!hasPlayedBefore) {
            localStorage.setItem('hasPlayedBefore', 'true');
        } else {
            // Quando o componente é montado, adicionamos um ouvinte para o evento "loadedmetadata"
            // que é acionado quando o vídeo está pronto para ser reproduzido.
            videoRef.current.addEventListener('loadedmetadata', () => {
                // Inicie a reprodução do vídeo assim que ele estiver pronto.
                videoRef.current.play();
            });
        }
    }, []); // Executa apenas uma vez, quando o componente é montado

    const handleClick = () => {
        // Lógica para o botão "ADQUIRA AGORA"
        // ...
    };

    return (
        <div className={style.container}>
            <video ref={videoRef} className={style.video} src="/video-apresentacao.mp4" controls />
            <button onClick={handleClick} className={style.botao}>ADQUIRA AGORA</button>
        </div>
    );
} */

/* export default function Video() { 
    const videoRef = useRef(null);

    useEffect(() => {
       
        const hasPlayedBefore = !!localStorage.getItem('hasPlayedBefore');
        if (!hasPlayedBefore) {
            localStorage.setItem('hasPlayedBefore', 'true');
        } else {
            
            videoRef.current.addEventListener('loadedmetadata', () => {
                
                videoRef.current.play();
            });
        }

        
        localStorage.setItem('hasPlayedBefore', 'true');
    }, []); 
    const handleClick = () => {
       
    };


    return (
        <div className={style.container}>
            <video ref={videoRef} className={style.video} src="/video-apresentacao.mp4" controls autoplay/>
            <button onClick={handleClick} className={style.botao}>ADQUIRA AGORA</button>
        </div>
    );
} */

export default function Video() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Verifique se o vídeo já foi reproduzido antes
        const videoReproduzido = localStorage.getItem('videoReproduzido');
        if (!videoReproduzido) {
            // Inicie a reprodução do vídeo automaticamente
            videoRef.current.play();
            // Marque o vídeo como reproduzido no localStorage
            localStorage.setItem('videoReproduzido', 'true');
        }
    }, []); // Executa apenas uma vez, quando o componente é montado


    return (
        <div className={style.container}>
            <video ref={videoRef} className={style.video} src="/video-apresentacao.mp4" controls autoPlay muted />
            <button onClick={handleClick} className={style.botao}>ADQUIRA AGORA</button>
        </div>
    );
}

