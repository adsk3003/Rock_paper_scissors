function computer(){
    let comp_num = Math.random()*3;
    let computerselection;
    comp_num = Math.floor(comp_num);
    if(comp_num == 0)
        computerselection = "rock";
    else if(comp_num == 1)
        computerselection = "paper";
    else
        computerselection = "scissors";
    return computerselection;
}

let playerselection;
let computerselection;

//document.getElementById('rock').onclick = function() {Rock_clicked()};
//document.getElementById('paper').onclick = function() {Paper_clicked()};
//document.getElementById('scissors').onclick = function() {Scissors_clicked()};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerselection = button.id;
        // setTimeout(playRound(), 10000);
        playRound();
    });
});

// function Rock_clicked(){
//     playerselection = 'rock';
//     playRound();
// }
// function Paper_clicked(){
//     playerselection = 'paper';
//     playRound();
// }
// function Scissors_clicked(){
//     playerselection = 'scissors';
//     playRound();
// }

function inc_score_user(){
    var current_score = 0 || document.getElementById('score_user').innerText;
    current_score = parseInt(current_score, 10);
    document.getElementById('score_user').innerText = `${current_score+1}`;
}

function inc_score_comp(){
    var current_score = 0 || document.getElementById('score_comp').innerText;
    current_score = parseInt(current_score, 10);
    document.getElementById('score_comp').innerText = `${current_score+1}`;
}

function playRound(){
    computerselection = computer();
    document.getElementById('computer_chose').innerText = computerselection;
    //playerselection = prompt("rock, paper or scissors ?");
    //playerselection = playerselection.toLowerCase();
    if(playerselection == computerselection){
        console.log('draw');
        document.getElementById('result').innerHTML = "It's a TIE!";
    }
    else if(playerselection == 'paper' && computerselection == 'rock'){
        console.log('You Win!');
        document.getElementById('result').innerHTML = 'You Win!';
        inc_score_user();
    }
    else if(playerselection == 'paper' && computerselection == 'scissors'){
        console.log('You lose!');
        document.getElementById('result').innerHTML = 'You lose!';
        inc_score_comp();
    }
    else if(playerselection == 'rock' && computerselection == 'scissors'){
        console.log('You Win!');
        document.getElementById('result').innerHTML = 'You Win!';
        inc_score_user();
    }
    else if(playerselection == 'rock' && computerselection == 'paper'){
        console.log('You lose!');
        document.getElementById('result').innerHTML = 'You lose!';
        inc_score_comp();
    }
    else if(playerselection == 'scissors' && computerselection == 'rock'){
        console.log('You lose!');
        document.getElementById('result').innerHTML = 'You lose!';
        inc_score_comp();
    }
    else if(playerselection == 'scissors' && computerselection == 'paper'){
        console.log('You Win!');
        document.getElementById('result').innerHTML = 'You Win!';
        inc_score_user();
    }
    else{
        console.log("Invalid Input");
        alert("Invalid Input");
        return;
    }
    console.log(`Computer chose ${computerselection}`);
    console.log(`You chose ${playerselection}`);
}