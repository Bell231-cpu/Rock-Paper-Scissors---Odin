function getComputerChoice (){
    let value = Math.floor(Math.random() * 3);
    if (value == 0){
        return "Rock";
    }
    else if (value == 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice (){
    let choice = prompt("Choose Your Sign: ", );
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    while(choice != ("Rock" || "Paper" || "Scissors")){
        choice = prompt("Please enter a proper sign: ");
        choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    }
    return choice;
}


let ComputerChoice = getComputerChoice();
let UserChoice = getHumanChoice();

if(ComputerChoice === UserChoice) {
    console.log("Its a draw!");
}

else if(ComputerChoice == "Rock"){
    if(UserChoice == "Paper"){
        console.log("You WIN!!!!!");
    }
    else if(UserChoice == "Scissors"){
        console.log("You LOSE!!!!!");
    }
}

else if(ComputerChoice == "Paper"){
    if(UserChoice == "Scissors"){
        console.log("You WIN!!!!!");
    }
    else if(UserChoice == "Rock"){
        console.log("You LOSE!!!!!");
    }
}

else if(ComputerChoice == "Scissors"){
    if(UserChoice == "Rock"){
        console.log("You WIN!!!!!");
    }
    else if(UserChoice == "Paper"){
        console.log("You LOSE!!!!!");
    }
}