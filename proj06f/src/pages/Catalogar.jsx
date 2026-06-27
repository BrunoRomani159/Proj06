import React, { useState } from "react";

import Formulario from "../components/Formulario";
import Navegacao from "../components/Navegacao";
import ProdutoInicial from "../datas/ProdutoInicial.js";

export default function Catalogar() {
    return (
        <>
        <Navegacao titulo="Catalogar">
            <a href="/"> Inicio</a>
            <a href="/Promoção"> Promoção</a>
            <a href="/Carrinho"> Carrinho</a>
        </Navegacao>
        
        </>
    )
}