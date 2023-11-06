document.getElementById("convertBtn").addEventListener("click", function () {
    var inputTemperature = parseFloat(document.getElementById("input").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputTemperature = document.getElementById("output");

    var result;

    if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
        // Celsius to Fahrenheit conversion
        result = (inputTemperature * 9 / 5) + 32;
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
        // Fahrenheit to Celsius conversion
        result = (inputTemperature - 32) * 5 / 9;
    } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
        // Celsius to Kelvin conversion
        result = inputTemperature + 273.15;
    } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
        // Fahrenheit to Kelvin conversion
        result = (inputTemperature - 32) * 5 / 9 + 273.15;
    } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
        // Kelvin to Celsius conversion
        result = inputTemperature - 273.15;
    } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
        // Kelvin to Fahrenheit conversion
        result = (inputTemperature - 273.15) * 9 / 5 + 32;
    } else {
        // Handle invalid unit combinations
        outputTemperature.value = inputTemperature;
        return;
    }

    outputTemperature.value = result.toFixed(2);
});
