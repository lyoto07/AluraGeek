async function listaProdutos(){
    const conexao = await fetch('http://localhost:3000/Produtos');
    const conexaoConvertida = await conexao.json();
   
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem){
    const conexao = await fetch('http://localhost:3000/Produtos', {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    })

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id){
    const conexao = await fetch(`http://localhost:3000/Produtos/${id}`, {
        method:"DELETE"
    })
}


export const conectaApi = {listaProdutos, criaProduto, deletaProduto}