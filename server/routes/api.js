const express = require('express')
const router = express.Router()

const mongoose = require('mongoose');
const db = "mongodb://userimita:password1@ds223609.mlab.com:23609/eventhubdatabase";
mongoose.connect(db, err=>{
  if(err){
    console.log("Error!"+err);
  }else{
    console.log("Connected to mongodb");
  }
})
router.get('/', (req, res)=>{
  res.send('from api route')
})
module.exports = router
