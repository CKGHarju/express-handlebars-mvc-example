/*
Steps to setup project from scratch
touch index.js
npm init -y
npx eslint --init
git init (if you want it as repo)
touch .gitignore (if you want it as repo)
npm i express
npm i morgan
npm i express-handlebars
*/

const express = require('express');
const morgan = require('morgan');
const router = require('./routes/routes');
const exphbs = require('express-handlebars');

const app = express();
const port = 3030;

//Config
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(morgan('tiny'))
app.use(express.static('public'));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
