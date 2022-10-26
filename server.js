const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const dotenv = require('dotenv');
const routes = require('./controllers');
const sequelize = require('./config/connection');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// defaults to index.html VVV
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});