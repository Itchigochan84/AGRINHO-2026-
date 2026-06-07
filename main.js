// Espera todo o documento HTML carregar antes de rodar o código
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona o botão e o espaço da mensagem no HTML
    const botaoReflexao = document.getElementById('btn-interativo');
    const caixaMensagem = document.getElementById('mensagem-js');
    
    const mensagens = [
        "🌱 A sustentabilidade não impede o progresso; ela garante que o progresso continue existindo amanhã!",
        "🚜 Unir a tecnologia, a produção agropecuária e o respeito à terra é a chave para a segurança alimentar.",
        "💧 Proteger a água (ODS 6) e o solo (ODS 15) significa proteger o futuro de toda a população.",
        "🌍 Parabéns pelo projeto! Analisar a Agenda 2030 mostra o nosso compromisso com o planeta."
    ];

    // Cria a ação do clique no botão
    botaoReflexao.addEventListener('click', function() {
        // Escolhe uma mensagem da lista de forma aleatória
        const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
        const mensagemEscolhida = mensagens[indiceAleatorio];
        
        // Coloca o texto na caixa e faz ela aparecer na tela
        caixaMensagem.textContent = mensagemEscolhida;
        caixaMensagem.style.display = 'block';
    });
});
