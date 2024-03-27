const express=require('express')
const router = express.Router()
const Journal = require('./journalSchema')
const cors = require('cors')

router.use(cors())
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

//GET method by id
router.get('/journal/:journalID', async(req,res)=>{
    try{
        //const specificJournal= await Journal.findById(req.params.journalID)
        const specificJournal = await Journal.findById({_id:req.params.journalID})
        res.json(specificJournal)
    }
    catch(err){
        res.status(200).json({msg:err.message})
    }
})

//DELETE method
router.delete('/journal/:journalID', async(req,res)=>{
    try{
        const removedJournal = await Journal.deleteOne({
        _id:req.params.journalID
        //parameters
    });
    res.json(removedJournal)
}
    catch(err){
        res.json({msg:err.message})
    }
})


//PATCH method
router.patch('/journal/:journalID', async(req,res)=>{
    try{
        const updatedJournal = await Journal.updateOne(
            {_id:req.params.journalID},
            {$set:{title:req.body.title}
      
        }
        )
        res.json(updatedJournal)
    }
    catch(err){
        res.json({msg:err.message})
    }
})

//HTTP methods //HTTPS

//GET method - Retrive data from the database
//POST method - Send data to the server/database
//HEAD method - its like GET but without a body
//PUT method - updating data
//DELETE method - deletes a specific resource
//PATCH method - applies partial modifications
//OPTIONS method - describes the comms. options


module.exports= router;