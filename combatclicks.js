//var currentEnemy;

var completedRooms = 0;
var fightingBoss = false;

class Hero {
    constructor(name, className, health, agility, intelligence, strength) {
        this.name = name;
        this.className = className;
        this.health = health;
        this.agility = agility;
        this.intelligence = intelligence;
        this.strength = strength;
    }

}

class Enemy {
  constructor(name, health, enemyAttack){
    this.name = name;
    this.health = health;
    this.enemyAttack = enemyAttack;
    }
}

var Deck = [];

function howToPlay(){
  alert("Welcome! Click a class, click a room, and start clicking!");
}

function classCrusher() {
  player = new Hero("D", "Crusher", 30, 3, 3, 3);
   document.getElementById('playerName').innerHTML = player.name;
   document.getElementById('playerClass').innerHTML = player.className;
   document.getElementById('playerHealth').innerHTML = player.health;
   document.getElementById('playerAgi').innerHTML = player.agility;
   document.getElementById('playerInt').innerHTML = player.intelligence;
   document.getElementById('playerStr').innerHTML = player.strength;
}

function classCatalyst() {
  player = new Hero("D", "Catalyst", 30, 3, 10, 3);
   document.getElementById('playerName').innerHTML = player.name;
   document.getElementById('playerClass').innerHTML = player.className;
   document.getElementById('playerHealth').innerHTML = player.health;
   document.getElementById('playerAgi').innerHTML = player.agility;
   document.getElementById('playerInt').innerHTML = player.intelligence;
   document.getElementById('playerStr').innerHTML = player.strength;
}

function classCretin() {
  player = new Hero("D", "Cretin", 30, 3, 3, 3);
   document.getElementById('playerName').innerHTML = player.name;
   document.getElementById('playerClass').innerHTML = player.className;
   document.getElementById('playerHealth').innerHTML = player.health;
   document.getElementById('playerAgi').innerHTML = player.agility;
   document.getElementById('playerInt').innerHTML = player.intelligence;
   document.getElementById('playerStr').innerHTML = player.strength;
}

function checkBoss() {
  if (completedRooms >= 5)
  {
    let enemies = [
      new Enemy("Mega Knight", 10, 5),
      new Enemy("Mega Mage", 5, 10),
      new Enemy("Mega Big Boy", 15, 10)
    ];
    currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    document.getElementById('enemyName').innerHTML = currentEnemy.name;
    document.getElementById('enemyHealth').innerHTML = currentEnemy.health;
    document.getElementById('enemyAttack').innerHTML = currentEnemy.enemyAttack;
    fightingBoss = true;
  }
    else {

    }
  }



function classSelection(name){
  if (name==1)
  {
    classCrusher();
  }
  else if(name==2)
  {
    classCatalyst();
  }
  else {
    classCretin();
  }
  displayStats();
}

function populateEnemies(){
  let enemies = [
    new Enemy("Knight", 10, 5),
    new Enemy("Mage", 5, 10),
    new Enemy("Big Boy", 15, 10)
  ];
  currentEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  document.getElementById('enemyName').innerHTML = currentEnemy.name;
  document.getElementById('enemyHealth').innerHTML = currentEnemy.health;
  document.getElementById('enemyAttack').innerHTML = currentEnemy.enemyAttack;
  checkBoss();
}




function deckCheck(){
  if (Deck.length <= 4)
  {

  }
}

function turnTimerStart(){
var turnleft = player.intelligence;
var enabler = document.getElementsByClassName("deckButton");
for (var i = 0; i < enabler.length; i++) {
    enabler[i].disabled = false;
}
var turnTimer = setInterval(function(){
  if(turnleft <= 0){
    clearInterval(turnTimer);
    document.getElementById("turnClock").innerHTML = "Over";
    monsterTurn();
    var disabler = document.getElementsByClassName("deckButton");
    for (var i = 0; i < disabler.length; i++) {
        disabler[i].disabled = true;
    }
  } else {
    document.getElementById("turnClock").innerHTML = turnleft + " seconds";
  }
  turnleft -= 1;
}, 1000);
}

function monsterTurn(){
  player.health -= currentEnemy.enemyAttack;
  document.getElementById('playerHealth').innerHTML = player.health;
}

function hitEnemy(){
  currentEnemy.health -= player.strength * 100;
  document.getElementById('enemyHealth').innerHTML = currentEnemy.health;
  endCombatCheck();
}

function endCombatCheck(){
  if (currentEnemy.health <= 0)
  {
    completedRooms++;
    $( ".enemyStatsDisplay" ).hide();
    $( "#roomSelection" ).show();
    $( "#startTurnButtonDisplay" ).hide();
    if (fightingBoss == true)
    {
      $("body").hide();
    }
    else
    {

    }
  }
  else
  {

  }
}

function loseCondition(){
  if (player.health <= 0)
  {
    alert("YOU LOSE!");
  }
  else
  {

  }
}

$(document).ready(function(){
$(".optionButton").click(function(){
  $("#bottomStatsWrapper").show();
  $("#characterOptions").hide();
  $("#roomSection").show();
});})

$(document).ready(function(){
$(".roomButton").click(function(){
  $("#roomSelection").hide();
  $("#startTurnButtonDisplay").show();
  $("#enemyStatsDisplay").show();
});})


//document.getElementById("playerHealth").innerHTML =  player.health;
