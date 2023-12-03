const apiKey = "f681a4e53ed61ea816affb8785ae2140";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=patna&units=metric";

async function checkWeather(){
    const response = await fetch (apiUrl + `&${apiKey}`);
    var data = await response.json();
    console.log(data);
}