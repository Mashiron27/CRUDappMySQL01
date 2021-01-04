const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./connection');
const SensorsRoutes = require('./routes/sensors');

var app = express();
app.use(bodyParser.json());

app.use('/sensors', SensorsRoutes);



app.listen(3000);