//perguntas
var perguntas = [
  "O que fazer em caso de enchente?",
  "O que pode causar enchentes nas cidades?",
  "Qual número de emergência em caso de enchentes?",
  "Qual atitude ajuda a evitar enchentes?",
  "Qual órgão alerta sobre risco de enchentes?",
  "O que NÃO é seguro durante enchentes?",
  "Quando um rio transborda, o que pode acontecer?",
  "O lixo entupindo bueiros pode causar:",
  "Qual item é importante em um kit emergência?",
  "O que fazer após uma enchente?"
];
//respostas
var opcoes = [
  ["Ficar em casa", "Buscar abrigo seguro", "Nadar na rua"],
  ["Muito sol", "Bueiros limpos", "Chuvas fortes e lixo nas ruas"],
  ["190", "193", "101"],
  ["Jogar lixo no chão", "Desentupir bueiros", "Construir em rios"],
  ["Prefeitura", "INMET", "Polícia Militar"],
  ["Evitar sair", "Dirigir em ruas alagadas", "Ouvir rádio"],
  ["Fica seco", "Causa enchente", "Nada acontece"],
  ["Mais flores", "Menos chuvas", "Alagamentos"],
  ["Lanterna", "Celular sem bateria", "Livro"],
  ["Aproveitar a agua para beber", "Limpar com água sanitária", "Ficar na lama"]
];

// Índices da opção correta no Array
var corretas = [1, 2, 1, 1, 1, 1, 1, 2, 0, 1];
//variaveis para contar qual a pergunta esta e quantos acertos
var perguntaAtual = 0;
var acertos = 0;
//funcao para acionar as perguntas
function mostrarPergunta() {
    //busca no html od locais que sero inseridos as perguas e possiveis respostas
  var p = document.getElementById("pergunta");
  var o = document.getElementById("opcoes");
    //insere no html qual o numero de 1 a 10 que esta sendo realizada a pergunta
  p.innerHTML = perguntas[perguntaAtual];

  var texto = "";
  for (var i = 0; i < 3; i++) {
    texto +=
      "<label><input type='radio' name='resposta' value='" + i + "'> " + opcoes[perguntaAtual][i] + "</label><br>";
  }

  o.innerHTML = texto;
}
//funcao que e acionada ao clicar em proximo
function proxima() {
    //busca as opcoes de resposta
  var op = document.getElementsByName("resposta");
  var escolha = -1;
    //verificacao de qual opcao o usuario escolheu
  for (var i = 0; i < op.length; i++) {
    if (op[i].checked) {
      escolha = parseInt(op[i].value);
    }
  }
  //faz a verificacao se o usuario selecionou algo. Caso n, informa isso e nao continua
  if (escolha == -1) {
    alert("Escolha uma resposta!");
    return;
  }
  //se a escolha for igual a respoasta correta, conta um ponto na variavel acertos
  if (escolha == corretas[perguntaAtual]) {
    acertos++;
  }
  //se passou da pergunta anterior, conta um indice na variavel perguntaAtual
  perguntaAtual++;
  //se a pergunta que esta sendo exibida for menor do que a quantidade de perguntas, continua acionando a variavel mostrar pergunta
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
    //se nao, ou seja, todas perguntas tiverem sido apresentadas, ira mostrar no html a qtd de erros e acertos do usuatio.
  } else {
    var erros = perguntas.length - acertos;
    document.getElementById("quiz").innerHTML =
      "<h2>Fim do Quiz</h2><p>Acertos: " + acertos + "<br>Erros: " + erros + "</p>";
  }
}

mostrarPergunta();