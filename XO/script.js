var statement = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var a = 1;
var b = 1;

function myMove(cellNum) {
  if (statement[cellNum] == 0) {
    statement[cellNum] = 1;
    fillIt(1, cellNum);
  }
}

function botesMove() {
  var bot = Math.floor(Math.random() * 9);
  if (statement[bot] == 0) {
    statement[bot] = 2;
    fillIt(2, bot);
  } else {
    for (var i = 0; i <= statement.length; i++) {
      if (statement[i] == 0) {
        botesMove();
        break;
      }
    }
  }
}

function fillIt(num, name) {
  if (num == 1) {
    var x = document.createElement("p");
    x.innerHTML = "X";
    var myCell = document.getElementById(`Cell${name}`);
    myCell.appendChild(x);
    setTimeout(() => {
      Xwon();
    }, 10);
  } else if (num == 2) {
    var x = document.createElement("p");
    x.innerHTML = "O";
    var myCell = document.getElementById(`Cell${name}`);
    myCell.appendChild(x);
    setTimeout(() => {
      Owon();
    }, 10);
  }
}

function playAgain() {
  for (var i = 0; i < statement.length; i++) {
    var x = document.getElementById(`Cell${i}`);
    if (x.firstElementChild && x.firstElementChild.tagName === "P") {
      x.removeChild(x.firstElementChild);
    }
    statement[i] = 0;
  }
}

function Xwon() {
  if (statement[0] == 1 && statement[1] == 1 && statement[2] == 1) {
    alert("YOU WON!");
    score(1);
  } else if (statement[3] == 1 && statement[4] == 1 && statement[5] == 1) {
    alert("YOU WON!");
    score(1);
  } else if (statement[6] == 1 && statement[7] == 1 && statement[8] == 1) {
    alert("YOU WON!");
    score(1);
  } else if (statement[0] == 1 && statement[4] == 1 && statement[8] == 1) {
    alert("YOU WON!");
    score(1);
  } else if (statement[6] == 1 && statement[4] == 1 && statement[2] == 1) {
    alert("YOU WON!");
    score(1);
  } else if (statement[0] == 1 && statement[3] == 1 && statement[6] == 1) {
    alert("YOU WON!");
    score(1);
  } else if (statement[1] == 1 && statement[4] == 1 && statement[7] == 1) {
    alert("YOU WON!");
    score(1);
  } else if (statement[2] == 1 && statement[5] == 1 && statement[8] == 1) {
    alert("YOU WON!");
    score(1);
  } else {
    botesMove();
  }
}

function Owon() {
  if (statement[0] == 2 && statement[1] == 2 && statement[2] == 2) {
    alert("BOT WON!");
    score(2);
  } else if (statement[3] == 2 && statement[4] == 2 && statement[5] == 2) {
    alert("BOT WON!");
    score(2);
  } else if (statement[6] == 2 && statement[7] == 2 && statement[8] == 2) {
    alert("BOT WON!");
    score(2);
  } else if (statement[0] == 2 && statement[4] == 2 && statement[8] == 2) {
    alert("BOT WON!");
    score(2);
  } else if (statement[6] == 2 && statement[4] == 2 && statement[2] == 2) {
    alert("BOT WON!");
    score(2);
  } else if (statement[0] == 2 && statement[3] == 2 && statement[6] == 2) {
    alert("BOT WON!");
    score(2);
  } else if (statement[1] == 2 && statement[4] == 2 && statement[7] == 2) {
    alert("BOT WON!");
    score(2);
  } else if (statement[2] == 2 && statement[5] == 2 && statement[8] == 2) {
    alert("BOT WON!");
    score(2);
  }
}

function score(num) {
  if (num == 1) {
    var you = document.getElementById("you");
    you.innerHTML = "";
    you.innerHTML = `You: ${a}`;
    a++;
    playAgain();
  } else if (num == 2) {
    var bot = document.getElementById("bot");
    bot.innerHTML = "";
    bot.innerHTML = `Bot: ${b}`;
    b++;
    playAgain();
  }
}
