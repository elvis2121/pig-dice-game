$(document).ready(function () {
  //constructor
  function Player(id,score,totalScore) {
    this.id =id;
    this.totalScore = 0;
  }
  //object initialization
  player1 = new Player();
  player2 = new Player();
  
  //player1 roll dice event
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
  
  //player2 rolldice event
  $("button#roll_dice2").on("click", function () {
    Player.prototype.currentScore = Math.floor(Math.random() * 6) + 1;
    player2.totalScore += player2.currentScore;
  
    
    if (player2.currentScore===1 ) {
      $(".dice_image2").html("<img src='images/dice1.png' style='width:92px;height:62px;margin-left:260px;'/>");
      alert("you have scored 1. next player roll dice !!!!");
      $("button#roll_dice2").hide();
      $("button#roll_dice1").show();
      player2.totalScore=0;
    
      $(".result2").html("Your dice score is: " + player2.currentScore + " total score is " + player2.totalScore);     
             
    }
    if (player2.currentScore===2 ) {
      $(".dice_image2").html("<img src='images/dice2.png' style='width:92px;height:62px;margin-left:260px;'/>");
      $(".result2").html("Your dice score is: " + player2.currentScore + "<br>  total score is " + player1.totalScore); 
      
    }
    if (player2.currentScore===3 ) {
      $(".dice_image2").html("<img src='images/dice3.png' style='width:92px;height:62px;margin-left:260px;'/>");
      $(".result2").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore); 
      
    }
    if (player2.currentScore===4 ) {
      $(".dice_image2").html("<img src='images/dice4.png' style='width:92px;height:62px;margin-left:260px;'/>");
      $(".result2").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore); 
      
    }
    if (player2.currentScore===5 ) {
      $(".dice_image2").html("<img src='images/dice5.jpeg' style='width:92px;height:62px;margin-left:260px;'/>");
      $(".result2").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore); 
      
    }
    if (player2.currentScore===6 ) {
      $(".dice_image2").html("<img src='images/dice6.jpeg' style='width:92px;height:62px;margin-left:260px;'/>");
      $(".result2").html("Your dice score is: " + player1.currentScore + "<br>  total score is " + player1.totalScore); 
      
    }
    if (player2.totalScore >=100) {
      alert("your total score is 100. player2 wins !!!!");
      
      
    }
    else {
      $(".result2").html("Your dice score is: " + player2.currentScore + " <br> total score is: " + player2.totalScore);
      
    }    
    
  })
  
  //hold dice player1
  $("button#hold1").click(function () {
    $("button#roll_dice1").hide();
    $("button#roll_dice2").show();
    $(".result1").html("Your dice score is: " + player1.currentScore +"<br> total score is " + player1.totalScore);    
  })
  
  //hold dice player 2
  $("button#hold2").click(function () {
    $("button#roll_dice2").hide();
    $("button#roll_dice1").show();
    $(".result2").html("Your dice score is: " + player2.currentScore +"<br> total score is " + player2.totalScore);    
  })
  
})

