let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=() =>{
    const options =["rock", "paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawGame=() =>{
    msg.innerText="Game Was Draw. Play  again.";
        msg.style.backgroundColor="#081b31";
};


const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You Lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{

    const compChoice =genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
         let userWin=true;
         if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }
            if(compChoice==="scissors"){
                userWin=true;
            }
        }

            else if(userChoice==="paper"){
                if(compChoice==="scissors"){
                    userWin=false;
                }
                if(compChoice==="rock"){
                    userWin=true;
                }
            }

            else if(userChoice==="scissors"){
                if(compChoice==="rock"){
                    userWin=false;
                }
                if(compChoice==="paper"){
                    userWin=true;
                }
            }
            showWinner(userWin, userChoice, compChoice);

         
        }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

