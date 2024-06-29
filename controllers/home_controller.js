const Contact=require('../models/contact.js');



module.exports.home=function(req,res){
    return res.render('home',{
        title:  "Home"
    }
   
    );
}


// the syntax is 
// module.export.actionname = function(req, res){}
// where actionname is variable and is a medium through which router can access controller