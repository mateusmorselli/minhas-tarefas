import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'estudar JS',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'estudar TS',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'rever aula 2',
      2
    ),
    new Tarefa(
      'estudar Banco de Dados',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      '',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
