
# CityWeatherChecker

This is a simple weather checker form to check the temperature and the weather for a city. 


## Authors

- [@carlogy](https://www.github.com/carlogy)


## Acknowledgements

 - [Awesome coding help](https://github.com/appbrewery)


 


## Installation

Install my-project with npm

```bash
  npm i body-parser
  npm i express
  cd my-project
```
    
## API Reference

#### Get all items

```https
  GET https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=
  update const apiKey in app.js  "{openWeatherMap ApiKey}" with your  open openWeatherMap ApiKey
```

Makes a call to openWeatherMap.org to get the weather for given city.

