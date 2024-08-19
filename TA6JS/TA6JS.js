function convertToCelsius() {
    const temp = document.getElementById('temperatureInput').value;
    const celsius = (temp - 32) * 5 / 9;
    const celsiusRounded = Math.round(celsius * 10) / 10;
    document.getElementById('result').innerText = `${temp}°F is ${celsiusRounded}°C`;
}

function convertToFahrenheit() {
    const temp = document.getElementById('temperatureInput').value;
    const fahrenheit = temp * 9 / 5 + 32;
    const fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
    document.getElementById('result').innerText = `${temp}°C is ${fahrenheitRounded}°F`;
}