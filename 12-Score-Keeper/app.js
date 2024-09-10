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
})

playerOneButton.addEventListener('click', function(){
    // const currentScore = +playerOneSpan.innerText;
    console.log(playerOneScore, selectedValue);
    playerOneScore += 1;
    if(selectedValue <= (playerOneScore)){
        console.log('Win');
        this.disabled = true;
        playerTwoButton.disabled = true;
    }
    playerOneSpan.innerText = playerOneScore;
})

playerTwoButton.addEventListener('click', function(){
    playerTwoScore += 1;
    if(selectedValue <= (playerTwoScore)){
        console.log('Win');
        playerOneButton.disabled = true;
        this.disabled = true;
    }
    playerTwoSpan.innerText = playerTwoScore;
})

resetButton.addEventListener('click', function(){
    // selector.value = 5;
    selector.selectedIndex = 0;
    playerOneSpan.innerText = 0;
    playerTwoSpan.innerText = 0;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    selectedValue = +selector.value;
    playerOneScore = +playerOneSpan.innerText;
    playerTwoScore = +playerTwoSpan.innerText;
})