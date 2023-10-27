import { useState } from 'react';
import style from '../styles/Beneficios.module.scss';

export default function Item(props) {
    

  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <p onClick={() => setVisivel(!visivel)} className={style.item}>
        {visivel ? '- ' + props.item : '+ ' + props.item}
      </p>
      {visivel && <p className={style.descricao}>{props.descricao}</p>}
    </div>
  );
}

