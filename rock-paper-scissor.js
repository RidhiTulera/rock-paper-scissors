let container=document.querySelectorAll(".content");
let userscore_display=document.querySelector("#player");
let compscore_display=document.querySelector("#computer");
let move=document.querySelector("#final");
let result_div=document.querySelector(".result");
let reset=document.querySelector(".reset");
let userScore=0;
let compScore=0;

let score=(winner,computerchoice,userchoice)=>{
    if(winner===true){
        if(computerchoice!=userchoice){
            userScore+=1;
        }
        else{
            userScore=userScore;
        }
    }
    else if(winner===false){
        compScore+=1;
    }
}

container.forEach(choice => {
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        let computerchoice=compchoice()

        let winner=checkWinner(userchoice,computerchoice);
        score(winner,compchoice,userchoice);

        if(winner===true){
            if(computerchoice===userchoice){
                move.innerText="It was a draw";
                result_div.style.backgroundColor="#964ADB";
            }
    
            else{
                userscore_display.innerText=userScore;
                move.innerText=`You Won! ${userchoice} beats ${computerchoice}`;
                result_div.style.backgroundColor="green";
                result_div.style.color="white";    
            }
        }

        else if(winner===false){
            compscore_display.innerText=compScore;
            move.innerText=`You Lost! ${computerchoice} beats ${userchoice}`;
            result_div.style.backgroundColor="red";
            result_div.style.color="white";
        }
    })
});


let compchoice=()=>{
    let list=["rock","paper","scissor"];
     let rndmidx=Math.floor(Math.random()*3);
     console.log(list[rndmidx]);
     return list[rndmidx];
}

let drawGame=()=>{
    console.log("draw");
}

let checkWinner=(userchoice,compchoice)=>{
    let userwon=true;
    if(userchoice===compchoice){
        userwon=true;
    }
    else{
        if(userchoice==="rock"){
            userwon=compchoice==="scissor"?true:false;
        }
        else if(userchoice==="paper"){
            userwon=compchoice==="rock"?true:false;
        }
        else{
            userwon=compchoice==="paper"?true:false;
        }
    }
    return userwon;
}

reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;  
})