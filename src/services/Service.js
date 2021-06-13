import axios from 'axios'

const API_URL = 'https://obalaio.herokuapp.com'
//const API_URL = 'http://localhost:8080'

class Service {
    getProdutos(){
        return axios.get(`${API_URL}/produtos/listAll`)
    }

    salvarProduto(produto){
        return axios.post(`${API_URL}/produtos`, produto)
    }

    deletarProduto(id){
        axios.delete(`${API_URL}/produtos/${id}`)
    }

    updateProduto(id, produto){
        axios.put(`${API_URL}/produtos/${id}`, produto)
    }

    salvarPedido(pedido){
        return axios.post(`${API_URL}/pedidos`, pedido)
    }

    getPedidos(){
        return axios.get(`${API_URL}/pedidos/listAll`)
    }

    deletarPedido(id){
        return axios.delete(`${API_URL}/pedidos/${id}`)
    }

}

export default new Service();