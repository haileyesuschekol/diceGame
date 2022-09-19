 'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice =document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const playerTurn1 = document.querySelector('.player--0');
const playerTurn2 = document.querySelector('.player--1');

let scores , activePlayer, CurrentScore, playing;

// initialize the game
const reset = function(){

    scores=[0,0];
    activePlayer = 0;
    CurrentScore = 0;
    playing =true;

    score0.textContent=0;
    score1.textContent=0;
    currentScore1.textContent=0;
    currentScore1.textContent=0;

    playerTurn1.classList.remove('player--winner');
    playerTurn2.classList.remove('player--winner');
    playerTurn1.classList.add('player--active');
    playerTurn2.classList.remove('player--active');   
}
    reset();

// switch player 
const switchPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    CurrentScore=0;
    activePlayer = (activePlayer === 0 ? 1 : 0)
    playerTurn1.classList.toggle('player--active');
    playerTurn2.classList.toggle('player--active');
    }

//rolling dice functionality 

 btnroll.addEventListener('click' , function(){

    if(playing){
    const diceRoll = Math.trunc(Math.random()*6)+1;
    console.log(diceRoll);
    dice.src =`dice-${diceRoll}.png`;

    if(diceRoll!==1){
        CurrentScore += diceRoll;
        document.querySelector(`#current--${activePlayer}`).textContent= CurrentScore;
        // currentScore1.textContent = CurrentScore;
    }
    else{
        switchPlayer();
    }
    } 
 })
    // hold btn     
 btnhold.addEventListener('click' , function(){
    if(playing){
    scores[activePlayer] += CurrentScore ;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    

        if(scores[activePlayer]>=15){
            // dice.classList.add('hidden');
            dice.src='diceIntros.png';
            playing=false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player${activePlayer}`). classList.remove('player--active');
            
        }else{
            //switch player
       switchPlayer();
    }}
 })

 btnNew.addEventListener('click', reset);
