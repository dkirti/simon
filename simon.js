let gameSeq=[];
let userSeq=[];
let btns=["red","orange","green","purple"];
let h3=document.querySelector("h3");

let start=false;
let level=0;
document.addEventListener("keypress",function(){
    if(start==false){
    console.log("game is started");
    start=true;
    }
    levelUp();
})

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randCol=btns[randIdx];
    let randbtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
}
    else{
        h3.innerHTML=`Game over! your score was <b>${level} </b> <br> press any  key again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userCol=btn.getAttribute("id");
    // console.log(userCol);
    userSeq.push(userCol);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}