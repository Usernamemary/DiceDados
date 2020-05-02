var dado1,
  dado2,
  juego,
  dado1DOM,
  dado2DOM,
  final1,
  final2,
  activePlayer2,
  activePlayer1,
  modalBtn,
  modalBg,
  modalClose;

//Leer el numero de los dados
document.querySelector('#lanzarDados1').addEventListener('click', function () {
  //1. Random number
  var dado1 = Math.floor(Math.random() * 6) + 1;
  //2. Display the result
  var dado1DOM = document.querySelector('#imgDado1');
  dado1DOM.style.display = 'block';
  dado1DOM.src = 'dado' + dado1 + '.svg';

  //3. Display result html
  final1 = document.querySelector(
    '#resultado1'
  ).innerHTML = `Tu puntaje es ${dado1}`;
  document.querySelector('#resultado1').style.border = 'thick solid #f26699';
  document.querySelector('#resultado2').style.border = 'none';

  popupResultado();
});

//Existen dos formas con getElementById o querySelector
document.getElementById('lanzarDados2').addEventListener('click', function () {
  //1. Random number
  var dado2 = Math.floor(Math.random() * 6) + 1;

  //3. Display the result
  var dado2DOM = document.getElementById('imgDado2');
  dado2DOM.style.display = 'block';
  dado2DOM.src = 'dado' + dado2 + '.svg';

  //4. Display result html
  final2 = document.getElementById(
    'resultado2'
  ).innerHTML = `Tu puntaje es ${dado2}`;

  document.getElementById('resultado2').style.border = 'thick solid #f26699';
  document.getElementById('resultado1').style.border = 'none';

  popupResultado();
});

function resultado() {
  document.getElementById('winner').addEventListener('click', function () {
    if (final1.match(/(\d+)/) > final2.match(/(\d+)/)) {
      document.querySelector('#resultado').innerHTML = 'Ganó el jugador 1';
    } else if (final2.match(/(\d+)/) > final1.match(/(\d+)/)) {
      document.querySelector('#resultado').innerHTML = 'Ganó el jugador 2';
    } else {
      document.querySelector('#resultado').innerHTML = 'Empate';
    }
  });
}
// Popup CSS
var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

function popupResultado() {
  resultado();
  modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
  });

  modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
  });
}

document.getElementById('newGame').addEventListener('click', function () {
  var dado1DOM = document.getElementById('imgDado1');

  dado1DOM.src = 'dado1.svg';
  var dado2DOM = document.getElementById('imgDado2');

  dado2DOM.src = 'dado1.svg';
  document.getElementById('resultado1').innerHTML = `Tu puntaje es 0`;

  document.getElementById('resultado2').innerHTML = `Tu puntaje es 0`;
});
