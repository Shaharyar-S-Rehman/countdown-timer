var minHead = document.getElementById('min')
var secHead = document.getElementById('sec')
var milisecHead = document.getElementById('milisec')
var btndis = document.getElementById('disabled')

var min = prompt("Enter Minutes", "60")
var sec = 00;
var milisec = 00;
var interval;
minHead.innerHTML=min;

function timer() {
    milisec++
    milisecHead.innerHTML = milisec
    if (milisec == 100) {
        sec--
        secHead.innerHTML = sec
        milisec = 00
    } else if (sec == 00) {
        min--
        minHead.innerHTML = min
        sec = 60
    }
    else if (min < 0) {
        reset()
        document.write("Time is over")
    }
}




function start() {
    interval = setInterval(timer, 10)
    btndis.disabled = true
}

function pause() {
    clearInterval(interval)
    btndis.disabled = false
}

function reset() {
    milisec = 00;
    sec = 00;
    min = 00;

    milisecHead.innerHTML = milisec;
    secHead.innerHTML = sec;
    minHead.innerHTML = min;
    clearInterval(interval)
    btndis.disabled = false

}
