const express= require('express');
const bodyParser = require('body-parser');
const app = express();
const mail = require('./src/nodemailer/send_email');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

const router = express.Router();
app.use(router);

//DB connection
require('./src/database/connection');
require('./src/bootstrap')();

app.listen(3500, ()=>{
    console.log('Server Started');
});
