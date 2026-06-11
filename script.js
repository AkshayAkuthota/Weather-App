const apiKey = "d4118155ec5ff5a1ec3a95794da81270";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod != 200){
            document.getElementById("weatherCard").innerHTML =
            "<h3>City Not Found</h3>";
            return;
        }

        document.getElementById("weatherCard").innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

            <h2>${data.name}</h2>

            <h1>${Math.round(data.main.temp)}°C</h1>

            <p><strong>${data.weather[0].main}</strong></p>

            <p>💧 Humidity: ${data.main.humidity}%</p>

            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>

            <p>🌡 Feels Like: ${Math.round(data.main.feels_like)}°C</p>
        `;

    } catch(error) {
        console.log(error);

        document.getElementById("weatherCard").innerHTML =
        "<h3>Error fetching weather data</h3>";
    }
}