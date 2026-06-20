import styled from "styled-components";

const Modelo = styled.div `
    background: #fff;
    margin: 32px 0;
    overflow: hiddden;
    padding: 32px;
`

export default function Janela(props) {
    return (
        <Modelo>
            {props.children}
        </Modelo>
    )
}