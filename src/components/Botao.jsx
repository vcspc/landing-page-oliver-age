/*export default function Botao(props){
    const largura = props.largura;
    const altura = props.altura;


    return (
        <>
            <button style={{
            backgroundColor: '#4C5A28', 
            color: '#fff',
            borderRadius: '5px',
            border: 'none',
            width: {largura} + "rem",
            height: {altura} + "rem",
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',

            }} className="botao">Saiba Mais</button>
        </>
    )
}*/



function Botao(props) {
  const { url, width, height, fontSize, text } = props;
  const buttonStyle = {
    width: width,
    height: height,
    fontSize: fontSize,
    backgroundColor: '#4C5A28',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Chivo, sans-serif',
    fontWeight: 'bold',
    alignSelf: 'center',
  };

  return (
    <a href={url}>
      <button style={buttonStyle}>{text}</button>
    </a>
  );
}

export default Botao;
