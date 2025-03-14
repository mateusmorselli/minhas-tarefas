import FiltroCard from '../FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
    </div>
    <S.Filtros>
      <FiltroCard legenda="pendentes" contador={1} />
      <FiltroCard legenda="concluídas" contador={1} />
      <FiltroCard legenda="urgentes" contador={1} />
      <FiltroCard legenda="importantes" contador={1} />
      <FiltroCard legenda="normal" contador={1} />
      <FiltroCard ativo legenda="todas" contador={9} />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
