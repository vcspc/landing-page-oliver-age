import React, { useState } from 'react'
import style from '../styles/Player.module.scss';

export default function Carrosel({ videoNames }){
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? videoNames.length - 1 : prevIndex - 1));
    };
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === videoNames.length - 1 ? 0 : prevIndex + 1));
    };

    const anterior = "<";
    const proximo = ">";
    
    return (
        <div className={style.container}>
            <button className={style.anterior} onClick={handlePrev}>{anterior}</button>
            <video className={style.video} src={`/${videoNames[currentIndex]}`} controls width="250" height="150" />
            <button className={style.proximo} onClick={handleNext}>{proximo}</button>
        </div>
    )
}