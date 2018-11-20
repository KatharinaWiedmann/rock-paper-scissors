var choices = ["rock", "paper", "scissors"]; /*rock=0, paper=1, scissors=2*/

var played = 0; /*if you start, start from scratch! Has to be applied in HTML as well*/
var won = 0;
var lost = 0;
var draw = 0;


/*listen for the button clicks, doesn't matter which button */
$("button").click(function(event) {
  var play_you = this.getAttribute("value"); /* bc of "this" computer knows which button has been clicked, could be rock, paper or scissors*/
  $("#play_you").text(play_you); /*shows what you choose*/
  var play_machine = computer_move(); /*assigns play_machine to whatever the computer did - look at function below */
  compare(play_you, play_machine);
});

function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0; /*computer choses random no. between 0-2*/
  play_machine = choices[play_machine]; /*no. from play_machine is assigned to the choices list, e.g. 1=paper*/
  $("#play_machine").text(play_machine); /*shows what the machine chooses*/
  return play_machine; /*show what the machine has played behind play_machine which is behind Machine:, see HTML*/
}

function compare(you, machine) {
  var verdict = 'lose'; /* you lose unless you draw or win*/

  if (you == machine) {
    verdict = 'draw';
  }
  if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  }
  if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  }
  if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

  switch (verdict) { /*switch statement to make the code shorter*/
    case 'win':
      /*if it is a win, like defined above do the following*/
      won++; /*if you win once more add a win*/
      $("#game_won").text(won); /*if you win, show this*/
      break;

    case 'lose':
      lost++;
      $("#game_lost").text(lost);
      break;

    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }

  $("#verdict").text(verdict);

  played++; /*add one to this variable*/
  $("#game_played").text(played);
}
