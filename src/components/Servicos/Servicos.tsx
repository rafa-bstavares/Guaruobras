import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import casaImg from "../../assets/images/casaImgServicos.jpg"
import aptImg from "../../assets/images/aptoServicos.jpg"
import condoImg from "../../assets/images/condoServicos.jpg"
import escritorioImg from "../../assets/images/escritorioServicos.jpg"
import entulhoImg from "../../assets/images/entulhoServicos.jpg"
import comercioImg from "../../assets/images/comercioServicos.jpg"
import Titulo from "../Titulo/Titulo"

import { RefObject, useRef } from "react"

type Props = {
    servicosRef: RefObject<HTMLDivElement>
}


export default function Servicos({servicosRef}: Props){

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP)

    const pinImgsContainer = useRef(null)
    const containerImgs = useRef(null)
    const containerTextos = useRef(null)
    const texto1 = useRef(null)
    const img1 = useRef(null)
    const texto2 = useRef(null)
    const img2 = useRef(null)
    const texto3 = useRef(null)
    const img3 = useRef(null)
    const texto4 = useRef(null)
    const texto5 = useRef(null)
    const texto6 = useRef(null)
    const img4 = useRef(null)
    const img5 = useRef(null)
    const img6 = useRef(null)
    const linhaTempo = useRef(null)
    const checkPt1 = useRef(null)
    const checkPt2 = useRef(null)
    const checkPt3 = useRef(null)
    const checkPt4 = useRef(null)
    const checkPt5 = useRef(null)


    const vh = (coef: number) => window.innerHeight * (coef/100);

    useGSAP(() => {
        ScrollTrigger.normalizeScroll(true)

        gsap.to(pinImgsContainer.current, {
            scrollTrigger: {
                trigger: servicosRef.current,
                start: "top top",
                end: "105% bottom",
                pin: pinImgsContainer.current
            }
        })
        

        gsap.to(img2.current, {
            scrollTrigger: {
                trigger: texto1.current,
                start: "20% top",
                end: "80% top",
                scrub: 1
            },
            top: "100%"
        })

        
        gsap.to(img3.current, {
            scrollTrigger: {
                trigger: texto2.current,
                start: "20% top",
                end: "80% top",
                scrub: 1
            },
            top: "100%"
        })

        gsap.to(img4.current, {
            scrollTrigger: {
                trigger: texto3.current,
                start: "20% top",
                end: "80% top",
                scrub: 1
            },
            top: "100%"
        })

        gsap.to(img5.current, {
            scrollTrigger: {
                trigger: texto4.current,
                start: "20% top",
                end: "80% top",
                scrub: 1
            },
            top: "100%"
        })

        gsap.to(img6.current, {
            scrollTrigger: {
                trigger: texto5.current,
                start: "20% top",
                end: "80% top",
                scrub: 1
            },
            top: "100%"
        })

        gsap.to(linhaTempo.current, {
            ease: "none",
            scrollTrigger: {
                trigger: servicosRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            },
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"
        })


        gsap.to(checkPt1.current, {
            scrollTrigger: {
                trigger: servicosRef.current,
                start: vh(58) + " top",
                toggleActions: "restart none none none"
            },
            clipPath: "circle(100% at 50% 50%)"
        })

        gsap.to(checkPt2.current, {
            scrollTrigger: {
                trigger: servicosRef.current,
                start: vh(114) + " top",
                toggleActions: "restart none none none"
            },
            clipPath: "circle(100% at 50% 50%)"
        })

        gsap.to(checkPt3.current, {
            scrollTrigger: {
                trigger: servicosRef.current,
                start: vh(172) + " top",
                toggleActions: "restart none none none"
            },
            clipPath: "circle(100% at 50% 50%)"
        })

        gsap.to(checkPt4.current, {
            scrollTrigger: {
                trigger: servicosRef.current,
                start: vh(228) + " top",
                toggleActions: "restart none none none"
            },
            clipPath: "circle(100% at 50% 50%)"
        })

        gsap.to(checkPt5.current, {
            scrollTrigger: {
                trigger: servicosRef.current,
                start: vh(285) + " top",
                toggleActions: "restart none none none"
            },
            clipPath: "circle(100% at 50% 50%)"
        })


    })


    return(
        <div ref={servicosRef} className="lg:flex hidden flex-col fundoServicos w-full relative px-paddingXGeral pt-pTopGeral pb-pBottomGeral text-cinzaTexto ">
            <Titulo txtBranco={false} titulo="Serviços"/>
            <div className="absolute left-0 right-0 top-0 h-[200px] [background:linear-gradient(transparent,#dbeaf6)] -translate-y-full"></div>
            <div className="flex ">
                <div ref={containerTextos} className="w-1/2 flex flex-col relative">
                    <div className="absolute top-[30vh] bottom-[30vh] left-4 w-1 bg-[#659bb3]/20 rounded-full">
                        <div className="w-full h-[60vh]  relative">
                            <div className="absolute z-50 w-3 aspect-square rounded-full bg-[rgb(123,190,219)] [background:radial-gradient(#659bb3,rgba(101,156,179,0.1))] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 [box-shadow:0px_0px_10px_#659bb3]"></div>
                            <div ref={checkPt1} className="absolute z-50 w-3 aspect-square rounded-full [background:radial-gradient(#659bb3,rgba(101,156,179,0.1))] [clip-path:circle(0%_at_50%_50%)] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 [box-shadow:0px_0px_10px_#659bb3]"></div>
                        </div>
                        <div className="w-full h-[60vh]  relative">
                            <div ref={checkPt2} className="absolute z-50 w-3 aspect-square rounded-full [background:radial-gradient(#659bb3,rgba(101,156,179,0.1))] [clip-path:circle(0%_at_50%_50%)] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 [box-shadow:0px_0px_10px_#659bb3]">
                        </div>
                        </div>
                        <div className="w-full h-[60vh]  relative">
                            <div ref={checkPt3} className="absolute z-50 w-3 aspect-square rounded-full [background:radial-gradient(#659bb3,rgba(101,156,179,0.1))] [clip-path:circle(0%_at_50%_50%)] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 [box-shadow:0px_0px_10px_#659bb3]">
                        </div>
                        </div>
                        <div className="w-full h-[60vh]  relative">
                            <div ref={checkPt4} className="absolute z-50 w-3 aspect-square rounded-full [background:radial-gradient(#659bb3,rgba(101,156,179,0.1))] [clip-path:circle(0%_at_50%_50%)] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 [box-shadow:0px_0px_10px_#659bb3]">
                        </div>
                        </div>
                        <div className="w-full h-[60vh]  relative">
                            <div ref={checkPt5} className="absolute z-50 w-3 aspect-square rounded-full [background:radial-gradient(#659bb3,rgba(101,156,179,0.1))] [clip-path:circle(0%_at_50%_50%)] bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 [box-shadow:0px_0px_10px_#659bb3]">
                        </div>
                        </div>
                    </div>
                    <div ref={linhaTempo} className="absolute top-[30vh] bottom-[30vh] left-4 w-1 bg-[#659bb3] [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)] rounded-full">

                    </div>
                    <div ref={texto1} className="ml-36 flex flex-col justify-center h-[60vh] ">
                        <div className="text-cinzaTexto text-2xl mb-6">
                            Limpeza pós obra em <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">casas</span>
                        </div>
                        <div className="opacity-80 text-cinzaTexto w-4/5">
                            Sua casa merece um cuidado especial. Conte com nossa limpeza pós-obra para remover toda a sujeira e deixar sua casa pronta para ser habitada.
                        </div>
                    </div>
                    <div ref={texto2} className=" ml-36 flex flex-col justify-center h-[60vh]">
                        <div className="text-cinzaTexto text-2xl mb-6">
                            Limpeza pós-obra em <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">apartamentos</span>
                        </div>
                        <div className="opacity-70 text-cinzaTexto w-4/5">
                            Transforme seu apartamento em um lar aconchegante! Nossa limpeza pós-obra é rápida, eficiente e garante um ambiente impecável.
                        </div>
                    </div>
                    <div ref={texto3} className="ml-36 flex flex-col justify-center  h-[60vh]">
                        <div className="text-cinzaTexto text-2xl mb-6">
                            Limpeza pós-obra em <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">escritórios</span>
                        </div>
                        <div className="opacity-70 text-cinzaTexto w-4/5">
                            Crie um ambiente de trabalho produtivo e agradável com nossa limpeza pós-obra profissional. Entregamos seu escritório limpo e organizado em tempo recorde.
                        </div>
                    </div>
                    <div ref={texto4} className="ml-36 flex flex-col justify-center  h-[60vh]">
                        <div className="text-cinzaTexto text-2xl mb-6">
                            Limpeza pós-obra em <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">condomínios</span>
                        </div>
                        <div className="opacity-70 text-cinzaTexto w-4/5">
                            Garanta a satisfação dos moradores com uma limpeza pós-obra completa em seu condomínio. Áreas comuns e unidades autônomas impecáveis.
                        </div>
                    </div>
                    <div ref={texto5} className="ml-36 flex flex-col justify-center  h-[60vh]">
                        <div className="text-cinzaTexto text-2xl mb-6">
                            Limpeza pós-obra em <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">comércios</span>
                        </div>
                        <div className="opacity-70 text-cinzaTexto w-4/5">
                            Abra as portas do seu comércio com a certeza de um ambiente limpo e higiênico. Nossa limpeza pós-obra prepara seu negócio para o sucesso.
                        </div>
                    </div>
                    <div ref={texto6} className="ml-36 flex flex-col justify-center  h-[60vh]">
                        <div className="text-cinzaTexto text-2xl mb-6">
                            Remoção de <span className="font-Fahk uppercase text-3xl font-bold fundoCarta [background-clip:text] [color:transparent]">entulho</span> em guarulhos
                        </div>
                        <div className="opacity-70 text-cinzaTexto w-4/5">
                            Não se preocupe com a sujeira da obra! Nossa equipe realiza a remoção de entulho de forma rápida e eficiente, deixando seu espaço livre e limpo.
                        </div>
                    </div>
                </div>
                <div style={{animationFillMode: "forwards"}} ref={pinImgsContainer} className="w-1/2 h-[60vh] flex justify-center items-center">
                    <div ref={containerImgs} className="flex justify-center items-center bg-white/30 rounded-2xl w-[30vw] h-[20vw]  overflow-hidden">
                        <div className="w-4/5 h-4/5 overflow-hidden relative rounded-2xl">
                            <img ref={img1} className="w-full h-full object-cover rounded-2xl" src={casaImg} alt="" />
                            <img ref={img2} className="w-[24vw] h-[16vw] object-cover absolute top-0 -translate-y-full rounded-2xl" src={aptImg} alt="" />
                            <img ref={img3} className="w-[24vw] h-[16vw] object-cover absolute top-0 -translate-y-full rounded-2xl" src={escritorioImg} alt="" />
                            <img ref={img4} className="w-[24vw] h-[16vw] object-cover absolute top-0 -translate-y-full  rounded-2xl" src={condoImg} alt="" />
                            <img ref={img5} className="w-[24vw] h-[16vw] object-cover absolute top-0 -translate-y-full  rounded-2xl" src={comercioImg} alt="" />
                            <img ref={img6} className="w-[24vw] h-[16vw] object-cover absolute top-0 -translate-y-full  rounded-2xl" src={entulhoImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}