const express = require('express');
const router = express.Router();
const {OK}= require('http-status-codes')

router.get('/health', (req,res) => { 
  res.status(OK).send({message:"Flow-Money-Backend is UP!!!"});
})

module.exports = router;