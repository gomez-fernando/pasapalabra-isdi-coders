var userName = "";
let round = 1;


// status can be: done, pending or failed
let words = [
  {
    word: "astronauta",
    definitions: [
      "d1", "d2", "d3"
    ],
    status: "pending",
    letter: "A"
  },
  {
    word: "bicicleta",
    definitions: [
      "d1", "d2", "d3"
    ],
    status: "pending",
    letter: "B"
  },
  {
    word: "casco",
    definitions: [
      "d1", "d2", "d3"
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
var play = true;
var exit = false;

const question = (word) => {
  if(word.status === "pending"){
    console.log(word);
  console.log(`pending words ${pendingWords}`);

  let question = Math.floor(Math.random()*3);

  let resp = undefined;
    do {
      resp = prompt(`Con la "${word.letter}":\n${word.definitions[question]}`);

      if(resp !== "" && resp !== null){
        resp = resp.toLowerCase();
        if(resp === "pasapalabra"){
          alert(`Se guarda para la siguiente ronda`);
        } else if(resp === "end"){
          // play = false;
          pendingWords = 0;
          exit = true;
          alert("linea 65" + exit);
          // main();
        } else if(resp === word.word){
          alert(`Respuesta correcta  !!!`);
          word.status = "done";
          pendingWords--;
          doneWords++;
          console.log(`pending words ${pendingWords}`);
        } else {
          alert(`Respuesta incorrecta  :-(`);
          word.status = "failed";
          pendingWords--;
          failedWords++;
        }
      }
      alert("linea 80" + exit);

      console.log(words);

        
    } while (resp === null || resp === "" );
  }

  // actual ya se hace el bucle con las respuestas y se registran los fallos
  // se muestra el  numero de ronda
  // se genera la ronda correctamente solo con las palabras pendientes
// todo mostrar en consola las acertdas, falladas y pendientes para verificar
}

// function to show the score and ranking
const showScore = () => {
  // set random points to other players
  for(let i = 1; i < players.length; i++){
      players[i].rightLetters = (Math.floor(Math.random()*27 + 1));
  }

  players[0].rightLetters = doneWords;

  console.info(`**********     Top 5 players    **********`)
  // for(let i = 0; i < players.length; i++){
  //   players[i].score = initialScore - players[i].turns;
  // }

  players.sort((a, b) => {
    return b.rightLetters - a.rightLetters;
  });

  for(let i = 0; i < players.length; i++){
    console.log(`${i + 1}) Jugador/a: ${players[i].name}, Score: ${players[i].rightLetters}`)
  };

  // let showPlayerTurns;
  // let showPlayerScore;
  // for(let i = 0; i < players.length; i++){
  //   if(players[i].name === userName){
  //     showPlayerTurns =  players[i].turns;
  //     showPlayerScore = initialScore - players[i].turns
  //   }         
  // }

  let letSing = "letra";

  if (doneWords !== 1) letSing = "letras";

  window.alert(`Has acertado ${doneWords} ${letSing} !!!\n\nPuedes ver en la consola el ranking del Top 5 de Pasapalabra.\nFin del juego.`);

}

const main = () => {
    // if(play){
      do {
        userName = prompt(`Bienvenido/a a Pasapalabra !!\nIngresa tu nombre`);
        players[0].name = userName;
          
      } while (userName === null || userName === "");
  
      alert(`*** Reglas del juego ***\nRecibirás una pregunta por cada letra del alfabeto. Si la repondes correctamente sumas un punto, en caso contrario no sumas nada. Puedes decir 'pasapalabra' y se guardará la pregunta para la siguiente ronda.\nPuedes salir del juego en cualquier momento escribiendo 'end'.`);
  
      alert(`Preparado/a ${userName}?\nVamos allá!`);
  
        alert("linea 142" + exit);

      do {
  
        for(let i = 0; i < words.length; i++){
        alert("linea 149" + exit);

          if(exit === false){
        alert("linea 152" + exit);

            console.log(exit);
            question(words[i]);
  
            if(i === words.length -1){
              round++;
              if(pendingWords !== 0) alert(`Empieza la ronda ${round}`);
            }
          } else { 
            alert("exit es true");
          }
        }
  
        alert("linea 80" + exit);
  
        
      } while (pendingWords > 0 && exit === false);
      // } while (pendingWords > 0 && play);
  
      if(exit === false){
        // estoy aqui, poner un alert aqui
        showScore();
      } else{
        alert(`Has salido del juego.\nConseguiste ${doneWords} letras correctas.\nBye ${userName}!`);
        console.log(play);
      }
   
    // } else{

    // }
} 


main();