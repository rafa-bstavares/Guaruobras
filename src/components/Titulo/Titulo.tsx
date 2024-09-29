
type Props = {
    titulo: string,
    txtBranco: boolean
}

export default function Titulo({titulo, txtBranco}: Props){
    return(
        <div className={`font-Fahk text-4xl relative self-start`}>
            <div className={`absolute inset-0 rounded-full ${txtBranco ? "border-[#659bb3]" : "border-white"} border-solid border-2 translate-y-4 translate-x-4`}>

            </div>
            <div className={`relative z-20 ${txtBranco? "text-white" : "text-cinzaTexto"}`}>{titulo}</div>
        </div>
    )
}