function sayHello() {
    const name = prompt("What is your name?");
    alert("Hello, " + name + "! Welcome to my website.");
}

sayHello();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("You rolled a " + dice + "!");
}

rollDice();

function jobSearch() {
    let month = 0;
    let dice = Math.floor(Math.random() * 6) + 1;
    month += dice; 
    /* ^ same as month = month + dice */
    alert("It will take you " + month + " months to become a developer...");
}

jobSearch();

function confidenceLevel(html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        alert("You are a pro!");
    } else if (average >= 4) {
        alert("You're nearly there!");
    } else {
        alert("You are a loser!");
    }
}

confidenceLevel(1, 1, 1);


function darkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.backgroundImage = 'none';
    document.body.getElementById('#').style.color = 'white';
}