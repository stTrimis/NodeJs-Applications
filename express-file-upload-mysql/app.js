const express = require('express');
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
const mysql = require('mysql');



const app = express();
const port = process.env.PORT ||5000;

app.use(fileUpload());

//Static FIles
app.use(express.static('public'));
app.use(express.static('upload'));


//Templating engine

const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');


//COnnection Pool

const pool = mysql.createPool({
    host:     'localhost',
    user:     'root',
    password: '2022',
    database: 'user'
})

// pool.getConnection((err,connection) => {
//     if(err) throw err; //not connected

//     console.log("Connected");
// })





app.get('', (req,res) => {
    res.render('index');
    
});







app.post('', (req,res) => {
    let sampleFile;
    let uploadPath;
    
    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('No Files were uploaded.');
    }

    // name of the input is sampleFile
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/upload/' + sampleFile.name;
    console.log(sampleFile);

    //user mv() to place file on the server

    sampleFile.mv(uploadPath, function(err) {
        if(err) return res.status(500).send(err);


        res.send('File uploaded!');

    });







});



app.post



app.listen(port, ()=> console.log("Listening on port"))