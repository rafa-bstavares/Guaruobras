
import Banner from './components/Banner/Banner'
import Menu  from './components/Menu/Menu'
import Servicos from './components/Servicos/Servicos'
import ServicosCel from './components/ServicosCel/ServicosCel'
import Beneficios from './components/Beneficios/Beneficios'
import Depoimentos from './components/Depoimentos/Depoimentos'
import Bairros from './components/Bairros/Bairros'
import wppIcone from "./assets/images/wppIconeBranco.svg"
import Footer from './components/Footer/Footer'
import { useRef } from 'react'

function App() {

  const servicosRef = useRef<HTMLDivElement>(null)
  const servicosMobileRef = useRef<HTMLDivElement>(null)
  const projetosRef = useRef<HTMLDivElement>(null)
  const beneficiosRef = useRef<HTMLDivElement>(null)
  const depoimentosRef = useRef<HTMLDivElement>(null)

  return (
    <div className='flex flex-col items-center relative font-Roboto text-cinzaTexto overflow-hidden'>
      <a className='fixed bottom-4 right-4 z-50' href="https://wa.me/5511953574160" target='_blank'>
        <div className='w-12 h-12 rounded-full p-3 bg-[#116330]'>
          <img className='w-full h-auto' src={wppIcone} alt="icone whatsapp" />
        </div>
      </a>
      <Menu servicosMobileRef={servicosMobileRef} servicosRef={servicosRef} projetosRef={projetosRef} beneficiosRef={beneficiosRef} depoimentosRef={depoimentosRef}/>
      <Banner/>
      <Servicos servicosRef={servicosRef}/>
      <ServicosCel servicosMobileRef={servicosMobileRef}/>
      <Bairros/>
      <Beneficios beneficiosRef={beneficiosRef}/>
      <Depoimentos depoimentosRef={depoimentosRef}/>
      <Footer/>
    </div>
  )
}

export default App
