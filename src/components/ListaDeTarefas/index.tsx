import Tarefa from '../Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Ver a aula 3',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar JS',
    descricao: 'Ver a aula 5',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Estudar Italiano',
    descricao: 'Ver a aula 9',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
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

export default ListaDeTarefas
