const express = require('express')
const router = express.Router()
const User = require('../models/user'); 
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
  res.send('from api route');
})
router.post('/register', (req,res)=>{
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser)=>{
    if(error){
      console.log(error);
    }else{
      res.status(200).send(registeredUser);
    }
  })
})

router.post('/login', (req, res)=>{
  let userData = req.body;

  User.findOne({email: userData.email},(error, user)=>{
    if(error){
       console.log(error);
     } else{

        if(!user){
          res.status(401).send('Invalid Email');
        }
        else
        {
            if(user.password !== userData.password)
            {
              res.status(401).send('Invalid Password');
             }else{
              res.status(200).send(user);
             }
        }
    }
  })
})
router.get('/events', (req, res)=>{
  let events = [
    {
      "_id": "1",
      "name": "Event 1",
      "description": "This is event1.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "2",
      "name": "Event 2",
      "description": "This is event2.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "3",
      "name": "Event 3",
      "description": "This is event3.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "4",
      "name": "Event 4",
      "description": "This is event4.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "5",
      "name": "Event 5",
      "description": "This is event5.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "6",
      "name": "Event 6",
      "description": "This is event6.This will available for all.",
      "date":"2019-01-01"
    }
  ]
  res.json(events);
})
router.get('/special', (req, res)=>{
  let events = [
    {
      "_id": "1",
      "name": "SpecialEvent 1",
      "description": "This is event1.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "2",
      "name": "SpecialEvent 2",
      "description": "This is event2.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "3",
      "name": "SpecialEvent 3",
      "description": "This is event3.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "4",
      "name": "SpecialEvent 4",
      "description": "This is event4.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "5",
      "name": "SpecialEvent 5",
      "description": "This is event5.This will available for all.",
      "date":"2019-01-01"
    },
    {
      "_id": "6",
      "name": "SpecialEvent 6",
      "description": "This is event6.This will available for all.",
      "date":"2019-01-01"
    }
  ]
  res.json(events);
})
module.exports = router
