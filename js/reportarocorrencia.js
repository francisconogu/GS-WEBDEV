document.getElementById('formOcorrencia').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário

  const nome = document.getElementById('nome').value.trim();
  const tipo = document.getElementById('tipo').value;
  const local = document.getElementById('local').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const mensagem = document.getElementById('mensagem');

  // Verifica se os campos obrigatórios estão preenchidos
  if (!nome || !tipo || !local || !descricao) {
    mensagem.textContent = "Preencha todos os campos antes de enviar.";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Ocorrência enviada com sucesso!";
    mensagem.style.color = "green";
    document.getElementById('formOcorrencia').reset(); // Limpa o formulário
  }
});