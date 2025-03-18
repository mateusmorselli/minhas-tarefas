import BarraLateral from '../../components/BarraLateral'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import ListaDeTarefas from '../../components/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
