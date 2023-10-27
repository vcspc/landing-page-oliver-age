//import depoimento1 from '../../../public/depoimento1.mp4'
import Carrosel from '../Carrosel';
import React from 'react';
import style from '../../styles/Depoimentos.module.scss';

const videoNames = [
    'depoimento1.mp4',
    'depoimento2.mp4',
    'depoimento3.mp4'
];

export default function Depoimentos(){

    return (
        <div className={style.fundo}>
            <p className={style.titulo}>Veja o Depoimento de quem confia em OliveAGE®</p>
            <Carrosel videoNames={videoNames} />
        </div>
    )
}