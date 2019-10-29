const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const app = express();

//DB config
const db =  require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db,{useNewUrlParser: true })
    .then(() => console.log("Mongo DB Connected"))
    .catch(err => console.login(err));

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Bodyparser
app.use(express.urlencoded({extend:false});

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server started on port 5000'));

mongodb+srv://rraj7:<password>@cluster0-pbudk.mongodb.net/test?retryWrites=true&w=majority