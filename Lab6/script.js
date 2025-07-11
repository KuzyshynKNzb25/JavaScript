"use strict";
const gameTable = document.getElementById("gameTable");
const startGame = document.getElementById("startGame");
const restartGame = document.getElementById("restartGame");
const plates = document.getElementsByClassName("item");
const target = document.getElementById("target");
const moves = document.getElementById("moves");
const timerDisplay = document.getElementById("time");
const youAreWinner = document.getElementById("youWinner");
let currentObject = {};
let numberOfMinMovies = 0;
let index = 0;
let timer;
let numberOfMoves = 0;
let timerIsGoing = false;
let isYouAreWinner = false;
function setField(){
    numberOfMinMovies = currentObject.minNumberOfMovies;
    for (let i = 0;i < currentObject.matrixon.length; i++) {
        for (let j = 0; j < currentObject.matrixon[i].length; j++) {
            if(currentObject.matrixon[i][j] == 1) {
                plates[j + i*currentObject.matrixon[i].length].style.backgroundColor = "#ffff99"
            }
            else {
                plates[j + i*currentObject.matrixon[i].length].style.backgroundColor = "#222233"
            }
        }
    }
}

function setupGameTable(res) {
    let newIndex = index;
    while (newIndex === index) {
        index = Math.floor(Math.random() * res.length);
    }
    currentObject = res[index];
    setField()
    target.textContent = "Target:" + currentObject.minNumberOfMovies;
}

function restart(res) {
    currentObject = res[index];
    setField()
}

function onStartGame() {
    clearInterval(timer);
    timerIsGoing = false;
    timerDisplay.textContent = `Time: 0`
    numberOfMoves = 0;
    moves.textContent = "Moves: 0";
    if(isYouAreWinner){
        isYouAreWinner = false;
        youAreWinner.style.display = "none";
    }
    $ajaxUtils.sendGetRequest("data/tables.json",setupGameTable, true);

}

function onRestartGame() {
    clearInterval(timer);
    timerIsGoing = false;
    timerDisplay.textContent = `Time: 0`
    numberOfMoves = 0;
    moves.textContent = "Moves: 0";
    if(isYouAreWinner){
        isYouAreWinner = false;
        youAreWinner.style.display = "none";
    }
    $ajaxUtils.sendGetRequest("data/tables.json",restart, true);
}

$ajaxUtils.sendGetRequest("data/tables.json",setupGameTable, true);


function setButtonsClickable(){
    for (let i = 0; i < plates.length; i++) {
        plates[i].addEventListener('click', () => {
            if(isYouAreWinner){
                return;
            }

            let horizontalPosition =  i % currentObject.matrixon.length;
            let verticalPosition =  i/currentObject.matrixon.length|0;
            if(!timerIsGoing){
                startTimer();
            }

            numberOfMoves++;
            moves.textContent = `Moves: ${numberOfMoves}`;
            if(horizontalPosition === 0){
                for(let j = 0;j < 2;j++){
                    if(currentObject.matrixon[verticalPosition][j] == 1){
                        currentObject.matrixon[verticalPosition][j] = 0;
                        plates[verticalPosition*currentObject.matrixon.length+j].style.backgroundColor = "#222233";
                    }
                    else {
                        currentObject.matrixon[verticalPosition][j] = 1;
                        plates[verticalPosition*currentObject.matrixon.length+j].style.backgroundColor = "#ffff99";
                    }
                }
            }
            else if(horizontalPosition === currentObject.matrixon.length-1){
                for(let j = currentObject.matrixon.length-2;j < currentObject.matrixon.length;j++) {
                    if(currentObject.matrixon[verticalPosition][j] == 1){
                        currentObject.matrixon[verticalPosition][j] = 0;
                        plates[verticalPosition*currentObject.matrixon.length+j].style.backgroundColor = "#222233";
                    }
                    else {
                        currentObject.matrixon[verticalPosition][j] = 1;
                        plates[verticalPosition*currentObject.matrixon.length+j].style.backgroundColor = "#ffff99";
                    }
                }
            }
            else {
                for(let j = horizontalPosition - 1;j <= horizontalPosition+1;j++) {
                    if(currentObject.matrixon[verticalPosition][j] == 1){
                        currentObject.matrixon[verticalPosition][j] = 0;
                        plates[verticalPosition*currentObject.matrixon.length+j].style.backgroundColor = "#222233";
                    }
                    else {
                        currentObject.matrixon[verticalPosition][j] = 1;
                        plates[verticalPosition*currentObject.matrixon.length+j].style.backgroundColor = "#ffff99";
                    }
                }
            }

            if(verticalPosition === 0){
                if(currentObject.matrixon[1][horizontalPosition] == 1){
                    currentObject.matrixon[1][horizontalPosition] = 0;
                    plates[1*currentObject.matrixon.length + horizontalPosition].style.backgroundColor = "#222233";
                }
                else {
                    currentObject.matrixon[1][horizontalPosition] = 1;
                    plates[1*currentObject.matrixon.length + horizontalPosition].style.backgroundColor = "#ffff99";
                }
            }
            else if(verticalPosition === currentObject.matrixon.length-1){
                if(currentObject.matrixon[verticalPosition-1][horizontalPosition] == 1){
                    currentObject.matrixon[verticalPosition-1][horizontalPosition] = 0;
                    plates[(verticalPosition-1)*currentObject.matrixon.length + horizontalPosition].style.backgroundColor = "#222233";
                }
                else {
                    currentObject.matrixon[verticalPosition-1][horizontalPosition] = 1;
                    plates[(verticalPosition-1)*currentObject.matrixon.length + horizontalPosition].style.backgroundColor = "#ffff99";
                }
            }
            else {
                if(currentObject.matrixon[verticalPosition-1][horizontalPosition] == 1){
                    currentObject.matrixon[verticalPosition-1][horizontalPosition] = 0;
                    plates[(verticalPosition-1)*currentObject.matrixon.length + horizontalPosition].style.backgroundColor = "#222233";
                }
                else {
                    currentObject.matrixon[verticalPosition-1][horizontalPosition] = 1;
                    plates[(verticalPosition-1)*currentObject.matrixon.length + horizontalPosition].style.backgroundColor = "#ffff99";
                }

                if(currentObject.matrixon[verticalPosition+1][horizontalPosition] == 1){
                    currentObject.matrixon[verticalPosition+1][horizontalPosition] = 0;
                    plates[(verticalPosition+1)*currentObject.matrixon.length + horizontalPosition].style.backgroundColor = "#222233";
                }
                else {
                    currentObject.matrixon[verticalPosition+1][horizontalPosition] = 1;
                    plates[(verticalPosition+1)*currentObject.matrixon.length + horizontalPosition].style.backgroundColor = "#ffff99";
                }
            }
            isYouAreWinner = true;
            for(let j = 0; j < currentObject.matrixon.length;j++){
                for(let k = 0;k < currentObject.matrixon[j].length;k++){
                    if(currentObject.matrixon[j][k] === 1){
                        isYouAreWinner = false;
                        break;
                    }
                }
            }
            if(isYouAreWinner){
                clearInterval(timer);
                timerIsGoing = false;
                youAreWinner.style.display = "block";
            }
        });

    }
}

setButtonsClickable();

function startTimer() {
    timerIsGoing = true;

    clearInterval(timer);
    let time = 0;
    timer = setInterval(() => {
        time++;
        timerDisplay.textContent = `Time: ${time}`;
    }, 1000);
}

timerDisplay.textContent = `Time: 0`
startGame.addEventListener("click", onStartGame);
restartGame.addEventListener("click", onRestartGame);