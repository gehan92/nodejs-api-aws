const express = require('express');
const app = express();
const Cors = require('cors')
const routes = require('./src/routes');

app.use(express.json());
app.use(Cors());
app.use('/',routes)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listing to port ${port}`);
})




