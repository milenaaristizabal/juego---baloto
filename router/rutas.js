const express = require('express');
const router = express.Router();

router.get('/Hv1', (req, res) => {
    res.render('Hv1')     
  })
  
  router.get('/Hv2', (req, res) => {
    res.render('Hv2')       
  })

  router.get('/Hv3', (req, res) => {
    // res.send('hello')
    res.render('Hv3')
  })

  module.exports = router;