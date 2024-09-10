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
    // console.log(currentScore, selectedValue)
    playerOneScore += 1;
    if(selectedValue <= (playerOneScore)){
        console.log('Win');
        this.disabled = true;
        playerTwoButton.disabled = true;
    }
    playerOneSpan.innerText = playerOneScore;
})








// playerTwo.addEventListener('click', function(){
//     playerTwoScore.innerText = +playerTwoScore.innerText + 1;
// })