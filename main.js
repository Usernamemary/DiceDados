var  dado1, dado2, juego, dado1DOM, dado2DOM, final1, final2 ;
document.getElementById('lanzarDados1').addEventListener('click', function(){
 
  //1. Random number
  var dado1= Math.floor(Math.random()*6) + 1; 
  //2. Display the result
  var dado1DOM = document.getElementById('imgDado1');
  dado1DOM.style.display = 'block';
  dado1DOM.src = 'dado' + dado1 + '.svg';
  //3. Display result html
  final1= document.getElementById('resultado1').innerHTML= `Tu puntaje es ${dado1}`
  
  newGame ()

  }
  

);

document.getElementById('lanzarDados2').addEventListener('click', function(){
 
  //1. Random number
  var dado2= Math.floor(Math.random()*6) + 1; 
  //2. Display the result
  var dado2DOM = document.getElementById('imgDado2');
  dado2DOM.style.display = 'block';
  dado2DOM.src = 'dado' + dado2 + '.svg';
  
  //3. Display result html
   final2=  document.getElementById('resultado2').innerHTML= `Tu puntaje es ${dado2}`
  
   newGame ()
  }
);





function newGame () {
  document.getElementById('winner').addEventListener('click', function(){

    if ( final1.match(/(\d+)/) > final2.match(/(\d+)/)) {
      alert('Ganó el jugador 1')
    }
    else if ( final2.match(/(\d+)/) > final1.match(/(\d+)/)) {
      alert ('Ganó el jugador 2')
    }
  
    else { 
      alert ('Empate')
    }
  
  
  
  
  }
    
  );
}


document.getElementById('newGame').addEventListener('click', function(){
  var dado1DOM = document.getElementById('imgDado1');

  dado1DOM.src = 'dado1.svg';
  var dado2DOM = document.getElementById('imgDado2');

  dado2DOM.src = 'dado1.svg';
  document.getElementById('resultado1').innerHTML= `Tu puntaje es 0`

  document.getElementById('resultado2').innerHTML= `Tu puntaje es 0`



}
  
);

