const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const es6Renderer = require('express-es6-template-engine');

//const bodyParser = require('body-parser'); // No longer Required
//const mysql = require('mysql'); // Not required -> moved to userController

require('dotenv').config();

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: "*" }});
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true })); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use("/public", express.static('./public/'));


// Templating Engine
app.engine('html', es6Renderer);
app.set('view engine', 'html');

const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
// app.engine('html', es6Renderer);
// app.set('view engine', 'html');

// You don't need the connection here as we have it in userController
// let connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });

app.use((req,res,next) =>{
    req.io = io;
    return next();
});

app.set('socketio', io);

const routes = require('./server/routes/user');
app.use('/', routes);


app.listen(port,'192.168.11.172', () => console.log(`Listening on port ${port}`));