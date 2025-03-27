function alterarStatus(id) {
    let status = ['Alugar', 'Devolver'];

    let jogoClicado = document.getElementById(`game-${id}`);

    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

    alert(nomeJogo.textContent);
}
