const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const mysql = require('mysql');



app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

const PORT = process.env.PORT || 8080

var config =
{
    host: 'project659.c5lam8sfki7y.us-east-1.rds.amazonaws.com',
    user: 'master',
    password: 'password',  
    database:'ist659'  
};

const conn =  mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
    }
});

app.get("/",(req,res)=>{
    res.json({message:"Yayyyyyyyyyyy MKC"})
})

function queryDatabase(){
    conn.query('DROP TABLE IF EXISTS inventory;', function (err, results, fields) { 
        if (err) throw err; 
        console.log('Dropped inventory table if existed.');
    })
        conn.query('CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);', 
            function (err, results, fields) {
                if (err) throw err;
        console.log('Created inventory table.');
    })
    conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['banana', 150], 
            function (err, results, fields) {
                if (err) throw err;
        else console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['orange', 154], 
            function (err, results, fields) {
                if (err) throw err;
        console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['apple', 100], 
    function (err, results, fields) {
                if (err) throw err;
        console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.end(function (err) { 
    if (err) throw err;
    else  console.log('Done.') 
    });
};


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
