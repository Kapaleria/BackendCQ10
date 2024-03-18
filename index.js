//create an express app
const express =require('express')
const app = express();

//ROUTES
app.get('/',(req,res)=>{
    res.send("I am here")
})




app.listen(4000, ()=>{console.log('app running at 4000')})