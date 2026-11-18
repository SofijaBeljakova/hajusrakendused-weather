const CITY = "Tallinn";

const URL = `https://wttr.in/${CITY}?format=j1`;

async function getTallinnWeather() {
    console.log("Loading weather in " + CITY + "...");

    try {
        
        const response = await fetch(URL);
        
        if (!response.ok) {
            console.log("Error!");
            return;
        }

        const data = await response.json();

                const current = data.current_condition[0];
        const temp = current.temp_C;
        const desc = current.weatherDesc[0].value;
        const wind = current.windspeedKmph;
        const humidity = current.humidity;

        
        console.log("----------------------------------------");
        console.log("Weather in Tallinn for today:");
        console.log("Temp: " + temp + " °C");
        console.log("Desc: " + desc);
        console.log("Wind: " + wind + " km/h");
        console.log("Humidity: " + humidity + "%");
        console.log("----------------------------------------");

    } catch (error) {
        console.log("Error:", error.message);
    }
}


getTallinnWeather();