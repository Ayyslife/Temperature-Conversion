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
        document.getElementById('Fahrenheit-output').innerHTML = celsiusInput;
        document.getElementById('Kelvin-output').innerHTML = celsiusInput;
    });   
}
function farConvert(){
    document.getElementById('inputTemp').addEventListener('input', function(e){
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('Celsius-output').style.visibility = 'visible';
        document.getElementById('Kelvin-output').style.visibility = 'visible';
        document.getElementById('Fahrenheit-output').style.visibility = 'hidden';
        let fahrenheitInput = e.target.value;
        document.getElementById('Celsius-output').innerHTML = fahrenheitInput;
        document.getElementById('Kelvin-output').innerHTML = fahrenheitInput;
    });  
}

function kelConvert(){
    document.getElementById('inputTemp').addEventListener('input', function(e){
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('Fahrenheit-output').style.visibility = 'visible';
        document.getElementById('Celsius-output').style.visibility = 'visible';
        document.getElementById('Kelvin-output').style.visibility = 'hidden';
        let kelvinInput = e.target.value;
        document.getElementById('Celsius-output').innerHTML = kelvinInput;
        document.getElementById('Fahrenheit-output').innerHTML = kelvinInput;
    });  
}
