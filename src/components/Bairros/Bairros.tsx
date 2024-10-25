import Titulo from "../Titulo/Titulo"
import ItemFaq from "../ItemFaq/ItemFaq"

export default function Bairros(){


    const Faqs = [
        {
            pergunta: "Várzea do Palácio", 
            resposta: "Vila Augusta,  Vila Fátima, Vila Barros, Vila Galvão"
        },
        {
            pergunta: "Bananal", 
            resposta: "Vila Rio de Janeiro, Bela Vista, Bom Clima e Bonsucesso."
        },
        {
            pergunta: "Cabuçu", 
            resposta: "Cabuçu de Cima, Capelinha, CECAP, Centro, Cidade Aracíli"
        },
        {
            pergunta: "Cocaia", 
            resposta: "Cumbica, Fortaleza, Gopoúva, Invernada."
        },
        {
            pergunta: "Itaim", 
            resposta: "Itapegica, Jardim Presidente Dutra, Lavras e Macedo"
        },
        {
            pergunta: "Maia", 
            resposta: "Monte Carmelo, Morro Grande, Paraventi e Parque Continental."
        },
        {
            pergunta: "Picanço", 
            resposta: "Pimentas, Ponte Grande, Prto da Igreja e Sadokim."
        },
        {
            pergunta: "São João", 
            resposta: "São Roque, Taboão, Tanque Grande e Torres Tibagy."
        },
        {
            pergunta: "Cumbica", 
            resposta: "Cidade Jardim Cumbica , Jardim São Manoel – Conjunto Residencial Paes de Barros , Jardim Cumbica , Vila Nova Cumbica , Parque Uirapuru, Jardim Santa Helena , Jardim Ottawa, Jardim das Nações, Cidade Industrial Satélite de São Paulo – Cidade Satélite de Cumbica, Parque Industrial Cumbica."
        },
        {
            pergunta: "Bonsucesso", 
            resposta: "Vila Bonsucesso, Jardim Ponte Alta, Vila Carmela, Residencial Parque Cumbica, Vila Nova Bonsucesso, Jardim Triunfo, Jardim Fátima, Jardim Nossa Senhora de Aparecida, Jardim Hanna, Jardim Campestre, Cidade Parque Alvorada, Cidade Parque Brasília, Jardim Silvestre e Jardim Albertina."
        },
        {
            pergunta: "Centro de Guarulhos", 
            resposta: "Centro Histórico e Comercial, Vila Progresso, Jardim Zaira, Jardim Gumercindo e Jardim Guarulhos, Jardim Santa Francisca, Vila das Palmeiras, Jardim São Paulo."
        },
        {
            pergunta: "Pimentas", 
            resposta: "Jardim Pimentas, Parque Jurema, Jardim Nova Cidade, Conjunto Marcos Freire, Vila Paraíso, Parque Estela, Jardim Angélica, Jardim Santa Maria, Jardim Guilhermino, Jardim Brasil, Jardim Bela Vista, Parque das Nações, Jardim Silvestre, Jardim Paulista, Jardim Leblon, Parque Centenário, Vila Izabel, Vila Alzira, Parque São Miguel, Jardim Santo Afonso, Jardim Arujá, Jardim Dona Luisa, Jardim Tupinambá, Jardim Arapongas, Jardim Oliveira, Jardim Normandia, Jardim Ferrão, Jardim Carvalho, Jardim Rodolfo, Vila Itaí, Jardim Ansalca, Sítio São Francisco, Parque Jandaia, Parque Maria Helena, Maria de Loudres, Vila São Gabriel, Jardim Vermelhão, Vila Any , Tijuco Preto."
        },
    ]

    return (
        <div className="flex flex-col w-full bg-[#dbe9f5] lg:px-paddingXGeral px-paddingXCel pt-pTopGeral lg:pb-pBottomGeral pb-pBottomCel relative z-30">
        <div className="lg:hidden h-[150px] [background:linear-gradient(to_top,#dbeaf6,transparent)] absolute top-0 -translate-y-[96%] left-0 right-0 "></div>
        <div className="w-full flex lg:justify-start justify-center">
            <Titulo txtBranco={false} titulo="Bairros"/>
        </div>
        <div className="flex lg:flex-row flex-col border-solid mt-24 overflow-hidden">
            <div className="w-full border-t-2 border-solid border-[#fffeee]">
                {Faqs.map(item => <ItemFaq pergunta={item.pergunta} resposta={item.resposta} />)}
            </div>
        </div>

    </div>
    )
}