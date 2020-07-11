const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

app.get('/', (req, res) => {
  res.send('An alligator approaches!');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

