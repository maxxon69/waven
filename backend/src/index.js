require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:3001',]
}));


const port = process.env.PORT || 3000;
app.use(bodyParser.json());
const indexRouter = require('./routers/index');

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('DB Connected')).catch(console.error);

app.use(morgan('dev'));
app.use('/', indexRouter);
app.use(express.static(__dirname + '/static'));
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



