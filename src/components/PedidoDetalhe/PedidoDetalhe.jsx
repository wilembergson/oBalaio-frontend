import React from 'react'
import './PedidoDetalhe.css'
import { Link } from 'react-router-dom'

function PedidoDetalhe(props){
    return(
        <div>
            <h1>ID = {props.id}</h1>
        </div>
    )
}

export default PedidoDetalhe