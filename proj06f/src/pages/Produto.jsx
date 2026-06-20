import React from "react";
import { useParams } from "react-router-dom"

import Navegacao from "../components/Navegacao";
import Exibidor from "../components/Exibidor";

import ProdutosExemplo from "../datas/ProdutosExemplo";

export default function Produto() {
    const { codigo } = useParams()
    
    const produtoEncontrado = ProdutosExemplo.find((produto) => produto.codigo == produto) || {}

    return(
        <>
        <Navegacao titulo="Vitrine" >
                    <a href="/"> Início </a>
                    <a href="/Promocao"> Promocao </a>
                    <a href="/Carrinho"> Carrinho </a>
                </Navegacao>

            < Exibidor produto={ProdutoEncontrado}/>
        </>
    )
}