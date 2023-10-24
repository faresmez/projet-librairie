const express = require('express');
const app = express();
const port = 3000;

const livresRoutes = require('./routes/livresRoutes');

app.use(express.json());

app.use('/', livresRoutes);

app.listen(port, () => {
  console.log(`port ${port}`);
});
