'use strict';
let defaultPortNum = 3000;
const express = require('express');
const app = express();
let MongoClient = require('mongodb').MongoClient;


let url = 'mongodb://localhost:27017/epam'

function checkDatabaseHealth(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log(err);
      return;
    }
    let adminDb = db.admin();

    adminDb.serverStatus(function(err, info) {
      if (err) {
        console.log(err);
        return;
      }
      res.json(info.version);
      db.close();
    });
  });
}


app.get('/heartbeat', checkDatabaseHealth);

app.listen(portNum, () => {
  console.log(`listening on port:${portNum}`);
});


