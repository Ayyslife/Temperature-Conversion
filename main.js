document.getElementById('output').style.visibility = 'hidden';
document.getElementById('celsiusInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let celsiusInput = e.target.value;
    document.getElementById('Fahrenheit-output').innerHTML = celsiusInput * 9/5 + 32;
    document.getElementById('Kelvin-output').innerHTML = celsiusInput + 273.15;
})