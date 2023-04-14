const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");
    
    })

    app.post("/", function(req, res) {
        
        const query = req.body.cityName;
        const apiKey = "{openWeatherMap ApiKey}"
        const units = "imperial"
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" +query+ "&appid=" + apiKey + "&units=" + units;
        https.get(url, function(response) {
        console.log(response);
        console.log(response.statusCode);

        response.on("data", function(data) {
        const weatherData =JSON.parse(data);
        const temp = weatherData.main.temp;
        const feelsTemp = weatherData.main.feels_like;
        const locName = weatherData.name;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "https://openweathermap.org/img/wn/" +icon+".png";

        console.log(temp,feelsTemp, description, locName);
        const responsString = "The temperature in " + locName + " is " + temp + " degress F, it feels like " + feelsTemp + " degrees F, and the weather us currently " + description +".";
        
        res.write("<h1>"+responsString+"</h1>");
        res.write("<img src=" + imageURL +">");
        res.send();

        });
    });
    })

app.listen(3000, function() {
    console.log("Server running on port: 3000.");
})