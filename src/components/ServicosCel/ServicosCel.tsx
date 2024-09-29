import { useRef } from "react"
import Titulo from "../Titulo/Titulo"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import casaImg from "../../assets/images/casaImgServicos.jpg"
import aptImg from "../../assets/images/aptoServicos.jpg"
import condoImg from "../../assets/images/condoServicos.jpg"
import escritorioImg from "../../assets/images/escritorioServicos.jpg"
import entulhoImg from "../../assets/images/entulhoServicos.jpg"
import comercioImg from "../../assets/images/comercioServicos.jpg"





export default function ServicosCel(){

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

    const containerPinado = useRef(null)
    const containerGeral = useRef(null)
    const containerImgs = useRef(null)
    const containerTxts = useRef(null)
    const img1 = useRef(null)
    const img2 = useRef(null)
    const img3 = useRef(null)
    const img4 = useRef(null)
    const img5 = useRef(null)
    const img6 = useRef(null)


    useGSAP(() => {



        const tl = gsap.timeline({
            ease: "none",
            scrollTrigger: {
                trigger: containerGeral.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
                pin: containerPinado.current
            }
        })

        tl
            .to(containerTxts.current, {
                ease: "none",
                transform: "translateX(0)",
                duration: 1
            })
            .to(img2.current, {
                ease: "none",
                transform: "translateX(0%)",
                duration: 0.2
            }, "<")
            .to(img3.current, {
                ease: "none",
                transform: "translateX(0%)",
                duration: 0.2
            }, ">")
            .to(img4.current, {
                ease: "none",
                transform: "translateX(0%)",
                duration: 0.2
            }, ">")
            .to(img5.current, {
                ease: "none",
                transform: "translateX(0%)",
                duration: 0.2
            }, ">")
            .to(img6.current, {
                ease: "none",
                transform: "translateX(0%)",
                duration: 0.2
            }, ">")




    })


    return(
        <div ref={containerGeral} className="lg:hidden flex flex-col fundoServicosCel w-full pb-pBottomCel h-[600vh] relative">
            <div ref={containerPinado} className="h-screen flex flex-col w-[90vw] m-[0_auto]">
                <div className="w-full flex justify-center py-12">
                    <Titulo titulo="Serviços" txtBranco={false}/>
                </div>
                <div className="flex flex-col h-full">
                    <div className="h-full flex flex-col mt-20 gap-20">
                        <div className="flex py-4 rounded-xl bg-white/30 justify-center">
                            <div className="w-[80vw] flex overflow-hidden">
                                <div ref={containerImgs} className="flex relative ">
                                    <img ref={img1} className="[will-change:transform] rounded-xl w-[80vw] aspect-video object-cover" src={casaImg} alt="" />
                                    <img ref={img2} className="[will-change:transform] rounded-xl w-[80vw] aspect-video object-cover absolute right-0 [transform:translateX(100%)]" src={aptImg} alt="" />
                                    <img ref={img3} className="[will-change:transform] rounded-xl w-[80vw] aspect-video object-cover absolute right-0 [transform:translateX(100%)]" src={escritorioImg} alt="" />
                                    <img ref={img4} className="[will-change:transform] rounded-xl w-[80vw] aspect-video object-cover absolute right-0 [transform:translateX(100%)]" src={condoImg} alt="" />
                                    <img ref={img5} className="[will-change:transform] rounded-xl w-[80vw] aspect-video object-cover absolute right-0 [transform:translateX(100%)]" src={comercioImg} alt="" />
                                    <img ref={img6} className="[will-change:transform] rounded-xl w-[80vw] aspect-video object-cover absolute right-0 [transform:translateX(100%)]" src={entulhoImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex h-20 ">
                            <div ref={containerTxts} className="flex [transform:translateX(-100%)_translateX(90vw)] [will-change:transform]">
                                <div className="w-[90vw] px-4 py-2 flex flex-col">
                                <div className="text-center text-xl">
                                        Remoção de <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">entulho</span> em guarulhos
                                    </div>
                                    <div className="text-center mt-4 w-full opacity-70">
                                        Não se preocupe com a sujeira da obra! Nossa equipe realiza a remoção de entulho de forma rápida e eficiente, deixando seu espaço livre e limpo.
                                    </div>

                                </div>
                                <div className="w-[90vw] px-4 py-2 flex flex-col">
                                    <div className="text-center text-xl">
                                        Limpeza pós obra em <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">comércios</span>
                                    </div>
                                    <div className="text-center mt-4 w-full opacity-70">
                                        Abra as portas do seu comércio com a certeza de um ambiente limpo e higiênico. Nossa limpeza pós-obra prepara seu negócio para o sucesso.
                                    </div>

                                </div>
                                <div className="w-[90vw] px-4 py-2 flex flex-col">
                                    <div className="text-center text-xl">
                                        Limpeza pós obra em <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">condomínios</span>
                                    </div>
                                    <div className="text-center mt-4 w-full opacity-70">
                                        Garanta a satisfação dos moradores com uma limpeza pós-obra completa em seu condomínio. Áreas comuns e unidades autônomas impecáveis.
                                    </div>

                                </div>
                                <div className="w-[90vw] px-4 py-2 flex flex-col">

                                    <div className="text-center text-xl">
                                        Limpeza pós obra em <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">escritórios</span>
                                    </div>
                                    <div className="text-center mt-4 w-full opacity-70">
                                        Crie um ambiente de trabalho produtivo e agradável com nossa limpeza pós-obra profissional. Entregamos seu escritório limpo e organizado em tempo recorde.
                                    </div>

                                </div>
                                <div className="w-[90vw] px-4 py-2 flex flex-col">

                                    <div className="text-center text-xl">
                                        Limpeza pós obra em <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">apartamentos</span>
                                    </div>
                                    <div className="text-center mt-4 w-full opacity-70">
                                        Transforme seu apartamento em um lar aconchegante! Nossa limpeza pós-obra é rápida, eficiente e garante um ambiente impecável.
                                    </div>

                                </div>
                                <div className="w-[90vw] px-4 py-2 flex flex-col">
                                    <div className="text-center text-xl">
                                        Limpeza pós obra em <br/><span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">casas</span>
                                    </div>
                                    <div className="text-center mt-4 w-full opacity-70">
                                        Sua casa merece um cuidado especial. Conte com nossa limpeza pós-obra para remover toda a sujeira e deixar sua casa pronta para ser habitada.
                                    </div>

                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}