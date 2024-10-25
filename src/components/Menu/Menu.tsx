import { RefObject, useEffect, useState } from "react";

type Props = {
  servicosRef: RefObject<HTMLDivElement>,
  servicosMobileRef: RefObject<HTMLDivElement>,
  projetosRef: RefObject<HTMLDivElement>,
  beneficiosRef: RefObject<HTMLDivElement>,
  depoimentosRef: RefObject<HTMLDivElement>,
}

export default function Menu({servicosRef, servicosMobileRef, projetosRef, beneficiosRef, depoimentosRef}: Props){

    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)


    let menuItens = [
      {nome: "Início", onClickFn: () => {}},
      {nome: "Serviços", onClickFn: cliqueServicos },
      {nome: "Benfícios", onClickFn: cliqueBeneficios },
      {nome: "Depoimentos", onClickFn: cliqueDepoimentos},
      {nome: "Projetos", onClickFn: cliqueProjetos },
  ]

  
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }
  
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
  
      // cleanup function
      return () => {
         window.removeEventListener('scroll', controlNavbar);
      };
    }, [lastScrollY]);



    function cliqueServicos(){
        if(window.innerWidth >= 1024){
          if(servicosRef){
            servicosRef.current?.scrollIntoView({
                behavior: "smooth"
            })
          } 
        }else{
          if(servicosMobileRef){
            servicosMobileRef.current?.scrollIntoView({
                behavior: "smooth"
            })
          }
        }
    }

  function cliqueProjetos(){
      if(projetosRef){
          projetosRef.current?.scrollIntoView({
              behavior: "smooth"
          })
      }
  }

  function cliqueBeneficios(){
      if(beneficiosRef){
          beneficiosRef.current?.scrollIntoView({
              behavior: "smooth"
          })
      }
  }

  function cliqueDepoimentos(){
      if(depoimentosRef){
          depoimentosRef.current?.scrollIntoView({
              behavior: "smooth"
          })
      }
  }



    return(
        <div style={{animationFillMode: "forwards"}} className={`hidden lg:flex fixed top-5 gap-8 left-1/2 -translate-x-1/2 text-cinzaTexto z-50 ${show? "animate-entrarMenu" : "animate-sairMenu"} px-12 py-4 rounded-full bg-white [box-shadow:0px_5px_10px_#ddd]`}>
            {
              menuItens.map(item => <div className="px-2 cursor-pointer" onClick={item.onClickFn}>{item.nome}</div>)
            }
        </div>
    )
}