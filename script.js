const paleta = document.getElementById('color-palette');
const pixel = document.getElementById('pixel-board');
const botao = document.getElementById('clear-board');
const vqv = document.getElementById('generate-board');
const input = document.getElementById('board-size');

function addClass(event) {
  const escolheCor = document.querySelector('.selected');
  escolheCor.classList.remove('selected');
  event.target.classList.add('selected');
}

paleta.children[0].style.backgroundColor = 'black';

function gerarCor(opacidade) {
  const r = Number(2 + Math.random() * 254);
  const g = Number(2 + Math.random() * 254);
  const b = Number(2 + Math.random() * 254);

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

for (let index = 1; index < paleta.children.length; index += 1) {
  paleta.children[index].style.backgroundColor = gerarCor(index);
}

for (let i = 1; i <= 5; i += 1) {
  for (let j = 1; j <= 5; j += 1) {
    const a = document.createElement('div');
    a.classList.add('pixel');
    pixel.appendChild(a);
  }
  const p = document.createElement('p');
  pixel.appendChild(p);
}

function pixelCor(event) {
  const pegaCor = document.querySelector('.selected');
  event.target.style.backgroundColor = pegaCor.style.backgroundColor;
}

function limpaPixel() {
  for (let index = 0; index < pixel.children.length; index += 1) {
    pixel.children[index].style.backgroundColor = 'white';
  }
}

function limpa() {
  for (let i1 = 0; i1 < pixel.children.length; i1 += 1) {
    pixel.children[i1].remove();
    i1 -= 1;
  }
}

function dinam(ind) {
  limpa();
  const tam = Math.abs((Math.floor(ind / 2) * 20) - 450);
  pixel.style.left = `${tam}px`;
  for (let i = 0; i < ind; i += 1) {
    for (let j = 0; j < ind; j += 1) {
      const a = document.createElement('div');
      a.classList.add('pixel'); pixel.appendChild(a);
    }
    const p = document.createElement('p'); pixel.appendChild(p);
  }
}

function mudaTamanho() {
  let index = input.value;
  if (index >= 5) {
    if (index > 50) {
      index = 50;
      dinam(index);
    } else {
      dinam(index);
    }
  } else {
    window.alert('Board inválido!');
  }
}

pixel.addEventListener('click', pixelCor);

paleta.addEventListener('click', addClass);

vqv.addEventListener('click', mudaTamanho);

botao.addEventListener('click', limpaPixel);
