import React from "react";

import Principal from "../components/Principal.jsx";
import Navegacao from "../components/Navegacao.jsx";

import ProdutosExemplo from "../datas/ProdutosExemplo.js";

export default function Vitrine() {
    return (
        <>
            <Navegacao titulo="VITRINE">
                <a href="/"> Início </a>
                <a href="/promocao"> Promoção </a>
                <a href="/carrinho"> Carrinho </a>
            </Navegacao>
            
            <Principal produtos={ProdutosExemplo} />
        </>
    )
}