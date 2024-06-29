import express from "express";y
let router = express.Router();
let homecontroller = require('../controllers/home_controller.js');



console.log('router is working fine');
router.get('/', homecontroller.home);
router.use('/users',require('./users'));

module.exports=router;