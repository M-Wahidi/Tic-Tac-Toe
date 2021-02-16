//--------------------------------------------------- selector ----------------------------------------------------------//
let bodyBackGround = document.getElementById('body')
let playerTurnInfo = document.querySelector('.player-turn')
let baordContainer = document.querySelector('.tic-tac-toe-boardContainer')
let restartPage = document.querySelector('.restartPage')
let restartButton = document.querySelector('.restart')
let switchTurn = 0
let cells = []
document.addEventListener('DOMContentLoaded', function () {
    drawBoard()
    playerTurnInfo.innerHTML = 'Player X Turn'



})
//--------------------------------------------------- event handler ----------------------------------------------------------//

baordContainer.addEventListener('click', function (e) {
   let target = e.target
   swapPlayer(target)
   chk_empty_cell(target)
   displayInfo()
   draw()
   checkWin(target)
   console.log(switchTurn)
})
restartButton.addEventListener('click', function (e)  {
    location.reload()
 })


//--------------------------------------------------- functions ----------------------------------------------------------//
function drawBoard() {
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('div')
        cell.classList.add(`cell`) // style all cell
        cell.classList.add(`cell${i}`) // remove the last 3 cell bottom-border && remove the right-border
        cells.push(cell)
        baordContainer.append(cell)
    }

}

function swapPlayer(chkTurn){
    if(chkTurn.innerHTML === '' && switchTurn === 0){
        chkTurn.innerHTML = 'X'
        switchTurn++;  
        }
        else if(chkTurn.innerHTML === '' && switchTurn === 1){
            chkTurn.innerHTML = 'O'
            switchTurn--
            }
}
function chk_empty_cell (chkTarget){
        //Check if cell X is Empty
         if (chkTarget.innerHTML !== '' && switchTurn === 0 && chkTarget.innerHTML === 'X'  ){
            chkTarget.innerHTML = 'X'
                switchTurn = 0;

        }
        else if (chkTarget.innerHTML !== '' && switchTurn === 0  && chkTarget.innerHTML === 'O' ){
            chkTarget.innerHTML = 'O'
            chkTarget.style.color = 'rgb(217, 89, 100)'
            switchTurn = 0;

        }
     
        //Check if cell O is Empty
        if (chkTarget.innerHTML !== '' && switchTurn === 1 && chkTarget.innerHTML === 'X'  ){
                chkTarget.innerHTML = 'X'
                    switchTurn = 1;
    
            }
        else if (chkTarget.innerHTML !== '' && switchTurn === 1  && chkTarget.innerHTML === 'O' ){
                chkTarget.innerHTML = 'O'
                switchTurn = 1;
            }
        }

        function displayInfo(){
            switchTurn === 0 ? playerTurnInfo.innerHTML = 'Player X Turn' : playerTurnInfo.innerHTML = 'Player O Turn'
        }   
   function checkWin(personWin){
             // rows check
            if(cells[0].innerHTML ===  cells[1].innerHTML && cells[0].innerHTML === cells[2].innerHTML && cells[0].innerHTML !== '')
            {

                playerTurnInfo.innerHTML = `${personWin.innerHTML} Win`
                playerTurnInfo.innerHTML === 'X Win' ?  playerTurnInfo.style.color = 'white' : playerTurnInfo.style.color = 'rgb(217, 89, 100)'
                restartPage.classList.add('activeRestartPage')
                bodyBackGround.classList.add('background')
             


            } 

            if(cells[3].innerHTML === cells[4].innerHTML && cells[3].innerHTML === cells[5].innerHTML && cells[3].innerHTML !== '')
            {
                playerTurnInfo.innerHTML = `${personWin.innerHTML} Win`
                playerTurnInfo.innerHTML === 'X Win' ?  playerTurnInfo.style.color = 'white' : playerTurnInfo.style.color = 'rgb(217, 89, 100)'
                restartPage.classList.add('activeRestartPage')
                bodyBackGround.classList.add('background')
            } 

            if(cells[6].innerHTML === cells[7].innerHTML && cells[6].innerHTML ===  cells[8].innerHTML && cells[6].innerHTML !== '')
            {
                playerTurnInfo.innerHTML = `${personWin.innerHTML} Win`
                playerTurnInfo.innerHTML === 'X Win' ?  playerTurnInfo.style.color = 'white' : playerTurnInfo.style.color = 'rgb(217, 89, 100)'
                restartPage.classList.add('activeRestartPage')
                bodyBackGround.classList.add('background')
            } 

            // //columns check
            if(cells[0].innerHTML === cells[3].innerHTML && cells[0].innerHTML === cells[6].innerHTML && cells[0].innerHTML !== '')
            {
                playerTurnInfo.innerHTML = `${personWin.innerHTML} Win`
                playerTurnInfo.innerHTML === 'X Win' ?  playerTurnInfo.style.color = 'white' : playerTurnInfo.style.color = 'rgb(217, 89, 100)'
                restartPage.classList.add('activeRestartPage')
                bodyBackGround.classList.add('background')
            } 

            if(cells[1].innerHTML === cells[4].innerHTML && cells[1].innerHTML === cells[7].innerHTML   && cells[1].innerHTML !== '')
            {
                playerTurnInfo.innerHTML = `${personWin.innerHTML} Win`
                playerTurnInfo.innerHTML === 'X Win' ?  playerTurnInfo.style.color = 'white' : playerTurnInfo.style.color = 'rgb(217, 89, 100)'
                restartPage.classList.add('activeRestartPage')
                bodyBackGround.classList.add('background')
            } 


            if(cells[2].innerHTML === cells[5].innerHTML && cells[2].innerHTML === cells[8].innerHTML   && cells[2].innerHTML !== '')
            {
                playerTurnInfo.innerHTML = `${personWin.innerHTML} Win`
                playerTurnInfo.innerHTML === 'X Win' ?  playerTurnInfo.style.color = 'white' : playerTurnInfo.style.color = 'rgb(217, 89, 100)'
                restartPage.classList.add('activeRestartPage')
                bodyBackGround.classList.add('background')
            } 

            // // dignoal check
            if(cells[0].innerHTML === cells[4].innerHTML && cells[0].innerHTML === cells[8].innerHTML && cells[0].innerHTML )
            {
                playerTurnInfo.innerHTML = `${personWin.innerHTML} Win`
                playerTurnInfo.innerHTML === 'X Win' ?  playerTurnInfo.style.color = 'white' : playerTurnInfo.style.color = 'rgb(217, 89, 100)'
                restartPage.classList.add('activeRestartPage')
                bodyBackGround.classList.add('background')
            } 

            if(cells[2].innerHTML === cells[4].innerHTML && cells[2].innerHTML === cells[6].innerHTML && cells[2].innerHTML)
            {
                playerTurnInfo.innerHTML = `${personWin.innerHTML} Win`
                playerTurnInfo.innerHTML === 'X Win' ?  playerTurnInfo.style.color = 'white' : playerTurnInfo.style.color = 'rgb(217, 89, 100)'
                restartPage.classList.add('activeRestartPage')
                bodyBackGround.classList.add('background')
            }         
    }
// chechk darw
 function draw(){
     if(cells.every(x => x.innerHTML !== '' )){
     restartPage.classList.add('activeRestartPage')
     playerTurnInfo.innerHTML = `Draw`
     bodyBackGround.classList.add('background')

    }
}
            
                    



            
        
    
