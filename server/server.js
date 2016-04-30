const express = require('express');
const app = express();

if (!module.parent) {
  app.listen(1234);
  console.log('1234 server started!');
}

app.get('/test', (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
