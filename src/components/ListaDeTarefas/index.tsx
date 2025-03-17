import { useSelector } from 'react-redux'
import { Container } from './styles'
import Tarefa from '../Tarefa'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        {filtraTarefas().map((t) => (
          <>
            <li>
              <Tarefa
                titulo={t.titulo}
                prioridade={t.prioridade}
                status={t.status}
                descricao={t.descricao}
                id={t.id}
              />
            </li>
          </>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
