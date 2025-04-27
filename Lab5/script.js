let startBtn = document.getElementById('startBtn');
let difficultySelect = document.getElementById('difficulty');
let colorSelect = document.getElementById('color');
let scoreDisplay = document.getElementById('score');
let timerDisplay = document.getElementById('timer');
let gameArea = document.getElementById('gameArea');
let target = document.getElementById('target');
let homePage = document.getElementById('controls');

let score = 0;
let timer;
let timeLeft = 3;
let moveTime = 3; 
let areaWidth;
let areaHeight;

const easySize = 100, mediumSize = 50, hardSize = 25, superHardSize = 10;

function moveTarget() {    
    const randomX = Math.random() * areaWidth;
    const randomY = Math.random() * areaHeight;

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY+125}px`;
}

function startTimer() {

    clearInterval(timer);

    timeLeft = moveTime;
    timerDisplay.textContent = `Час: ${timeLeft}`;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Час: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    alert(`Гру закінчено! Ваш рахунок: ${score}`);
    scoreDisplay.textContent = "";
    timerDisplay.textContent = "";
    target.style.width = 0;
    //target.style.width = 0;
    homePage.innerHTML = `<h1>Pixel Hunt</h1>

    <label>Choose difficulty:</label>
    <select id="difficulty">
        <option value="">--Please choose an option--</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="superHard">SuperHard</option>
    </select>

    <label>Choose color:</label>
    <select id="color">
        <option value="">--Please choose an option--</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
    </select>

    <button id="startBtn">Start</button>`
    const startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startGame);
    difficultySelect = document.getElementById('difficulty');
    colorSelect = document.getElementById('color');
    scoreDisplay = document.getElementById('score');
    timerDisplay = document.getElementById('timer');
    gameArea = document.getElementById('gameArea');
    target = document.getElementById('target');
}

function startGame() {
    const difficulty = difficultySelect.value;
    const color = colorSelect.value;

    if (!difficulty || !color) {
        alert('Будь ласка, оберіть складність і колір!');
        return;
    }
    homePage.innerHTML = ''

    target.style.backgroundColor = color;
    areaWidth = gameArea.clientWidth;
    areaHeight = gameArea.clientHeight;
    // target.style.left = `${areaWidth/2}px`;
    // target.style.top = `${areaHeight/2+100}px`;
    if (difficulty === 'easy'){
        moveTime = 5;
        target.style.width = `${easySize}px`;
        target.style.height = `${easySize}px`;
        areaWidth -= easySize;
        areaHeight -= easySize/2;
    } 
    else if (difficulty === 'medium'){
        moveTime = 3;
        target.style.width = `${mediumSize}px`;
        target.style.height = `${mediumSize}px`;
        areaWidth -= mediumSize;
        areaHeight -= mediumSize/2;
    }
    else if (difficulty === 'hard'){
        moveTime = 1;
        target.style.width = `${hardSize}px`;
        target.style.height = `${hardSize}px`;
        areaWidth -= hardSize;
        areaHeight -= hardSize/2;
    } 
    else if (difficulty === 'superHard'){
        moveTime = 2;
        target.style.width = `${superHardSize}px`;
        target.style.height = `${superHardSize}px`;
        target.style.backgroundColor = "#f9f9f9";
        areaWidth -= superHardSize;
        areaHeight -= superHardSize/2;
    } 
   
    score = 0;
    scoreDisplay.textContent = `Очки: ${score}`;
    gameArea.style.display = 'block';
    target.style.left = `${areaWidth/2}px`;
    target.style.top = `${areaHeight/2+100}px`;
    startTimer();
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Очки: ${score}`;
    moveTarget();
    startTimer();
});

startBtn.addEventListener('click', startGame);
gameArea.addEventListener('click', function(event){
    if(event.target !== target){
        clearInterval(timer);
        endGame();
    }
});