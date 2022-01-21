// Game States
// "WIN " - Player robot has defeated all enemy-robots
//        *Fight all enemy-robots
//        *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// fight function
var fight = function(enemyName) {
// reapeat and executes as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
      
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? enter "FiGHT" or "SKIP" to choose.')

// if player chooses skip confim and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
  // confim playerwants to skipJX
  var confirmSkip = window.confirm(" Are you sure you'd like to quit?");
  
  // if yes (true), leave fight
  if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
     console.log("Player Money = " + playerMoney);
     break;
  }   
  

// remove the value of the "playerAttack" from the value of the "enemyHealth" variable
enemyHealth = enemyHealth - playerAttack;

// log a resulting message to the console so we know that it worked.
console.log(
  playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

// check enemy health
if (enemyHealth <= 0){
  window.alert(enemyName + " has died.");

// award player money for winning
playerMoney = playerMoney + 10;

// leave while() since enemy is dead
  break;
} else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// remove the value of the enemy attack from the value of the player health variable
playerHealth = playerHealth - enemyAttack;

// / log a resulting message to the console so we know that it worked.
console.log(
  enemyName + " has attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");

// check player health
if (playerHealth <= 0) {
  window.alert(playerName + " has died.")
  break;
} else {
  window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }

   }
  };






for (var i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0) {
  // let player know what round they are in, remeber that arrays start at 0 so, it needs to have one added to it to proplerly reflect the round
  window.alert("Welcome to Robot Gladiators! Round" +(i + 1));

// pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyNames = enemyNames[i];

// reset enemyHealth before starting new fight
    enemyHealth = 50;
    
// pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
  fight(pickedEnemyNames);
  }
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
      }
    }

  }



  for (var i = 0; i < cars.length; i++) {
    if (cars[i]) {
      console.log("Vroom");
    } else {
      console.log("Stop");
    }
  }