///////////////////////////
// DEPENDENCIES
///////////////////////////
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

///////////////////////////
// DATABASE
///////////////////////////
const drinks = require('./models/drinks.js')
const food = require('./models/foods.js')


///////////////////////////
// MIDDLEWARE
///////////////////////////
app.use('/static', express.static("public"))

///////////////////////////
// ROUTES
///////////////////////////

// root route redirects to '/drinks/'
app.get('/', (req, res) => {
	res.redirect('/drinks/')
})

app.get('/drinks/', (req, res) => {
	res.render('drinks_index.ejs', {drinks : drinks})
})

app.get('/drinks/:id', (req, res) => {
	const id = req.params.id
	res.render('drinks_show.ejs', {drinksId: drinks[id]})
})

app.get('/foods/', (req, res) => {
	res.render('food_index.ejs', {foods: food})
})

app.get('/foods/:id', (req, res) => {
	const id = req.params.id
	res.render('food_show.ejs', {foodsId: foods[id]})
})

app.listen(PORT, () => {
	console.log(`Port ${PORT} has started`)
})