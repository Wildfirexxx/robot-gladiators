// this creates a function named fight
var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

var enemyNames = ["Roborto", "Amy Andoroid", "Robo Trunmble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Alert players that they're starting the round
var fight = function(enemyName) {
  window.alert("Welcom to Robot GLADIATOR!");
  // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter Fight or SKIP to choose.");
  // if player choses fight, then fight
  if(promptFight === "fight" || promptFight === "FIGHT"){
  // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " still has " + enemyHealth + " health remaining.");
// check enemy health
if(enemyHealth <=0){
  window.alert(enemyNames + " has died.");
} else{
  window.alert(enemyNames + " still has " + enemyHealth + " health left.");
}
// remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(enemyNames + " has attacked " + playerName + " ." + playerName + " stil has " + playerHealth +" health remaining.");
  // check player's health
if(playerHealth <=0){
  window.alert(playerName + " has died");
} else{
    window.alert(playerName + " staill has " + playerHealth + " health left.");
}
// if player choses skip
} else if(promptFight === "skip" || promptFight === "SKIP"){
// confirm player wants to skip
var confirmSkip = window.confirm( "Are you sure you want to quit?");
// if yes
if (confirmSkip) {
    window.alert( playerName + " has decided to skip this fight. Goodby!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
} 
// if no (false), ask question again by running fight() again
else{
  fight();
}  
  window.alert(" You need to pick a valid option.")
} else{
    window.alert("You need to choose a valid option. Try again")
// subtract money from playerMoney for skipping
  
}

};

for(var i = 0; i < enemyNames.length; i++){
  fight(enemyNames[i]);
}
// fight();

