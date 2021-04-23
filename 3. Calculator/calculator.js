let newVal = "";
let preVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let doubleclick = false;

function buttonPress(num){
    if(resultVal){
        newVal = num;
        resultVal = "";
    }
    else{
        if(num === '.'){
            if(decimalClicked == false){
                newVal = newVal+num;
                decimalClicked = true;
            }
        }
        else{
            newVal = String(newVal)+num;
        }
    }
    if(preVal){
        document.getElementById('inputbox').value = String(preVal)+mathOperator+String(newVal);
    }
    else{
        document.getElementById('inputbox').value = newVal;
    }
}

function mathBtnPress(operator){
    if(doubleclick == true){
    }
    else if(!resultVal){
            preVal = newVal;
            doubleclick = true;
        }
        else{
            preVal = resultVal;
            doubleclick = true;
        }
    newVal = "";
    mathOperator = operator;
    resultVal = "";
    decimalClicked = false;
    document.getElementById('inputbox').value = String(preVal)+operator+String(newVal);
}

function equalButPress(){
    decimalClicked = false;
    doubleclick = false;
    preVal = parseFloat(preVal);
    newVal = parseFloat(newVal);
    switch(mathOperator){
        case "+":
            resultVal = preVal + newVal;
            resultVal = Math.round(resultVal * 100) / 100;
            break;
        case "-":
            resultVal = preVal - newVal;
            resultVal = Math.round(resultVal * 100) / 100;
            break;
        case "×":
            resultVal = preVal * newVal;
            resultVal = Math.round(resultVal * 100) / 100;
            break;
        case "÷":
            resultVal = preVal / newVal;
            resultVal = Math.round(resultVal * 100) / 100;
            break;
        default:
            resultVal = newVal;
    }
    if(preVal){
        preVal = resultVal;
        document.getElementById('inputbox').value = resultVal;
    }
    else{
        document.getElementById('inputbox').value = newVal;
    }
    preVal = '';
}

function buttonClear(){
    newVal = '';
    preVal = '';
    resultVal = '';
    mathOperator = '';
    decimalClicked = false;
    doubleclick = false;
    document.getElementById('inputbox').value = '';
}