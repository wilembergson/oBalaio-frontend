import React from 'react'
import './Card.css'

function Card(props) {

        var item = {
                name: props.name,
                price: props.price
        }

        return (

                <div className="card mt-4 mb-4 bg-dark">
                        <label className="label mt-5">{props.name}</label>
                        <label className="label mt-2 mb-4">R${props.price.toFixed(2)}</label>

                        <button onClick={() => props.adicionar(item, item.price)} className="button btn btn-outline-success mt-5">
                                + Adicionar
                        </button>
                </div>

        )

}

export default Card;