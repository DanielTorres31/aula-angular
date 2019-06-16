const express = require('express');
const usersRouter = require('./src/routes/UsersRoutes');
const bodyParser = require('body-parser');
let cors = require('cors');
let app = express()
 
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', usersRouter);

const appPort = 3001;
app.listen(appPort, function (err) {
    if (err) {
      throw err
    }
    console.log(`Server started on port ${appPort}`)
});

module.exports = app;
