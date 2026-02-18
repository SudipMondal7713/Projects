const apiKey = "e7a96c4fcc681a1e850ff49bf4efbc5a"; // 👈 Paste your API key here

async function getWeather() {
    const city = document.getElementById("city").value;

    if(city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if(data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = data.main.humidity + "%";
        document.getElementById("wind").innerText = data.wind.speed + " km/h";

    } catch(error) {
        alert("Error fetching data");
    }
}
