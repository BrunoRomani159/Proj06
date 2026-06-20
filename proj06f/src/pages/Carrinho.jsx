import React, { useState, useEffect } from "react";

import Navegacao from "../components/Navegacao";
import Janela from "../components/Janela";


export default function Carrinho() {
    const [carrinho, definirCarrinho] = useState([]);
    const [preco, definirPreco] = useState(0);
    return (
        <>
        <Navegacao titulo="CARRINHO">
                        <a href="/"> Início </a>
                        <a href="/promocao"> Promoção </a>
                        <a href="/carrinho"> Carrinho </a>
                    </Navegacao>

                    <Janela>
                        <h1>Total R$ 6700,00</h1>
                        <table width= "100%">
                            <tbody>
                                <tr>
                                    <th>Código</th>
                                    <th>Modelo</th>
                                    <th>Preço</th>
                                </tr>
                            </tbody>
                        </table>
                    </Janela>
        </>
    )
}