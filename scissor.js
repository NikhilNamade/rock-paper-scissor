let choices = document.querySelectorAll(".choice");
let msgclass = document.querySelector(".msgclass");
let user = 0;
let comp = 0;
let userScore = document.querySelector("#userscore");
let compScore = document.querySelector("#computerscore");
let mainmsg = document.querySelector(".mainmsg");



const gencompchoice = () =>{
    const option = ["stone","paper","scissor"];
    const random = Math.floor(Math.random()*3);
    return option[random];
};

const draw = () =>{
  
    msgclass.innerText = "Game is Draw!Play Again";
    mainmsg.style.backgroundColor = "blue";
};


const Winner = (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        user++;
        userScore.innerText = user;
        msgclass.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        mainmsg.style.backgroundColor = "green";
      
    }else{
        
        msgclass.innerText = `Computer Win!Computer ${compChoice} beats ${userChoice}`;
        comp++;
        compScore.innerText = comp;
        mainmsg.style.backgroundColor = "red";
    }
};



const playGame = (userChoice) =>{
    console.log("userChoice:",userChoice);
    const compChoice = gencompchoice();
    console.log("compChoice:",compChoice);
    if(userChoice === compChoice)
    {
        draw();
    }else{
        let userWin = true;
        if(userChoice === "stone")
        {
            //paper,scissor
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //stone,scissor
            userWin = compChoice === "scissor" ? false:true; 
        }else{
            userWin = compChoice === "stone" ? false:true;
        }
        Winner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
 choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
 });
});

