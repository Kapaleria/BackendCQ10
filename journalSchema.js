const mongoose = require ('mongoose')
const journalSchema = mongoose.Schema({
    // date:Date,
    // title:String,
    // notes:String,
    date:{
        type:Date,
        default:Date.now
    },
    title:{
        type:String,
        required:true
    },
    notes:{
        type:String,
    }  
})
const journal=mongoose.model('journal',journalSchema)
module.exports=journal