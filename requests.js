import express from 'express';
import { urlencoded } from 'body-parser';
const app = express();

app.use(urlencoded({ extended: true })); 

app.post('/formData', (req, res) => {
  res.send(`Data from form :${req.body.name} ${req.body.email}${req.body.message}.`);
});

const port = 5500;

app.listen(port, () => {
  console.log(`Your server is running on port${port}`);
});