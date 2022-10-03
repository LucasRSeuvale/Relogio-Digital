function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
    // Variable to store AM / PM
    // var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
    // Converting the hour in 12-hour format
    // if (hour == 0) {
    //     hour = 12;
    // } else {
    //     if (hour > 12) {
    //         hour = hour - 12;
    //     }
    // }
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    // console.log(hour + " : " + minute + " : " + second + " " + period)
    //document.getElementById("digital").innerText = hour + " : " + minute + " : " + second + " " + period;
    document.getElementById("Hours").innerText = hour;
    document.getElementById("Minutes").innerText = minute;
    document.getElementById("Seconds").innerText = second;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);

}
// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
Time();

let Hora = 0;
let Minuto = 0;
let Segundo = 0;
let Milesegundo = 0;

let crono = 0;

document.getElementById("start").onclick = () => start();
document.getElementById("stop").onclick = () => stop();
document.getElementById("reset").onclick = () => reset();

function start() {
    stop();
    crono = setInterval(() => { Timer(); }, 10);
}

function stop() {
    clearInterval(crono);
}

function reset() {
     Hora = 0;
     Minuto = 0;
     Segundo = 0;
     Milesegundo = 0;

    document.getElementById('Hora').innerText = '00';
    document.getElementById('Minuto').innerText = '00';
    document.getElementById('Segundo').innerText = '00';
    document.getElementById('Milesegundo').innerText = '000';

}

function Timer() {

    if ((Milesegundo += 10) == 1000) {
        Milesegundo = 0;
        Segundo++;
    }
    if (Segundo == 60) {
        Segundo = 0;
        Minuto++;
    }
    if (Minuto == 60) {
        Minuto = 0;
        Hora++;
    }

    document.getElementById('Hora').innerText = returnData(Hora);
    document.getElementById('Minuto').innerText = returnData(Minuto);
    document.getElementById('Segundo').innerText = returnData(Segundo); 
   

    function returnData(input) {
        return input >= 10 ? input : `0${input}`

    }
}