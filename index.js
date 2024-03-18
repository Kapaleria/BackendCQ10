//create an express app
const express =require('express')
const app = express();
require('dotenv/config') //SECURITY PURPOSES

//ROUTES
app.get('/',(req,res)=>{
    res.send("I am here")
})
app.listen(process.env.PORT, ()=>{console.log('app running at 4000')})