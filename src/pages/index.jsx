import Cabecalho from '../components/estrutura/Cabecalho';
import Conceito from '../components/estrutura/Conceito';
import Beneficios from '../components/estrutura/Beneficios';
import Inovacao from '@/components/estrutura/Inovacao';
import Depoimentos from '@/components/estrutura/Depoimentos';


export default function Home() {
  return (
    <>
      <Cabecalho />
      <Conceito />
      <Beneficios />
      <Inovacao />
      <Depoimentos />
    </>
  )
}
