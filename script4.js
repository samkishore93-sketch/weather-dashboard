async function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);

        if (!response.ok) {
            throw new Error("Weather data not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>${city}</h2>
            <p><strong>Temperature:</strong> ${data.current_condition[0].temp_C} °C</p>
            <p><strong>Humidity:</strong> ${data.current_condition[0].humidity}%</p>
            <p><strong>Weather:</strong> ${data.current_condition[0].weatherDesc[0].value}</p>
            <p><strong>Wind Speed:</strong> ${data.current_condition[0].windspeedKmph} km/h</p>
        `;
    } catch (error) {
        result.innerHTML = "<p>Unable to fetch weather data. Please try again.</p>";
    }
}