const express = require("express");

const bodyParser = require("body-parser");

const translate = require('@vitalets/google-translate-api');

const app = express();

var mongoose = require("mongoose")
const bcrypt=require('bcrypt')

app.set('view engine', 'ejs');
app.use(express.static('public'))



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
   
});


const db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.get("/sign_up",(req,res)=>{
  res.set({
      "Allow-access-Allow-Origin": '*'
  })
  return res.redirect('sign.html');
})


app.post("/sign_up", async (req,res)=>{
  try{
    const salt=await bcrypt.genSalt()
    const hashedPassword=await bcrypt.hash(req.body.password, salt)
    console.log(salt)
    console.log(hashedPassword)
  
     const name = req.body.name;
     var email = req.body.email;
     var role = req.body.role;
     var password = req.body.hashedPassword;

     var data = {
      "name": name,
      "email" : email,
      "role":role,
      "password" : hashedPassword
  
  } 
  }catch{
    res.status(500).send()
  }
db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Recorded Successfully Go back and login");
    });

    return res.redirect('success.html')

});








app.get('/home',(req,res) => {
  res.render('home')
})




app.get('/Symptoms',(req,res) => {
  res.render('Symptoms',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Symptoms',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Symptoms',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})


app.get('/Pain',(req,res) => {
  res.render('Pain',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Pain',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Pain',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})

app.get('/Dental',(req,res) => {
  res.render('Dental',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Dental',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Dental',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})

app.get('/Diagnosis',(req,res) => {
  res.render('Diagnosis',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Diagnosis',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Diagnosis',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})

app.get('/Medications',(req,res) => {
  res.render('Medications',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Medications',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Medications',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})

app.get('/Radiology',(req,res) => {
  res.render('Radiology',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Radiology',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Radiology',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})

app.get('/Vaccins',(req,res) => {
  res.render('Vaccins',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Vaccins',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Vaccins',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})

app.get('/Gynecology',(req,res) => {
  res.render('Gynecology',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Gynecology',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Gynecology',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})

app.get('/GeneralTerms',(req,res) => {
  res.render('GeneralTerms',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/GeneralTerms',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('GeneralTerms',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})
app.get('/Covid',(req,res) => {
  res.render('Covid',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Covid',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Covid',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})

app.get('/Examination',(req,res) => {
  res.render('Examination',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Examination',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Examination',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})

app.get('/Surgery',(req,res) => {
  res.render('Surgery',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/Surgery',(req,res) => {

  console.log(req.body.speech)
 translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('Surgery',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});
})



app.listen(3000, function() {
  console.log("App is listening on Port  3000.");
});
