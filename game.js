let contPlayer = 0
let contPc = 0

const player = document.getElementById("user") 
const pc = document.getElementById("pc2")
const contador = document.getElementById("contador")
const playing = document.getElementById("playing")
const winner = document.getElementById("winner")
const loser= document.getElementById("loser")


let player1 = ""
let player2 = ""


playing.addEventListener("click" , () => {
    reset()
    playerPc()
})

function reset(){
player1 = document.querySelector('input[name="play"]:checked').value
player.innerHTML= player1
pc.innerHTML = ""

}

function playerPc(){
    let opt = ["PEDRA","PAPEL", "TESOURA"]
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num]
    pc.innerHTML=player2
    analizar()

}


function analizar(){
 
    // playing.disabled = true

    let win="0"


    if(player1 == player2){

    }
    else if(player1 == "PEDRA"){
        win = player2 =="TESOURA" ? 1 : -1
    }
    else if(player1 == "PAPEL"){
        win = player2 =="PEDRA" ? 1 : -1
    }
    else if(player1 == "TESOURA"){
        win = player2 =="PAPEL" ? 1 : -1
    }

    if (win == 0){

    }
    else if(win > 0){
        contPlayer = contPlayer + 1
    }

    else {
        contPc = contPc + 1
    }

    if (contPlayer >= 5){
        winner.classList.remove('none')
    }


    if (contPc >= 5){
        loser.classList.remove('none')
    }

    contador.innerHTML = contPlayer + ":" + contPc

    setTimeout(()=>{
        playing.disabled = false
        clear();
    },1000)
}