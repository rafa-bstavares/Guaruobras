
import Banner from './components/Banner/Banner'
import Menu  from './components/Menu/Menu'
import Servicos from './components/Servicos/Servicos'
import ServicosCel from './components/ServicosCel/ServicosCel'
import Beneficios from './components/Beneficios/Beneficios'
import Depoimentos from './components/Depoimentos/Depoimentos'

function App() {


  return (
    <div className='flex flex-col items-center relative font-Roboto text-cinzaTexto overflow-hidden'>
      <Menu/>
      <Banner/>
      <Servicos/>
      <ServicosCel/>
      <Beneficios/>
      <Depoimentos/>
    </div>
  )
}

export default App
