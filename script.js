let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".new");
let turnO=true;
let msg=document.querySelector("#msg");
let chance=document.querySelector("#chance");
let count=0;
let mode=document.querySelector(".mode");
let currMode="light";

mode.addEventListener("click",() =>{
    body=document.querySelector("body");
    head=document.querySelector(".head");
    if(currMode==="light"){
        currMode="dark";
        head.classList.add("darkhead");
        body.classList.add("bodydark");
        reset.classList.add("newdark");
        mode.classList.add("lightmode");
        for(let box of boxes){
            box.classList.add("boxdark");
        }mode.innerText="Light Mode";
    }else{
        currMode="light";
        body.classList.remove("bodydark");
        head.classList.remove("darkhead");
        reset.classList.remove("newdark");
        mode.classList.remove("lightmode");
        for(let box of boxes){
            box.classList.remove("boxdark");
        }mode.innerText="Dark Mode";
    }
    
});
console.log(currMode);

const winPatterns=[
    [0,1,2], [3,4,5] , [6,7,8],
    [0,3,6], [1,4,7] , [2,5,8],
    [0,4,8], [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        count++;
        if(turnO) {
            box.style.color="green"; 
            box.innerText="O";
            chance.innerText="X";
            chance.style.color="red";
            turnO=false;
        }
        else {
            box.style.color="red";
            box.innerText="X";
            chance.style.color="green";
            chance.innerText="O";
            turnO=true;
        }box.disabled=true;
        checkWinner();
    })
})

const resetgame=() =>{
    turnO=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }msg.innerText=" ";
    count=0;
    chance.style.color="green";
    chance.innerText="O";
}

reset.addEventListener("click",resetgame);

const disableboxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let box1=boxes[pattern[0]].innerText;
        let box2=boxes[pattern[1]].innerText;
        let box3=boxes[pattern[2]].innerText;

        if(box1!="" && box2!="" && box3!=""){
            if(box1===box2 && box2===box3){
                console.log("Winner is ",box1);
                msg.innerText=`WINNER IS ${box1}!!`;
                disableboxes();
            }
        }if(count===9){
            msg.innerText=`DRAW!!`;
            disableboxes();
        }
    }
}