function leapYear(año){
    if(año % 4 == 0 && año % 100 != 0 || año % 400 == 0){
        return true;
    }else{
        return false;
    }
}

function checkLeapYear(){
    const año = document.getElementById("yearInput").value;
    const result = document.getElementById("result");
    if(leapYear(año)){
        result.innerText = `${año} es un año bisiesto ` + true;
    }

    else{
        result.innerText = `${año} no es un año bisiesto ` + false;
    }
}

