/* eslint-disable prettier/prettier */
import Tarefa from "../Tarefa"
import { Container } from "./styles"

const tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Ver a aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar JS',
    descricao: 'Ver a aula 5',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Estudar Italiano',
    descricao: 'Ver a aula 9',
    prioridade: 'importante',
    status: 'pendente'
  },
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: categoria e termo</p>
    <ul>
      {tarefas.map((t) => (
        <>
        <li>
          <Tarefa titulo={t.titulo} prioridade={t.prioridade} status={t.status} descricao={t.descricao} />
        </li>
        </>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
