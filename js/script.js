// Seleciona o cabeçalho que será mostrado ou escondido durante a rolagem.
const header = document.querySelector('.header');

// Guarda a posição vertical anterior da página para identificar a direção da rolagem.
let ultimaPosicaoScroll = window.scrollY;

// Executa esta função sempre que a página é rolada.
window.addEventListener('scroll', () => {
    // Obtém a posição vertical atual da página.
    const posicaoAtualScroll = window.scrollY;

    // No topo ou ao rolar para cima, remove a classe e exibe o cabeçalho.
    if (posicaoAtualScroll <= 0 || posicaoAtualScroll < ultimaPosicaoScroll) {
        header.classList.remove('header-escondido');
    } else {
        // Ao rolar para baixo, adiciona a classe que esconde o cabeçalho.
        header.classList.add('header-escondido');
    }

    // Atualiza a posição anterior para a próxima comparação de rolagem.
    ultimaPosicaoScroll = posicaoAtualScroll;
});

// Seleciona a área rolável e os botões da galeria do portfólio.
const janelaCarrossel = document.querySelector('.janela-carrossel');
const botaoAnterior = document.querySelector('.anterior');
const botaoProximo = document.querySelector('.proximo');

// Move a galeria para a esquerda. A animação suave é aplicada pelo CSS.
botaoAnterior.addEventListener('click', () => {
    janelaCarrossel.scrollBy({ left: -400, behavior: 'smooth' });
});

// Move a galeria para a direita, revelando as próximas fotos.
botaoProximo.addEventListener('click', () => {
    janelaCarrossel.scrollBy({ left: 400, behavior: 'smooth' });
});
