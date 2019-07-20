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

function playRound(){
    let computerselection = computer();
    playerselection = prompt("rock, paper or scissors ?");
    if(playerselection == computerselection){
        console.log('draw');
        alert('draw');
    }
    else if(playerselection == 'paper' && computerselection == 'rock'){
        console.log('You Win!');
        alert('You Win!');
    }
    else if(playerselection == 'paper' && computerselection == 'scissors'){
        console.log('You lose!');
        alert('You lose!');
    }
    else if(playerselection == 'rock' && computerselection == 'scissors'){
        console.log('You Win!');
        alert('You Win!');
    }
    else if(playerselection == 'rock' && computerselection == 'paper'){
        console.log('You lose!');
        alert('You lose!');
    }
    else if(playerselection == 'scissors' && computerselection == 'rock'){
        console.log('You lose!');
        alert('You lose!');
    }
    else if(playerselection == 'scissors' && computerselection == 'paper'){
        console.log('You Win!');
        alert('You Win!');
    }
    else{
        console.log("Invalid Input");
        alert("Invalid Input");
        return;
    }
    console.log(`Computer chose ${computerselection}`);
    console.log(`You chose ${playerselection}`);
}
playRound();