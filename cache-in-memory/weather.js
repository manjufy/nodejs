const weather = require('./weather-cache').fetch;

weather().then(data => {
    console.log(data);
})