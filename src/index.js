const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

const route = require('./routes/index');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template Engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
app.engine('hbs', handlebars({
  extname: '.hbs'
}));

//Home, search, contact

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});