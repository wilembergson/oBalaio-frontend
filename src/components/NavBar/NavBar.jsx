import React from 'react'
import "./NavBar.css"
import { MdShoppingCart } from 'react-icons/md'
import { FaListAlt } from 'react-icons/fa'
import { FaTasks } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import Logo from '../../img/logo.png'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={Logo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/"><ImHome3/> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/comprar"><MdShoppingCart/> Comprar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/confirmacao"><FaListAlt/> Cadastro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pedidos"><FaTasks/> Pedidos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;