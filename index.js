const port=4000;
import express from "express";
const app= express();


// use express router
// app.use('/', require('./routes'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.set('views', './views');
const db=import('./config/mongoose.js');
const Contact=import('./models/contact.js');

var usercontroller= import('./controllers/home_controller.js');


let Contactlist=[
    {
        description:"Annual report submission deadline",
        category:"personal",
        due_date:"22-12-2023"
    }
];

app.post('/create_contact',function(req,res){
    Contact.create({
        description:req.body.description,
        category:req.body.category,
        due_date:req.body.due_date,
    }).then(function(con){
        console.log('1212',con);
        res.redirect('back');
    }).catch(function(err){
        console.log("error aa gya bro!",err);
        return;
    })
})

app.get('/',async function(req,res){
    

    // Contact.find({}).then((contacts)=>{
    //     return res.render('home',{
    //         name:"I am iron man",contact_list:Contactlist
    //     });
    // }).catch((err)=>{
    //     console.log('error in fetching contacts');
    // })
    // if(!req.body.category){
    //     console.log("category is required");
    //     return;
    // }
    try{
        console.log("hello");
        const contacts= await Contact.find({});
        return res.render('home',{
            name:"I am iron man",todotask:contacts
        });
    } catch(err){
        console.log(err);
        return ;
    }
    });

app.get('/delete-contact',function(req,res){
    let id=req.query.checkbox;
    var del=req.body['checkbox'];
    // console.log(id);
    Contact.findByIdAndDelete(id).then(res.redirect('back')).catch(function(err){
        console.log(err);
        return;
    })
});
app.listen(port,function(err){
    if(err){
        console.log("Error aa gya bhai",err);
        return;
    }
    console.log(`server is running on port: ${port}`);
});
