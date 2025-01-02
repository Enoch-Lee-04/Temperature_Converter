// Conversion functions
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const celsiusToKelvin = (celsius) => celsius + 273.15;
const kelvinToCelsius = (kelvin) => kelvin - 273.15;
const fahrenheitToKelvin = (fahrenheit) => celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
const kelvinToFahrenheit = (kelvin) => celsiusToFahrenheit(kelvinToCelsius(kelvin));

// Main conversion function
const convert = () => {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid number!");
        return;
    }

    if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") {
            result = celsiusToFahrenheit(inputTemp);
        } else if (toUnit === "Kelvin") {
            result = celsiusToKelvin(inputTemp);
        } else {
            result = inputTemp;
        }
    } else if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") {
            result = fahrenheitToCelsius(inputTemp);
        } else if (toUnit === "Kelvin") {
            result = fahrenheitToKelvin(inputTemp);
        } else {
            result = inputTemp;
        }
    } else if (fromUnit === "Kelvin") {
        if (toUnit === "Celsius") {
            result = kelvinToCelsius(inputTemp);
        } else if (toUnit === "Fahrenheit") {
            result = kelvinToFahrenheit(inputTemp);
        } else {
            result = inputTemp;
        }
    }

    document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
};