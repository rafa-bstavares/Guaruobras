import Titulo from "../Titulo/Titulo"
import aspas from "../../assets/images/aspasGuaru.svg"
import estrela from "../../assets/images/estrelaGuaru.svg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"



export default function Depoimentos(){

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

    const fundoAnim = useRef(null)
    const containerDep = useRef(null)

    useGSAP(() => {
        ScrollTrigger.normalizeScroll(true)

        gsap.to(fundoAnim.current, {
            scrollTrigger: {
                trigger: containerDep.current,
                start: "50% bottom"
            },
            clipPath: "circle(100% at 50% 50%)",
            duration: 1.5
        })
    })


    return(
        <div ref={containerDep} className="w-full flex flex-col bg-[#dbeaf6] text-cinzaTexto">
            <div className="flex flex-col lg:px-paddingXGeral px-paddingXCel pt-pTopGeral lg:pb-pBottomGeral pb-pBottomCel relative">
                <div ref={fundoAnim} className="flex flex-col lg:items-start items-center absolute inset-0 fundoCarta z-30 px-paddingXGeral pt-pTopGeral pb-pBottomGeral [will-change:clip-path] [clip-path:circle(0%_at_50%_50%)]">
                    <Titulo txtBranco={true} titulo="Depoimentos"/>
                </div>
                <div className="w-full flex lg:justify-start justify-center">
                    <Titulo txtBranco={false} titulo="Depoimentos"/>
                </div>
                <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-24 justify-between mt-48 relative z-40">
                    <div className="flex gap-2 flex-col items-center lg:w-[24vw] w-full bg-white rounded-2xl px-6 pb-6 pt-20 relative">
                        <div className="absolute lg:w-[8vw] w-[30vw] aspect-square rounded-full p-4 bg-white top-0 left-1/2 -translate-x-1/2 lg:-translate-y-2/3 -translate-y-[55%] [box-shadow:0px_10px_10px_#ccc]">
                            <img className="w-full aspect-square" src={aspas} alt="" />
                        </div>
                        <div className="text-sm italic text-center mb-4">
                            “A Guarulhos Obra Limpa me salvou! Precisava liberar o espaço da obra o mais rápido possível e eles foram super eficientes. A equipe chegou no horário marcado e levou todo o entulho em pouco tempo. Recomendo de olhos fechados!”
                        </div>
                        <div className="flex gap-2">
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                        </div>
                        <div className="text-xl">
                            Lara Silva
                        </div>
                    </div>

                    <div className="flex gap-2 flex-col items-center lg:w-[24vw] w-full bg-white rounded-2xl px-6 pb-6 pt-20 relative ">
                        <div className="absolute lg:w-[8vw] w-[30vw] aspect-square rounded-full p-4 bg-white top-0 left-1/2 -translate-x-1/2 lg:-translate-y-2/3 -translate-y-[55%] [box-shadow:0px_10px_10px_#ccc]">
                            <img className="w-full aspect-square" src={aspas} alt="" />
                        </div>
                        <div className="text-sm italic text-center mb-4">
                            “Fiquei muito satisfeita com o serviço da Guarulhos Obra Limpa. Além de serem rápidos e eficientes, eles se preocupam com o meio ambiente e realizam a destinação correta dos resíduos. Recomendo para quem busca um serviço de qualidade e responsável.”
                        </div>
                        <div className="flex gap-2">
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                        </div>
                        <div className="text-xl">
                            Ana Maria
                        </div>
                    </div>

                    <div className="flex gap-2 flex-col items-center lg:w-[24vw] w-full bg-white rounded-2xl px-6 pb-6 pt-20 relative">
                        <div className="absolute lg:w-[8vw] w-[30vw] aspect-square rounded-full p-4 bg-white top-0 left-1/2 -translate-x-1/2 lg:-translate-y-2/3 -translate-y-[55%] [box-shadow:0px_10px_10px_#ccc]">
                            <img className="w-full aspect-square" src={aspas} alt="" />
                        </div>
                        <div className="text-sm italic text-center mb-4">
                            “A equipe da Guarulhos Obra Limpa é muito profissional e organizada. Chegaram no horário marcado, deixaram o espaço totalmente limpo e pronto para a próxima etapa da obra. Adorei o serviço e com certeza recomendo”
                        </div>
                        <div className="flex gap-2">
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                            <img className="w-3 aspect-square object-cover" src={estrela} alt="" />
                        </div>
                        <div className="text-xl">
                            Pedro Santos
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}