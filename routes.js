const express=require('express')
const router = express.Router()
const Journal = require('./journalSchema')

router.get('/', (req,res)=>{
    res.send('Hello')
})
//POST method
router.post('/journal', async(req,res)=>{
     const journal  = new Journal({
        title:req.body.title,
        notes:req.body.notes})
        try{
            const savedJournals= await journal.save()
         res.json(savedJournals)
     }
     catch(err){
             res.json({msg:err.message})
     }

})

//GET method
router.get('/journals', async(req,res)=>{
    try{
        const allJournals= await Journal.find()
        res.json(allJournals)
    }
    catch(err){
        res.status(200).json({msg:err.message})
    }
})



module.exports= router;