const express = require("express");

const bodyParser = require("body-parser");

const translate = require('@vitalets/google-translate-api');

const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());




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
