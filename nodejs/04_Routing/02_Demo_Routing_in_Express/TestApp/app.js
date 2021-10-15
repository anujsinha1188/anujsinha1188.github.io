const express = require('express');
const route = require('./Routes/routing');

const app = express();
app.use('/', route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
