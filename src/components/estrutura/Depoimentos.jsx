//import depoimento1 from '../../../public/depoimento1.mp4'
import Carrosel from "../Carrosel";
import React from "react";
import style from "../../styles/Depoimentos.module.scss";
/* import styles from '../../styles/Player.module.scss'; */

const videoNames = ["depoimento1.mp4", "depoimento2.mp4", "depoimento3.mp4"];

export default function Depoimentos() {
  return (
    <div className={style.fundo}>
      <p className={style.titulo}>
        Veja o Depoimento de quem confia em OliveAGE®
      </p>
      <div className={style.container}>
        <video poster="/depoimento1.jpeg" className={style.video} src="/depoimento1.mp4" controls preload="metadata"/>
        <video poster="/depoimento2.jpeg" className={style.video} src="/depoimento2.mp4" controls preload="metadata"/>
        <video poster="/depoimento3.jpeg" className={style.video} src="/depoimento3.mp4" controls preload="metadata"/>
        <video poster="/depoimento4.jpeg" className={style.video} src="/depoimento4.mp4" controls preload="metadata"/>
        <video poster="/depoimento5.jpeg" className={style.video} src="/depoimento5.mp4" controls preload="metadata"/>
        <video poster="/depoimento6.jpeg" className={style.video} src="/depoimento6.mp4" controls preload="metadata"/>
      </div>
      {/* <Carrosel videoNames={videoNames} /> */}
    </div>
  );
}
