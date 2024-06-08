import { conectaApi } from "./conectaApi.js";


async function deletaProduto(event){
    if (event.target.classList.contains('delete-btn')) {
        const productElement = event.target.closest('.card__produto');
        const productId = productElement.dataset.id;

        conectaApi.deletaProduto(productId)
            .then(() => {
                productElement.remove();
            })
            .catch(error => {
                console.error('Erro ao excluir produto:', error);
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('[data-lista]');

    productContainer.addEventListener('click', event =>  deletaProduto(event))
});
