let express= require('express');
let router= express.Router();
let controller = require('../controllers/user_controller');
console.log('user router is working fine');

router.get('/',controller.home);



module.exports= router;