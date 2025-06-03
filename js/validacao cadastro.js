document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    //Funcão para que o formulário seja simplismente enviado e recarregue a pagina.
  event.preventDefault();
    //Aqui estou buscando os elementos do formulário através do getElementById
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
    //Local onde irá exibir a mensagem para cada possivel situação.
  const mensagem = document.getElementById('mensagem');
    //Verificaçao se ha compos vazios.
  if (!nome || !email || !senha) {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.style.color = "red";
    //verifica se a senha tem no minimo seis caracteres.
  } else if (senha.length < 6) {
    mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
    mensagem.style.color = "red";
    //Se não foi barrado em nenhuma etapa anterior, apresenta a mensagem de que o cadastro foi realizado e reseta o formualrio.
  } else {
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
    document.getElementById('cadastroForm').reset();
  }
});