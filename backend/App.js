const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const cors = require('cors')
app.use(bodyParser.json())

app.use(cors())

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/User")
    .then(res => { console.log("connected") })
mongoose.connection.on('err', err => console.log(err))
// require('./Model/Sales');


app.use('/', require('./router/index'))
app.listen(4200, () => {console.log('server running on 4200')})