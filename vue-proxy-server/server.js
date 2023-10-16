const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 443;
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));


app.get('/get', (req, res) => {
   axios.get('https://taylorswiftapi.onrender.com/get')
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    console.log(error);
  });
});


app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
