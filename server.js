const express = require('express');
const app = express();
app.use(express.json());
const routes = require('./src/routes');


app.use('/',routes)



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listing to port ${port}`);
})




