const express = require('express');
const fs = require("fs")
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
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
//api to add new tour
app.post('/api/v1/tours', (req, res)=>{
  const newTour = req.body;
  tours.push(newTour);
  fs.writeFileSync(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours));
  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour
    }
  });
})
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
