//create an express app
const express =require('express')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
const app = express();
require('dotenv/config') //security purposes

const routes=require('./routes')
app.use(bodyParser.json())
app.use('/', routes)

//CONNECT TO THE DATABASE
mongoose.connect(process.env.DBLINK)
.then(() => console.log('Connected successfully to the Database'))
.catch((err) => { console.error(err); });

//ROUTES
app.get('/',(req,res)=>{
    res.send("I am here")})


app.listen(process.env.PORT, ()=>{console.log('app running')})