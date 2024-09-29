

import img1Banner from "../../assets/images/imgBanner (1).png"
import img1BannerCel from "../../assets/images/semFundoBannerCel.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"



export default function Banner(){

    const textoLinha1 = "Limpeza de obras em"
    const textoLinha2 = "Guarulhos com Excelência"


    gsap.registerPlugin(useGSAP)


    useGSAP(() => {
        let textAnimation1 = gsap.timeline();
        textAnimation1.from('.text', {
         y: 100,
         stagger: { 
          each: 0.07 
         }
        });

        let textAnimation2 = gsap.timeline();
        textAnimation2.from('.text2', {
            delay: 0.3,
         y: 100,
         stagger: { 
          each: 0.07 
         }
        });

    }) 



    return(
        <div className="lg:fundoBanner fundoBannerCel h-screen bg-[#f9faff] relative overflow-hidden flex lg:px-14 px-4 py-10 w-full ">{/*e1f6ff COLOQUEI H-SCREEN AQUI NO MOBILE TBM ANTES TAVA LG:H-SCREEN*/}
            <div className=" flex lg:flex-row flex-col w-full relative z-10">
                <div className="flex flex-col items-center lg:items-stretch text-[#0c2236] lg:w-[55vw] lg:h-screen justify-center">
                    <div className=' font-Fahk text-center lg:text-start 2xl:[font-size:65px] 2xl:[line-height:70px] xl:[font-size:55px] xl:[line-height:60px] lg:[font-size:40px] lg:[line-height:45px] min-[400px]:[font-size:30px] min-[400px]:[line-height:33px] [font-size:25px] [line-height:30px] lg:[letter-spacing:-3px] [letter-spacing:-1.5px] lg:mb-6 mb-3'>
                        <div className=" overflow-hidden flex lg:justify-start justify-center texto1 text-center">{/* SEM O FLEX A ANIMAÇÃO N FUNCIONA */}
                            {
                                textoLinha1.split("").map(item => {
                                    if(item == " "){
                                        return <span className="text">&nbsp;</span>
                                    }else{
                                        return <span className="text">{item}</span>
                                    }
                                })
                            }
                        </div>
                        <div className=" overflow-hidden flex lg:justify-start justify-center">
                            {
                                textoLinha2.split("").map(item => {
                                    if(item == " "){
                                        return <span className="text2">&nbsp;</span>
                                    }else{
                                        return <span className="text2">{item}</span>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className=' lg:text-xl text-center lg:text-start opacity-70 max-w-[600px] w-full mb-12'>
                        Finalizamos a Limpeza da Sua Obra para Garantir uma Entrega Perfeita. Atendimento Rápido e de Qualidade em Guarulhos.
                    </div>
                    <div className=' lg:self-start self-center relative group cursor-pointer'>
                        <div className='absolute rounded-full inset-0 border-[#dbeaf5] border-2 border-solid lg:translate-x-3 translate-x-2 lg:translate-y-3 translate-y-2 z-20'></div>
                        <div className='rounded-full px-12 py-4 text-center bg-white relative z-30 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500 ease-in-out'>
                            Solicite seu Orçamento Grátis Agora
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-end pb-16 lg:w-[45vw] w-full lg:h-screen relative -order-1 lg:order-1'>
                    <div className=''>
                        {/*<div className='w-[60vw] h-[65vh] absolute left-0 top-1/2 -translate-y-1/2'>
                            <img className='w-full h-full object-cover rounded-full [object-position:center_-200px]' src={img1Banner} alt="imagem limpeza 1" />
                        </div>*/}
                        <div className='hidden lg:block h-[85vh] w-auto self-end'>
                            <img className='w-full h-full object-cover' src={img1Banner} alt="imagem limpeza 1" />
                        </div>
                        <div className='lg:hidden w-full'>
                            <img className='w-full h-auto sm:h-[50vh] sm:w-auto object-cover' src={img1BannerCel} alt="imagem banner homem limpando o chão" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}