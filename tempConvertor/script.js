// Getting all necessary DOM elements
const inputBox = document.getElementById("inputBox");
const ctf = document.getElementById("ctf");
const ftc = document.getElementById("ftc");
const result = document.getElementById("result");

function conversion() {
    const val = parseFloat(inputBox.value); // Get latest input value as a number (original comment)
    let temp;

    // Check if user entered a valid number
    if (isNaN(val)) {
        result.innerText = "Please enter a valid number.";
        return;
    }

    // Celsius to Fahrenheit conversion
    if (ctf.checked) {
        temp = (val * 9 / 5) + 32;
        result.innerText = `Temp: ${temp.toFixed(2)} °F`;
    } 
    
    // Fahrenheit to Celsius conversion
    else if (ftc.checked) {
        temp = (val - 32) * 5 / 9;
        result.innerText = `Temp: ${temp.toFixed(2)} °C`;
    } 
    
    // If no conversion type is selected
    else {
        result.innerText = "Please select a conversion type.";
    }
}
