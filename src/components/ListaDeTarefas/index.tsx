import { useSelector } from 'react-redux'
import { Container } from './styles'
import Tarefa from '../Tarefa'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>2 tarefas marcadas como: categoria e termo</p>
      <ul>
        {tarefas.map((t) => (
          <>
            <li>
              <Tarefa
                titulo={t.titulo}
                prioridade={t.prioridade}
                status={t.status}
                descricao={t.descricao}
              />
            </li>
          </>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
