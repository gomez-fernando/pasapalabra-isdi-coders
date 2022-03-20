var userName = "";
let round = 1;


// status can be: done, pending or failed
let words = [
  {
    word: "ASRONAUTA",
    definitions: [
      "Persona que forma parte de la tripulación de una nave espacial o que está entrenada y preparada para hacerlo.",
      "Individuo que está capacitado para tripular una nave espacial.",
      "Persona que viaja por el espacio exterior, más allá de la atmósfera de la Tierra."
    ],
    status: "pending",
    letter: "A"
  },
  {
    word: "BICICLETA",
    definitions: [
      "Vehículo de dos ruedas movido por una persona, provisto de un manubrio en la parte delantera, un asiento para el conductor y dos pedales.",
      "En el fútbol, finta en que se pasan alternativamente uno y otro pie por encima del balón para engañar al adversario antes de intentar superarlo.",
      "Vehículo de dos ruedas, normalmente de igual tamaño, cuyos pedales transmiten el movimiento a la rueda trasera por medio de un plato."
    ],
    status: "pending",
    letter: "B"
  },
  {
    word: "CASCO",
    definitions: [
      "Objeto de material muy resistente y forma generalmente semiesférica que se ajusta a la cabeza para protegerla de posibles heridas o golpes.",
      "Cuerpo de un barco o avión sin el aparejo y las máquinas. ",
      "Hace referencia al elemento que brinda protección a la cabeza."
    ],
    status: "pending",
    letter: "C"
  },
];

var players = [
  {name: "", rightLetters: 0},
  {name: "Alex", rightLetters: 0},
  {name: "Mario", rightLetters: 0},
  {name: "Elena", rightLetters: 0},
  {name: "Nines", rightLetters: 0}
];

let pendingWords = words.length;
let doneWords = 0;
let failedWords = 0;
var exit = false;

const question = (word) => {
  if(word.status === "pending"){
    let question = Math.floor(Math.random()*3);

    let resp = undefined;
    do {
      resp = prompt(`Con la "${word.letter}":\n${word.definitions[question]}`);

      if(resp !== "" && resp !== null){
        resp = resp.toUpperCase();
        if(resp === "pasapalabra"){
          alert(`Se guarda para la siguiente ronda`);
        } else if(resp === "end"){
          pendingWords = 0;
          exit = true;
        } else if(resp === word.word){
          alert(`Respuesta correcta  !!!`);
          word.status = "done";
          pendingWords--;
          doneWords++;
        } else {
          alert(`Respuesta incorrecta  :-(.\nLa palabra es: ${word.word}`);
          word.status = "failed";
          pendingWords--;
          failedWords++;
        }
      }
    } while (resp === null || resp === "" );
  }
}

// function to show the score and ranking
const showScore = () => {
  // set random points to other players
  for(let i = 1; i < players.length; i++){
      players[i].rightLetters = (Math.floor(Math.random()*27 + 1));
  }

  players[0].rightLetters = doneWords;

  console.info(`**********     Top 5 players    **********`)

  players.sort((a, b) => {
    return b.rightLetters - a.rightLetters;
  });

  for(let i = 0; i < players.length; i++){
    console.log(`${i + 1}) Jugador/a: ${players[i].name}, Score: ${players[i].rightLetters}`)
  };

  let letSing = "letra";

  if (doneWords !== 1) letSing = "letras";

  window.alert(`Has acertado ${doneWords} ${letSing} !!!\n\nPuedes ver en la consola el ranking del Top 5 de Pasapalabra.\nFin del juego.`);

}

const main = () => {
      do {
        userName = prompt(`Bienvenido/a a Pasapalabra !!\nIngresa tu nombre`);
        players[0].name = userName;
          
      } while (userName === null || userName === "");
  
      alert(`*** Reglas del juego ***\nRecibirás una pregunta por cada letra del alfabeto. Si la respondes correctamente sumas un punto, en caso contrario no sumas nada. Puedes decir 'pasapalabra' y se guardará la pregunta para la siguiente ronda.\nPuedes salir del juego en cualquier momento escribiendo 'end'.`);
  
      alert(`Preparado/a ${userName}?\nVamos allá!`);
  
      do {
  
        for(let i = 0; i < words.length; i++){
          if(exit === false){
            question(words[i]);
  
            if(i === words.length -1){
              round++;
              if(pendingWords !== 0) alert(`Empieza la ronda ${round}`);
            }
          } 
        }
  
      } while (pendingWords > 0 && exit === false);
  
      if(exit === false){
        showScore();
      } else{
        alert(`Has salido del juego.\nConseguiste ${doneWords} letras correctas.\nBye ${userName}!`);
      }
} 


main();