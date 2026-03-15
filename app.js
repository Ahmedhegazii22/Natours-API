const express = require('express');
const fs = require("fs")
const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours.json`));
//api to get all tours
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json(
    {
      status: 'success',
      results: tours.length,
      data: {
        tours: tours
      }
    }
  );
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
