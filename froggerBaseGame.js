/* Frogger Base Game
.querySelector()
.querySelectorAll()
.classList.add()
.classList.remove()
.classList.contains()
switch()
e.key
.forEach()
setInterval()
clearInterval()
.addEventListener()
.removeEventListener()
.textContent
*/
const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result'); // the # means that js will look for an element with the id of whatever is behind the hastag
const startPauseButton = document.querySelector('#start-pause-button');
const restartGameButton = document.querySelector('#restart-game-button');
const squares = document.querySelectorAll('.grid div'); // looks for anything with the class name of grid to find the divs inside of it
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');
let currentIndex = 76; //currentIndex is the value that is attached to the frog in this game
const width = 9;
let timerId // leaving a value like this is the short way of saying null
let currentTime = 20;
let outcomeTimerId // leaving a value like this is the short way of saying null
const  originalLogs = document.getElementsByClassName=('.brownStart');
const  originalRivers = document.getElementsByClassName=('.lightBlueStart');
const  originalCars = document.getElementsByClassName=('.tanStart');
const  originalRoads = document.getElementsByClassName=('.lightGreyStart');

function moveFrog(e) {
    squares[currentIndex].classList.remove('frog'); // makes the div in the grid with the currentIndex number lose the properties of the class frog

    switch(e.key) {
        case 'ArrowLeft' :
            console.log('move left');
            if (currentIndex % width !== 0) currentIndex -= 1;
            break
        case 'ArrowRight' :
            console.log('move right');
            if (currentIndex % width < width -1) currentIndex += 1;
            break
        case 'ArrowUp' :
            console.log('move up');
            if (currentIndex - width >= 0) currentIndex -= width;
            break
        case 'ArrowDown' :
            console.log('move down');
            if (currentIndex + width < width * width) currentIndex += width;
    }
    squares[currentIndex].classList.add('frog'); //makes the div in the grid with the currentIndex number take on the properties of the class frog

}

function autoMoveElements() {
    currentTime--;
    timeLeftDisplay.textContent = currentTime;
    logsLeft.forEach(logLeft => moveLogLeft(logLeft));
    logsRight.forEach(logRight => moveLogRight(logRight));
    carsLeft.forEach(carLeft => moveCarLeft(carLeft));
    carsRight.forEach(carRight => moveCarRight(carRight));
}

function checkOutcomes() {
    lose();
    win();
}

function moveLogLeft (logLeft) {
    switch(true) {
        case logLeft.classList.contains('l1') :
            logLeft.classList.remove('l1');
            logLeft.classList.add('l2');
            break
         case logLeft.classList.contains('l2') :
            logLeft.classList.remove('l2');
            logLeft.classList.add('l3');
            break
        case logLeft.classList.contains('l3') :
            logLeft.classList.remove('l3');
            logLeft.classList.add('l4');
            break
        case logLeft.classList.contains('l4') :
            logLeft.classList.remove('l4');
            logLeft.classList.add('l5');
            break
        case logLeft.classList.contains('l5') :
            logLeft.classList.remove('l5');
            logLeft.classList.add('l1');
            break    
    }
}

function moveLogRight (logRight) {
    switch(true) {
        case logRight.classList.contains('l1') :
            logRight.classList.remove('l1');
            logRight.classList.add('l5');
            break
         case logRight.classList.contains('l2') :
            logRight.classList.remove('l2');
            logRight.classList.add('l1');
            break
        case logRight.classList.contains('l3') :
            logRight.classList.remove('l3');
            logRight.classList.add('l2');
            break
        case logRight.classList.contains('l4') :
            logRight.classList.remove('l4');
            logRight.classList.add('l3');
            break
        case logRight.classList.contains('l5') :
            logRight.classList.remove('l5');
            logRight.classList.add('l4');
            break    
    }
}

function moveCarLeft (carLeft) {
    switch(true) {
        case carLeft.classList.contains('c1') :
            carLeft.classList.remove('c1');
            carLeft.classList.add('c2');
            break
         case carLeft.classList.contains('c2') :
            carLeft.classList.remove('c2');
            carLeft.classList.add('c3');
            break
        case carLeft.classList.contains('c3') :
            carLeft.classList.remove('c3');
            carLeft.classList.add('c1');
            break  
    }
}

function moveCarRight (carRight) {
    switch(true) {
        case carRight.classList.contains('c1') :
            carRight.classList.remove('c1');
            carRight.classList.add('c3');
            break
         case carRight.classList.contains('c2') :
            carRight.classList.remove('c2');
            carRight.classList.add('c1');
            break
        case carRight.classList.contains('c3') :
            carRight.classList.remove('c3');
            carRight.classList.add('c2');
            break    
    }
}

function resetLogColor(originalLog){
    switch(true){
        case originalLog.classList.contains('l4') :
            originalLog.classList.remove('l4');
            originalLog.classList.add('l3');
            break
         case originalLog.classList.contains('l4') :
            originalLog.classList.remove('l4');
            originalLog.classList.add('l3');
            break
        case originalLog.classList.contains('l4') :
            originalLog.classList.remove('l4');
            originalLog.classList.add('l3');
            break
    }
}

function lose() {
    if(squares[currentIndex].classList.contains('c1') ||
       squares[currentIndex].classList.contains('l4') ||
       squares[currentIndex].classList.contains('l5') ||
       currentTime == 0){
        resultDisplay.textContent = 'You Lose!';
        clearInterval(timerId);
        clearInterval(outcomeTimerId);
        squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keyup' , moveFrog)
    }
}

function win(){
    if (squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = 'You Win!'
        clearInterval(timerId);
        clearInterval(outcomeTimerId);
        document.removeEventListener('keyup' , moveFrog)
    }
}

//puts all the logs and cars into their original places
function resetElements() {
    console.log('Reset Elements...anyone?');
    const  originalLogs = document.getElementsByClassName=('.brownStart');
    const  originalRivers = document.getElementsByClassName=('.lightBlueStart');
    const  originalCars = document.getElementsByClassName=('.tanStart');
    const  originalRoads = document.getElementsByClassName=('.lightGreyStart');
    originalLogs.forEach(originalLog => resetLogColor(originalLog));
    originalRivers.forEach(originalRiver => resetRiverColor(originalRiver));
    originalCars.forEach(originalCar => resetCarColor(originalCar));
    originalRoads.forEach(originalRoad => resetRoadColor(originalRoad));
    
}

//puts the frog back from its spot in the game back to its starting spot
function resetFrog() {
    document.removeEventListener('keyup' , moveFrog)
    squares[currentIndex].classList.remove('frog');
    currentIndex = 76;
    squares[currentIndex].classList.add('frog');
}      

//including click allows it to listen for clicks and adding the () allows the function to be attached to the event listener
startPauseButton.addEventListener('click', () => {
    if(timerId){
        clearInterval(timerId);
        clearInterval(outcomeTimerId);
        timerId = null;
        outcomeTimerId = null;
        document.removeEventListener('keyup', moveFrog);
    } else {
        timerId = setInterval(autoMoveElements, 1000);
        outcomeTimerId = setInterval(checkOutcomes, 50);
        document.addEventListener('keyup', moveFrog); // when key is lifted up, calls moveFrog
    }
})

//keep working on this button
restartGameButton.addEventListener('click', () => {
    if(timerId){
        currentTime = 20;
        timeLeftDisplay.textContent = currentTime;
        resultDisplay.textContent = '0';
        clearInterval(timerId);
        clearInterval(outcomeTimerId);
        timerId = null;
        outcomeTimerId = null;
        resetFrog();
        resetElements();
        console.log('I was clicked!');
        
    } //else {
        //timerId = setInterval(autoMoveElements, 1000);
        //outcomeTimerId = setInterval(checkOutcomes, 50);
       // document.addEventListener('keyup', moveFrog); // when key is lifted up, calls moveFrog
   // }
})
