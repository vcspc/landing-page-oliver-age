import Cabecalho from '../components/estrutura/Cabecalho';
import Conceito from '../components/estrutura/Conceito';
import Beneficios from '../components/estrutura/Beneficios';
import Inovacao from '@/components/estrutura/Inovacao';
import Depoimentos from '@/components/estrutura/Depoimentos';
import Produtos from '@/components/estrutura/Produtos';
import Rodape from '@/components/estrutura/Rodape';
import Video from '@/components/estrutura/Video';
/* import Apresentacao from '@/components/estrutura/Apresentacao'; */


export default function Home() {
  return (
    <body style={{ backgroundColor: '#F8F8F8;' }}>
      <Cabecalho />
      <Video />
      {/* <Apresentacao /> */}
      <Conceito />
      <Beneficios />
      <Inovacao />
      <Depoimentos />
      <Produtos />
      <Rodape />
    </body>
  )
}
