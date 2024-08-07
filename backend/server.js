const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./db');
const router = require('./routes');

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get('/health', (req, res) => {
    res.send({ message: 'server is working!' });
});

app.use(router);

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
  
