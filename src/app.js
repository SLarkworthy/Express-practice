const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for express config
const directoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(directoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Sarah'
    })
    //render tells express to look in views
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Sarah'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Here is a helpful message',
        title: 'Help',
        name: 'Sarah'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    res.send({
        forecast: "It is snowing",
        location: "Philadelphia",
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query)
    res.send({
        products: "",
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        message: 'Help article not found',
        title: 'Help',
        name: 'Sarah'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        message: 'Page not found',
        title: 'Help',
        name: 'Sarah'
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})