const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
let port = 3000;
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

//Middleware
// app.use(auth);
// app.use('/posts', () => {
//     console.log('This is a middelware');
// });
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('yes, it works!');
});


//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log('Connected to DB!')
);
//Lisiting to server
app.listen(port, function(){
    console.log("Listening on port " + port);
});

module.exports = app; //for test purpose