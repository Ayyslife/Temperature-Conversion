document.getElementById("output").style.visibility = "hidden";

let selector = document.getElementById('selector');
selector.addEventListener('click', function(){
    if(selector.value == 1){
        celConvert(); 
    }
    else if(selector.value == 2){
        farConvert();
    }
    else{
        kelConvert();
    }
});

function celConvert(){
    document.getElementById('inputTemp').addEventListener('input', function(e){
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('Fahrenheit-output').style.visibility = 'visible';
        document.getElementById('Kelvin-output').style.visibility = 'visible';
        document.getElementById('Celsius-output').style.visibility = 'hidden';
        let celsiusInput = e.target.value;
        document.getElementById('Fahrenheit-output').innerHTML = celsiusInput * 9/5 + 32;
        document.getElementById('Kelvin-output').innerHTML = celsiusInput * 1 + 273.15;
    });   
}

function farConvert(){//dosent work
    document.getElementById('inputTemp').addEventListener('input', function(e){
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('Celsius-output').style.visibility = 'visible';
        document.getElementById('Kelvin-output').style.visibility = 'visible';
        document.getElementById('Fahrenheit-output').style.visibility = 'hidden';
        let fahrenheitInput = e.target.value;
        document.getElementById('Celsius-output').innerHTML = fahrenheitInput * 1 - 32 * 5/9;
        document.getElementById('Kelvin-output').innerHTML = fahrenheitInput + 459.67 * 5/9; 
    });  
}

function kelConvert(){
    document.getElementById('inputTemp').addEventListener('input', function(e){
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('Fahrenheit-output').style.visibility = 'visible';
        document.getElementById('Celsius-output').style.visibility = 'visible';
        document.getElementById('Kelvin-output').style.visibility = 'hidden';
        let kelvinInput = e.target.value;
        document.getElementById('Celsius-output').innerHTML = kelvinInput * 1 - 273.15;
        document.getElementById('Fahrenheit-output').innerHTML = kelvinInput * 9/5 - 495.67;
    });  
}
