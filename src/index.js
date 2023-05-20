"use strict";

// Getting all the HTML elements
var timer = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var stopBtn = document.getElementById("stop-btn");
var restartBtn = document.getElementById("restart-btn");

// TimerId is to store the ID returned by setInterval function, which will be used while stoping the Stop watch
var timerId;


function startTimer(){

    let timerVal = timer.innerText
    let m = parseInt(timerVal.slice(0,2)), s = parseInt(timerVal.slice(3,5)), ms = parseInt(timerVal.slice(6));
    console.log('Timer started');

    // Disabling other button controls & enabling only STOP
    stopBtn.disabled = false;
    startBtn.disabled = true;
    restartBtn.disabled = true;

    // Updating the timer values for each milliseconds
    timerId = setInterval(function(){
        if(ms < 999){
            ms += 1;
        }
        else if(s < 59){
            s += 1;
            ms = 0;
        }
        else{
            m += 1;
            s = 0;
            ms = 0;
        }
        timerVal = m.toString().padStart(2,'0') + ":" + s.toString().padStart(2,'0') + ":" + ms.toString().padStart(3,'0');
        timer.innerText = timerVal;
    }, 1)

}

function stopTimer(){
    
    if(!timerId){
        console.error('No timer is running.');
        return;
    }

    // Clearing the timerId if exist
    clearInterval(timerId);

    // Enabling other button controls & disabling only STOP
    stopBtn.disabled = true;
    startBtn.disabled = false;
    restartBtn.disabled = false;
    timerId = undefined;
    console.log('Stopped timer');
}

function restartTimer(){
    let value = timer.innerText;
    console.log(value)
    if(value !== '00:00:000'){
        timer.innerText = '00:00:000'
        console.log('Restarted timer');
        return;
    }
    console.error('Timer is all set !!');
}

// Disabling the stop button initially as Timer has not yet started.
stopBtn.disabled = true;

console.log('JS loaded')

// Adding the event listeners to corresponding buttons.
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
restartBtn.addEventListener('click', restartTimer);
