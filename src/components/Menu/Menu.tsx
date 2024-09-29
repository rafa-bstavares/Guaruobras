import { useEffect, useState } from "react";



export default function Menu(){

    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
  
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




    return(
        <div style={{animationFillMode: "forwards"}} className={`hidden lg:flex fixed top-5 gap-8 left-1/2 -translate-x-1/2 text-cinzaTexto z-50 ${show? "animate-entrarMenu" : "animate-sairMenu"} px-12 py-4 rounded-full bg-white [box-shadow:0px_5px_10px_#ddd]`}>
            <div className="px-2">
                Início
            </div>
            <div className="px-2">
                Serviços
            </div>
            <div className="px-2">
                Benefícios
            </div>
            <div className="px-2">
                Depoimentos
            </div>
            <div className="px-2">
                Projetos
            </div>
        </div>
    )
}