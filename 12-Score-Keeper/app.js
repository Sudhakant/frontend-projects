const scoreH1 = document.querySelector('#score');
const selector = document.querySelector('#points');

let [playerOneSpan, playerTwoSpan] = document.querySelectorAll('span');
const [playerOneButton, playerTwoButton, resetButton] = document.querySelectorAll('button');

let selectedValue = +selector.value;
let playerOneScore = +playerOneSpan.innerText;
let playerTwoScore = +playerTwoSpan.innerText;

selector.addEventListener('change', function(evt){
    selectedValue = +evt.target.value;
    // console.log(playerOne, playerTwo, reset)
    resetUtil(selectedValue);
})

playerOneButton.addEventListener('click', function(){
    // const currentScore = +playerOneSpan.innerText;
    playerOneScore += 1;
    scoreUtil(playerOneScore);
    playerOneSpan.innerText = playerOneScore;
})

playerTwoButton.addEventListener('click', function(){
    playerTwoScore += 1;
    scoreUtil(playerTwoScore)
    playerTwoSpan.innerText = playerTwoScore;
})

resetButton.addEventListener('click', function(){
    resetUtil();
})

function resetUtil(selectedValue=0){
    // selector.value = 5;
    selector.selectedIndex = 0;
    if(selectedValue){
        selector.value = selectedValue;
    }
    playerOneSpan.innerText = 0;
    playerTwoSpan.innerText = 0;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    selectedValue = +selector.value;
    playerOneScore = +playerOneSpan.innerText;
    playerTwoScore = +playerTwoSpan.innerText;
}

function scoreUtil (score){
    // const currentScore = +playerOneSpan.innerText;
    if(selectedValue <= score){
        // console.log('Player 1 Wins');
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
}