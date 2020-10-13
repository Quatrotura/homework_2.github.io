let alarm_date = document.getElementById('input-date');
let alarm_time = document.getElementById('input-time');
let submit_button = document.getElementById('turn-on-alarm-button');
let wrapper = document.getElementById('wrapper');
let alarm_ring = new Audio('wake_up.mp3');
let warning = document.getElementById('warning');
let currenttime = document.getElementById('currenttime');
let impossible = "Нельзя взять и проснуться в прошлом";
let check = false;

let time = new Date;
let hours   = time.getHours();
let mins    = time.getMinutes();

hours <= 9 ? currenttime.textContent += "0" + hours + " : ":currenttime.textContent += hours + " : ";
mins <= 9  ? currenttime.textContent += "0" + mins:currenttime.textContent += mins;




submit_button.onclick = turnon;

function turnoffBtnAndMusic() {
    let button = document.createElement('button');
    button.className = "button";
    button.innerHTML = "Выкл";

    if (check == false) {
        submit_button.after(button);
        button.addEventListener( "click" , () => alarm_ring.pause());
        button.addEventListener( "click" , () => button.remove());
        button.addEventListener( "click",  () => warning.textContent='');
        button.addEventListener( "click",  () => window.location.reload())
    }

}

function turnon() {
    let now = new Date();
    let set_alarm = new Date (alarm_date.value+"T"+alarm_time.value);
    let alarm_stamp = set_alarm-now;
    warning.textContent = "";

    if (alarm_stamp > 0) {
        turnoffBtnAndMusic();        
        setTimeout(() => {  alarm_ring.play(); }, alarm_stamp);
        warning.textContent = `Будильник установлен на ${alarm_time.value}`;
        check = true;
    }
    else if (alarm_date.value == '' || alarm_time.value == '') {
        warning.textContent = "Установите дату и время"; 
    }
    else {
        warning.textContent = "Нельзя просто взять и проснуться в прошлом";
    }
}



//let alarm_stamp = (now.getTime()-(now.getTimezoneOffset()*60000));


