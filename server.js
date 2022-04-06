require('dotenv').config;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const drinks = require('./models/drinks.js')