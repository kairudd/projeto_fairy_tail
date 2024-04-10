/*
   obj 1 -  Quando clicar no botao de personagem na lista temos q marcar o botao como selecionado e mostrar o personagem correspondente
    passo 1 - pegar no js os botoes correspondente q o usuario clicar
    passo2- adicionar a classe "selecionado" no botao clicado pelo usuario
    passo 3 - verificar se ja existe a classe selecionado, se sim, remover a classe

   obj 2 - quando clicar no botao do personagem mostrar as informacoes do personagem
    passo 1 - pegar os personagens no js pra poder mostrar ou esconder ele
    passo 2 - adicionar a classe "selecionado" no personagem q o usuario selecionou
    passo 3 - verificar se ja existe um personagem selecionado, se sim, removera classe

    
*/
const botoes=document.querySelectorAll('.botao');
console.log(botoes);
const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, index) =>{
    botao.addEventListener("click", () => {
        desselecionar();
        botao.classList.add("selecionado");
        desselecionarpersonagem();
        personagens[index].classList.add("selecionado");
    });
});



function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionar() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

