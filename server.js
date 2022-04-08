require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const drinks = require('./models/drinks.js')

app.get('/drinks/', (req, res) => {
	res.render('drinks_index.ejs', {allDrinks : drinks})
})

app.listen(PORT, () => {
	console.log(`Port ${PORT} has started`)
})