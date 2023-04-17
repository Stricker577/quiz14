//require modules
const express = require('express');
const mysql = require('mysql2');

//create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'M*Starwars3173l',
    database : 'demos'
  });

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM stories', (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error executing the query');
        } else {
            res.send(results);
        }
    });
});


app.listen(port, host, ()=> {
    console.log('Server us running in port', port)
})
