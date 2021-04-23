var tens = 0;
var seconds = 0;
var minutes = 0;
var lap = 0;
var tens_element = document.getElementById('tens');
var sec_element = document.getElementById('seconds');
var min_element = document.getElementById('minutes');
var laptime = document.getElementById('LapTime');
var laptime_container = document.getElementsByClassName('laptime_container');
var TimeInterval;
var p_element;

function ButtonStartTimer(){
    TimeInterval = setInterval(StartTimer, 10);
}

function ButtonStopTimer(){
    clearInterval(TimeInterval);
}

function ButtonResetTimer(){
    clearInterval(TimeInterval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    tens_element.textContent = tens;
    sec_element.textContent = seconds;
    min_element.textContent = minutes;
    laptime.textContent = '';
    lap = 0;
    laptime_container[0].style.visibility = 'hidden';
}

laptime_container[0].style.visibility = 'hidden';
function ButtonLapTimer(){
    lap++;
    p_element = document.createElement('p');
    if(tens < 9){
        if(seconds < 9){
            var p_text = document.createTextNode(String("Lap "+lap+": "+minutes+":"+"0"+seconds+":"+"0"+tens));
            p_element.append(p_text);
            laptime.append(p_element);
        }
        else{
            var p_text = document.createTextNode(String("Lap "+lap+": "+minutes+":"+seconds+":"+"0"+tens));
            p_element.append(p_text);
            laptime.append(p_element);
        }
    }
    else if(seconds < 9){
        if(tens<9){
            var p_text = document.createTextNode(String("Lap "+lap+": "+minutes+":"+"0"+seconds+":"+tens));
            p_element.append(p_text);
            laptime.append(p_element);
        }
        else{
            var p_text = document.createTextNode(String("Lap "+lap+": "+minutes+":"+"0"+seconds+":"+tens));
            p_element.append(p_text);
            laptime.append(p_element);
        }
    }
    else{
        var p_text = document.createTextNode(String("Lap "+lap+": "+minutes+":"+seconds+":"+tens));
        p_element.append(p_text);
        laptime.append(p_element);
    }
    if(laptime_container[0].style.visibility === 'hidden'){
        laptime_container[0].style.visibility = 'visible';
    }
}

function StartTimer(){
     if (tens < 9){
        tens++;
        tens_element.textContent = "0"+tens;
    }
    if (tens >= 99){
        seconds++;
        sec_element.textContent = "0"+seconds;
        tens = 0;
    }
    if (tens >= 9){
        tens++;
        tens_element.textContent = tens;
    }
    if (minutes >= 9 && tens >= 99 && seconds >= 59){
        tens = 0;
        seconds = 0;
        minutes++;
        tens_element.textContent = "00";
        sec_element.textContent = "00";
        min_element.textContent = minutes;
    }
    if (minutes < 9 && tens >= 99 && seconds >= 59){
        tens = 0;
        seconds = 0;
        minutes++;
        min_element.textContent = "0"+minutes;
        sec_element.textContent = "0"+seconds;
        tens_element.textContent = "0"+tens;
    }
    if (seconds >=9 && tens >= 99){
        seconds++;
        sec_element.textContent = seconds;
        tens = 0;
    }
}