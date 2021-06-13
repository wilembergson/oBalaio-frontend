import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect, Route } from 'react-router-dom'
import '../../components/Basket/Basket.css'
import Card from '../Cards/Card';
import './ProdutoComponent.css'

import Service from '../../services/Service';

//const API_URL_LISTALL = 'http://localhost:8080/produtos/listAll'
//const API_URL_SAVECESTA = 'http://localhost:8080/pedidos'

function ProdutoComponent() {

    const [prod, setProd] = useState([])
    const [cesta, setCesta] = useState([])
    const [total, setTotal] = useState(0)

    

    Service.getProdutos().then((response) => setProd(response.data))
    //axios.get(API_URL_LISTALL).then((response) => setProd(response.data))

    function saveCesta(){
        const cestaSalva = {itens: cesta, total: total}
        Service.salvarPedido(cestaSalva).then(alert("Compra efetuada com sucesso."), setCesta([]), setTotal(0))
        //axios.post(API_URL_SAVECESTA, cestaSalva).then(alert("Compra efetuada com sucesso."), setCesta([]), setTotal(0))
    }

    function removeCesta(item) {
        const itemCopy = Array.from(cesta)
       
        for (var i = 0; i < itemCopy.length; i++) {
            if (itemCopy[i].name === item.name) {
                itemCopy[i].quantity = parseInt(itemCopy[i].quantity - 1)
               if(itemCopy[i].quantity === 0){
                   itemCopy.splice(i, 1)
               }
            }
        }
        setCesta(itemCopy)
    }

    function addCesta(item) {
        const itemCopy = Array.from(cesta)
        var existente = false
        for (var i = 0; i < itemCopy.length; i++) {
            if (itemCopy[i].name === item.name) {
                itemCopy[i].quantity++
                existente = true
            }
        }
        if (existente === false) {
            itemCopy.push({ id: parseInt(cesta.length + 1), name: item.name, price: item.price, quantity: 1 })
        }
        setCesta(itemCopy)
    }

    useEffect(() => {
        var tot = 0
        var soma = []
        const itemCopy = Array.from(cesta)
        for (var i = 0; i < itemCopy.length; i++) {
            soma[i] = parseFloat(itemCopy[i].price *  itemCopy[i].quantity)
        }
        for (var i = 0; i < soma.length; i++) {
            tot = parseFloat(tot + soma[i])
        }
        setTotal(tot)
    }, [cesta])

    return (
        <>
            <div className="dados">
                <div className="basket ml-2">
                    <div className="tnome">
                        Cesta
                 </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Preço(R$)</td>
                                <td>Quantidade</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cesta.map(p =>
                                    <tr key={p.id}>
                                        <td>{p.name}</td>
                                        <td>{p.price.toFixed(2)}</td>
                                        <td>{p.quantity}</td>
                                        <td><button onClick={() => removeCesta(p)} type="button" className="btn2 btn-danger">X</button></td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                    <div className="tComprar">
                        <label className="total">R${total.toFixed(2)}</label>
                       <Link to='/comprar'>
                            <button type="button" onClick={()=>setCesta([])} className="btnConfirm btn-warning ml-5">Limpar</button>
                           <button type="button" onClick={()=> saveCesta()} className="btnConfirm btn-primary">Comprar</button>
                           </Link>
                    </div>
                </div>

                <div className="tabela">
                    <h4 className="text-center mt-3">Lista de produtos</h4>
                    <hr />
                    <div className="produtoss ml-5 mr-5">
                        {
                            prod.map(
                                p => <Card key={p.id} name={p.name} price={p.price} adicionar={addCesta} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )

}
export default ProdutoComponent