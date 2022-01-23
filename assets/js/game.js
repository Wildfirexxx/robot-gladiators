// Game States
// "WIN " - Player robot has defeated all enemy-robots
//        *Fight all enemy-robots
//        *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



// fight function
var fight = function(enemy) {

  // reapeat and executes as long as the enemy-robot is alive
  while (playerInfo.health > 0 && enemy.health > 0) {

    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? enter "FiGHT" or "SKIP" to choose.')

    // if player chooses skip confim and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confim playerwants to skipJX
      var confirmSkip = window.confirm(" Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decideed to skip this fight. Goodbye");
        // subtract money from playerInfo.money for skipping
        playerInfo.money = playerInfo.money - 10;
        console.log("Player Money = " + playerInfo.money);
        break;
      }

    }


    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    
    // log a resulting message to the console so we know that it worked.
    console.log(
      playerInfo.name + " has attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

    // check enemy health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died.");

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);


    // / log a resulting message to the console so we know that it worked.
    console.log(
      enemy.name + " has attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining");

    // check player health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died.")
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
    }

  }
};

// function to start a new game
var startGame = function () {
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player is not alive, break out of the loop and let endGame function run
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
  endGame();
};



var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");
  // if player is still alive player wins!
  if (playerInfo.health > 0) {
    window.alert(" Great job, you've survived te game! You now have a score of")
  } else {
    window.alert("you've lost your robot in battle")
  }
  // ask player if they would like to play again
  var playAgainConfirm = window.confirm("Would you like to play again")
  if (playAgainConfirm) {
    // restart game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon.")
  }
}









var shop = function () {
  // ask the player what the'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADe your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  // use switch to carryout action
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      
      break;

    case "leave":
    case "LEAVE":
      window.alert("leaving store");

      // do nothing so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again");

      // call shop agin to fore player to pick a valid option
      shop();
      break;
  }
}

// function to generate random number
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}


var playerInfo = {
  Name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.attack = 10;
    this. money = 10;
  },

  refillHealth:  function(){
    if(this.money >= 7){
      window.alert("Refilling players health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
    } else{
      window.alert("You don't have enough.");
    }
  },

  upgradeAttack: function() {
    if(this.money >= 7){
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
    } else {
      window.alert( "You don't have enough money.")
    }
  },


};

var enemyInfo = [
{
name: "Roborto",
attack: randomNumber(10, 14)
},
{
name: "Amy Android",
attack: randomNumber(10, 14)
},
{
name: "Robo Trumble",
attack: randomNumber(10, 14)
}
];

// start first game when page loads
startGame();