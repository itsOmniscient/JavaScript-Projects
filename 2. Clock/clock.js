timeClockElem = document.getElementById('timeClock');
var Interval;
var intervalChange = 0;
Interval = setInterval(Time24, 1000);
function SwitchTime(){
    switch(intervalChange){
        case 1:
            clearInterval(Interval);
            Interval = setInterval(Time24, 1000);
            intervalChange = 0;
            break;
        default:
            clearInterval(Interval);
            Interval = setInterval(Time12, 1000);
            intervalChange = 1;
            break;
    }
}

function Time24(){
    var time_now = new Date();
    var second = time_now.getSeconds();
    var minute = time_now.getMinutes();
    var hour = time_now.getHours();
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    if (hour > 12){
        var session = "PM";
    }
    else{
        var session = "AM";
    }
    var time = hour+":"+minute+":"+second+" "+session;
    timeClockElem.textContent = time;
}

function Time12(){
    var time_now = new Date();
    var time12 = time_now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})
    timeClockElem.textContent = time12;
}