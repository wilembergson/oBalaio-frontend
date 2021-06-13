import axios from 'axios'
import React, { useState } from 'react'
import './ListaPedidos.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { BiDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import PedidoDetalhe from '../PedidoDetalhe/PedidoDetalhe'
import Service from '../../services/Service.js';

const initalPedido = {
    id: 0,
    itens: [],
    total: 0,
    date: ''
}

function ListaPedidos() {

    const [pedidos, setPedidos] = useState([])
    const [pedidoAtual, setPedidoAtual] = useState(initalPedido)

    Service.getPedidos().then((response) => setPedidos(response.data))

    function remover(id) {
        Service.deletarPedido(id)
        alert(`Pedido de ID=${id} foi deletado com sucesso.`)
    }

    return (
        
        <div className="paginaGeral">
            <div className="paginaLista">
                <h2>Lista de pedidos</h2>
                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>DATA</td>
                            <td>TOTAL</td>
                            <td>DETALHES</td>
                            <td>EXCLUIR</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pedidos.map(p =>
                                <tr className="tLinha" key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.date}</td>
                                    <td>R${p.total.toFixed(2)}</td>
                                    <td><button type="button" onClick={() => setPedidoAtual(p)} className="btn btn-primary"><BiDetail /></button></td>
                                    <td><button type="button" onClick={() => remover(p.id)} className="btn btn-danger"><BsFillTrashFill /></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="paginaDetalhe">
                <h2>Detalhes</h2>
                <hr />
                <div><label>ID: {pedidoAtual.id}</label></div>
                <div><label>DATA: {pedidoAtual.date}</label></div>
                <div><label>TOTAL: R${pedidoAtual.total.toFixed(2)}</label></div>
                <div className="tabelaDetalhes">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>NOME</td>
                                <td>PREÇO(R$)</td>
                                <td>QUANTIDADE</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pedidoAtual.itens.map(p =>
                                    <tr key={p.id}>
                                        <td>{p.name}</td>
                                        <td>{p.price.toFixed(2)}</td>
                                        <td>{p.quantity}</td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListaPedidos