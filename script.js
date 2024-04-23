function convertToFar() {
  let inputCelsius = parseFloat(document.getElementById("inputCelsius").value);
  let result = (inputCelsius * 9) / 5 + 32;
  document.getElementById("outputFahrenheit").value = result.toFixed(2);
  document.getElementById("calculation").value = inputCelsius + " Celsius x 9/5 + 32 = " + result.toFixed(2) + " Fahrenheit";
}

function reset() {
  document.getElementById("inputCelsius").value = "";
  document.getElementById("outputFahrenheit").value = "";
  document.getElementById("calculation").value = "";
}

function reverse() {
  let inputFahrenheit = parseFloat(document.getElementById("outputFahrenheit").value);
  let result = ((inputFahrenheit - 32) * 5) / 9;
  document.getElementById("inputCelsius").value = result.toFixed(2);
  document.getElementById("calculation").value = inputFahrenheit + " Fahrenheit - 32 x 5/9 = " + result.toFixed(2) + " Celsius";
}
