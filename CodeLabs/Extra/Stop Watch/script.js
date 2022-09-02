let seconds = 00;
let tens = 00;
let outputSeconds = document.getElementById('second');
let outputTens = document.getElementById('tens');
let buttonStart = document.getElementById('btn-start');
let buttonStop = document.getElementById('btn-stop');
let buttonReset = document.getElementById('btn-reset');
let Interval;
buttonStart.addEventListener('click', () =>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () =>{
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () =>{
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 60){
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        outputTens.innerHTML = "0" + tens;

    }

    if(seconds > 9){
        outputSeconds.innerHTML = seconds;
    }
}