
$(document).ready(function () {
  
  function Player(id,score,totalScore) {
    this.id =id;
    this.totalScore = 0;
  }
  player1 = new Player();
  player2 = new Player();
  
  $("button#roll_dice1").on("click", function () {
  Player.prototype.currentScore = Math.floor(Math.random() * 6) + 1;
  player1.totalScore += player1.currentScore;

  
  if (player1.currentScore===1 ) {
    $(".dice_image1").html("<img src='images/dice1.png' style='width:92px;height:62px;margin-left:260px;'/>");
    alert("you have scored 1. next player roll dice !!!!");
    $("button#roll_dice1").hide();
    $("button#roll_dice2").show();
    player1.totalScore=0;
  
    $(".result1").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore);     
           
  }
  if (player1.currentScore===2 ) {
    $(".dice_image1").html("<img src='images/dice2.png' style='width:92px;height:62px;margin-left:260px;'/>");
    $(".result1").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore); 
    
  }
  if (player1.currentScore===3 ) {
    $(".dice_image1").html("<img src='images/dice3.png' style='width:92px;height:62px;margin-left:260px;'/>");
    $(".result1").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore); 
    
  }
  if (player1.currentScore===4 ) {
    $(".dice_image1").html("<img src='images/dice4.png' style='width:92px;height:62px;margin-left:260px;'/>");
    $(".result1").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore); 
    
  }
  if (player1.currentScore===5 ) {
    $(".dice_image1").html("<img src='images/dice5.jpeg' style='width:92px;height:62px;margin-left:260px;'/>");
    $(".result1").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore); 
    
  }
  if (player1.currentScore===6 ) {
    $(".dice_image1").html("<img src='images/dice6.jpeg' style='width:92px;height:62px;margin-left:260px;'/>");
    $(".result1").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore); 
    
  }
    
           
  
  if (player1.totalScore >=100) {
    alert("your total score is 100. player1 wins !!!!");
    
    
  }
  else {
    $(".result1").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore);
    
  }  
  

  
})