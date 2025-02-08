// Função para reservar passeios
function reservarPasseio(nomePasseio) {
    alert(`Você reservou o passeio: ${nomePasseio}`);
}

// Função para enviar o formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    // Aqui você pode adicionar uma lógica para enviar os dados para um servidor
})
