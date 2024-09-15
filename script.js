console.log("Welcome to Tic Tac Toe")
let music= new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover= new Audio("gameover.mp3")
let turn ="X"


const changeTurn=()=>{
    return turn==="X"?"0": "X"

}

const checkWin= () =>{

}

//Game Logic
let boxes= documents.getElementByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext =document.querySelector('.boxtext');
    boxtext.addEventlistener('click',()=>{
        if(e.innerText===''){
            e.innerText=turn;
            changeTurn();
            audioturn.play();
            checkWin();
            document.getElemntByClassName(turn)[0].innerText="Turn for"+turn;

        }
    })
})
