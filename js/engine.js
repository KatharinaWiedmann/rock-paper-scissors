var choices = ["rock", "paper", "scissors"]; /*rock=0, paper=1, scissors=2*/

var played = 0; /*if you start, start from scratch! Has to be applied in HTML as well*/
var won = 0;
var lost = 0;
var draw = 0;


/*listen for the button clicks */
$("#rock").click(function(event){
  var play_you = "rock";
$("#play_you").text(play_you);/*shows what you choose*/
var play_machine = computer_move(); /*look at function below */
compare (play_you, play_machine);
});

$("#paper").click(function(event){
  var play_you = "paper";
$("#play_you").text(play_you); /*shows what you choose*/
var play_machine = computer_move();
compare (play_you, play_machine);
});

$("#scissors").click(function(event){
  var play_you = "scissors";
$("#play_you").text(play_you); /*shows what you choose*/
var play_machine = computer_move();
compare (play_you, play_machine);
});

function computer_move() {
  var play_machine = Math.floor(Math.random()*(3-0)) + 0; /*computer choses random no. between 0-2*/
play_machine = choices[play_machine]; /*no. from play_machine is assigned to the choices list, e.g. 1=paper*/
$("#play_machine").text(play_machine); /*shows what the machine chooses*/


return play_machine; /*show what the machine has played? WHY AND WHERE????*/
}

function compare(you, machine){
  var verdict = 'lose'; /* you lose unless you draw or win*/

  if( you == machine ) {
  verdict ='draw';
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
if (verdict == 'win') {
  won++; /*if you win once more add a win*/
  $("#game_won").text(won); /*if you win, show this*/
}
if (verdict == 'lose') {
  lost++;/*if you lose once more add a lose*/
  $("#game_lost").text(lost);/*if you lose, show this*/
}
if (verdict == 'draw') {
  draw++; /*if you draw once more add a draw*/
  $("#game_draw").text(draw);/*if you draw, show this*/
}

$("#verdict").text(verdict);

played++; /*add one to this variable*/
$("#game_played").text(played);
}
