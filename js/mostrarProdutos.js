import { conectaApi } from "./conectaApi.js";

const lista  = document.querySelector("[data-lista]");


function constroiCard(id,nome, preco, imagem){
    const produto = document.createElement("li");
 
    // console.log(nome, preco, imagem)
    produto.className = `card__produto`;
    produto.dataset.id = id;
    produto.innerHTML= 
    `
    <img src="./img/${imagem}.png" alt="${nome}">
    <div class="card__container_info">
        <h2 class="card__produto__titulo">${nome}</h2>
        <div class="card__produto__conteudo">
            <p class="card-produto-price">${preco}</p>
            // <img src="img/lixeira.png" alt="" class="delete-btn">
        </div>
    </div>
    `

    return produto;
}

async function listaProduto(){
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(produto => lista.appendChild(constroiCard(produto.id,produto.nome, produto.preco, produto.imagem)));
}

listaProduto();
