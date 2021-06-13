import React from 'react'
import './Home.css'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className="principal">
           <div className="cima">Bem vindo!</div>
            <h3 className="menssagem">Nesta aplicação você será capaz de cadasrtar produtos, consulta-los 
                em uma lista de compras e adiciona-los em seu carrinho, podendo
                conferir o valor de cada um, suas respectivas quantidades, e o valor
                total da compra. Alé disso, você pederá também consultar os pedidos
                realizados vendo os detales de cada um e podendo exclui-los.
            </h3>

            
            <Link to="/comprar">
                <button className="botao"><FaArrowAltCircleRight/> Começar</button>
            </Link>
        </div>
    )
}

export default Home