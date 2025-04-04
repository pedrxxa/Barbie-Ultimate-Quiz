let indiceAtual = 0;
let pontuacao = 0;

function startQuiz() {
  perguntas = embaralhar(perguntas);
  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  indiceAtual = 0;
  pontuacao = 0;
  mostrarPergunta();
}

function mostrarPergunta() {
  const pergunta = perguntas[indiceAtual];

  document.getElementById("pergunta-texto").innerHTML = pergunta.texto;

  const opcoesContainer = document.getElementById("opcoes-container");
  opcoesContainer.innerHTML = "";

  // Embaralhar as opções:
  const opcoesComIndice = pergunta.opcoes.map((opcao, index) => ({ texto: opcao, originalIndex: index }));
  const opcoesMisturadas = embaralhar(opcoesComIndice);

  // Guardar a nova posição da resposta correta
  pergunta._respostaEmbaralhada = opcoesMisturadas.findIndex(op => op.originalIndex === pergunta.resposta);

  opcoesMisturadas.forEach((op, index) => {
    const btn = document.createElement("button");
    btn.innerHTML = op.texto;
    btn.onclick = () => verificarResposta(index);
    opcoesContainer.appendChild(btn);
  });

  document.getElementById("feedback").innerText = "";
  document.getElementById("explicacao").innerText = "";
  document.getElementById("proxima-btn").style.display = "none";
}

function verificarResposta(respostaIndex) {
  const pergunta = perguntas[indiceAtual];
  const correta = pergunta._respostaEmbaralhada;

  const feedback = document.getElementById("feedback");
  const explicacao = document.getElementById("explicacao");

  if (respostaIndex === correta) {
    feedback.innerText = "Acertou! 💖";
    feedback.style.color = "green";
    pontuacao++;
  } else {
    feedback.innerText = "Errou! 😢";
    feedback.style.color = "red";
  }

  explicacao.innerHTML = `🎬 ${pergunta.explicacao}`;
  document.getElementById("proxima-btn").style.display = "block";

  const botoes = document.querySelectorAll("#opcoes-container button");
  botoes.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correta) btn.style.backgroundColor = "#32CD32";
    if (idx === respostaIndex && idx !== correta) btn.style.backgroundColor = "#DC143C";
  });
}

function proximaPergunta() {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("resultado").style.display = "block";

  const mensagem = pontuacao >= perguntas.length * 0.7
    ? "🥇 Você arrasou como uma verdadeira princesa Barbie! 👑✨"
    : "😅 Hora de rever alguns filmes com pipoca e glitter! 🍿💗";

  const imagem = pontuacao >= perguntas.length * 0.7
    ? "assets/images/medalha-barbie.png"
    : "assets/images/rever-filmes.png";

  document.getElementById("pontuacao-final").innerHTML =
    `<img src="${imagem}" style="width: 80px; margin-bottom: 10px;"><br>
     Pontuação: ${pontuacao} de ${perguntas.length} 💫<br>${mensagem}`;

  // 🎉 Confetti só se pontuação for alta
  if (pontuacao >= perguntas.length * 0.7) {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}

function reiniciarQuiz() {
  document.getElementById("resultado").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

// ✨ Função de embaralhar (perguntas e opções)
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 🎵 Ativar ou pausar música
function toggleMusica() {
  const musica = document.getElementById("musica-fundo");
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}
