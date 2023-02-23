const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-volta");
const setaAvancar = document.getElementById("setaAvanca");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  if (imagemAtual === imagens.length - 1) {
    return;
  }
  esconderImagemAberta();
  imagemAtual++;
  mostrarImagem();
  mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }
  esconderImagemAberta();
  imagemAtual--;
  mostrarImagem();
  mostrarOuEsconderSetas();
});

function mostrarImagem() {
  imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
  if (imagemAtual !== 0) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  }

  if (imagemAtual !== 0 && imagemAtual === imagens.length - 1) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}
