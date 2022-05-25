// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui

  if (param1 === true && param2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  const result = frase.split(' ');
  return result;
}

// Desafio 4
function concatName(ultimoPrimeiro) {
  // seu código aqui
  const frase = `${ultimoPrimeiro[ultimoPrimeiro.length - 1]}, ${ultimoPrimeiro[0]}`;
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maior = Math.max(...numeros);
  let contador = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  distCat1 = Math.abs(distCat1);
  distCat2 = Math.abs(distCat2);

  if (distCat1 < distCat2) {
    return "cat1";
  };
  if (distCat2 < distCat1) {
    return "cat2";
  };
  if (distCat1 == distCat2) {
    return "os gatos trombam e o rato foge"
  };

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
