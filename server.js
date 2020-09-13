const express = require('express')
const app = express()
const session = require('express-session');
const ejs = require('ejs');
const mongoose = require('mongoose');

app.use(session({
    secret: 'Secrets are no fun unless they are for everyone',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

require('./server/config/mongoose')

app.use(express.static(__dirname + "/public/dist/public"))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({extended: true}));




require('./server/config/routes')(app)

app.listen(8000, () => console.log("listening on port 8000"))