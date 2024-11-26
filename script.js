// seleciona todos os botões da navegação
const botoesNavegacao = document.querySelectorAll('.navegacao .icone');

// função para redirecionar
function redirecionar(event) {
    const botaoClicado = event.currentTarget;
    const altText = botaoClicado.querySelector('img').alt;

// redireciona com base no alt da imagem 
    switch (altText) {
        case 'home':
        window.location.href = 'index.php'
        break;
        
        case 'carrinho':
        window.location.href = ''
        break;

        case 'checkout':    
        window.location.href = ''
        break;

        default:
            console.error('Destino não encontrado');
    }
}

// Evento de clique aos botões

botoesNavegacao.forEach(botao => {
    botao.addEventListener('click', redirecionar);
});