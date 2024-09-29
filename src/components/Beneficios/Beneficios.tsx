import Titulo from "../Titulo/Titulo"
import estrela from "../../assets/images/estrelaGuaru.svg"
import relogio from "../../assets/images/relogioGuaru.svg"
import raio from "../../assets/images/raioGuaru.svg"
import personalizadoImg from "../../assets/images/quebraCabGuaru.svg"

export default function Beneficios(){
    return (
        <div className="flex flex-col w-full bg-[#dbe9f5] lg:px-paddingXGeral px-paddingXCel pt-pTopGeral lg:pb-pBottomGeral pb-pBottomCel relative z-30">
            <div className="lg:hidden h-[150px] [background:linear-gradient(to_top,#dbeaf6,transparent)] absolute top-0 -translate-y-[96%] left-0 right-0 "></div>
            <div className="w-full flex lg:justify-start justify-center">
                <Titulo txtBranco={false} titulo="Benefícios"/>
            </div>
            <div className="flex lg:flex-row flex-col self-center justify-center lg:border-8 border-4 border-solid rounded-2xl border-[#f7fbff] mt-24 overflow-hidden">
                <div className="flex flex-col items-center lg:w-[18vw] w-full lg:h-[400px] lg:p-4 px-4 py-12 lg:gap-4 gap-2 lg:pt-[80px] rounded-2xl">
                    <div className="w-1/4 rounded-full overflow-hidden aspect-square fundoCarta p-3 mb-6">
                        <img className="w-full aspect-square" src={relogio} alt="icone relogio" />
                    </div>
                    <div className="font-Fahk text-[#486e7f] text-center text-xl">
                        Pontualidade na Entrega
                    </div>
                    <div className="text-lg text-[#486e7f] opacity-70 text-center">
                        Garantia de prazo para finalização da limpeza
                    </div>
                </div>
                <div className="flex flex-col items-center lg:w-[18vw] w-full lg:h-[400px] rounded-2xl fundoCarta lg:p-4 px-4 py-12 lg:gap-4 gap-2 lg:pt-[80px]">
                    <div className="w-1/4 rounded-full overflow-hidden aspect-square bg-white p-3 mb-6">
                        <img className="w-full aspect-square" src={estrela} alt="icone estrela" />
                    </div>
                    <div className="font-Fahk text-white text-center text-xl">
                        Equipe Especializada
                    </div>
                    <div className="text-lg text-white opacity-70 text-center">
                        Profissionais treinados para garantir a limpeza impecável
                    </div>
                </div>
                <div className="flex flex-col items-center lg:w-[18vw] w-full lg:h-[400px] lg:p-4 px-4 py-12 lg:gap-4 gap-2 lg:pt-[80px] rounded-2xl">
                    <div className="w-1/4 rounded-full overflow-hidden aspect-square fundoCarta p-3 mb-6">
                        <img className="w-full aspect-square" src={personalizadoImg} alt="icone quebra cabeça" />
                    </div>
                    <div className="font-Fahk text-[#486e7f] text-center text-xl">
                        Atendimento Personalizado
                    </div>
                    <div className="text-lg text-[#486e7f] opacity-70 text-center">
                        Soluções sob medida para cada obra
                    </div>
                </div>
                <div className="flex flex-col items-center lg:w-[18vw] w-full lg:h-[400px] rounded-2xl fundoCarta lg:p-4 px-4 py-12 lg:gap-4 gap-2 lg:pt-[80px]">
                    <div className="w-1/4 rounded-full overflow-hidden aspect-square bg-white p-3 mb-6">
                        <img className="w-full aspect-square" src={raio} alt="icone raio" />
                    </div>
                    <div className="font-Fahk text-white text-center text-xl">
                        Atendimento Rápido
                    </div>
                    <div className="text-lg text-white opacity-70 text-center">
                        Resposta ágil para atender as necessidades da obra
                    </div>
                </div>
            </div>

        </div>
    )
}