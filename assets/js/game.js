var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


// alerts players they are starting the match
var fight = function() {
  window.alert("welcome to Robot Gladiators");
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? enter "FiGHT" or "SKIP" to choose.')

// if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

// remove the value of the "playerAttack" from the value of the "enemyHealth" variable
enemyHealth = enemyHealth - playerAttack;

// log a resulting message to the console so we know that it worked.
console.log(
  playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

// check enemy health
if (enemyHealth <= 0){
  window.alert(enemyName + " has died.");
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
} else {
  window.alert(playerName + " still has " + playerHealth + " health remaining.");
}
// if player chooses skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
// confim playerwants to skip
var confirmSkip = window.confirm(" Are you sure you'd like to quit?");

// if yes (true), leave fight
if (confirmSkip) {
    window.alert(playerName + " has decideed to skip this fight. Goodbye");
    // subtract money for losing
    playerMoney = playerMoney - 2;
}
// if no (false), ask the question again by running fight
else {
  fight();
}

} else {
  window.alert("You need to choose a valid option.");
  }
};
fight();