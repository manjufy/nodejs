const express = require('express')
const app = express()
const port = 3000
const weather = require('./weather-cache').fetch;

app.get('/', async (req, res) => {
    const todaysWeather = await weather();
    return res.json(todaysWeather);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))