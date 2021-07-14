const express = require("express");

const bodyParser = require("body-parser");

const translate = require('@vitalets/google-translate-api');

const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());




app.get('/speechtranslator',(req,res) => {
  res.render('speechtranslator',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:""})
})

app.post('/speechtranslator',(req,res) => {

  console.log(req.body.speech)

  translate(req.body.speech, {to: req.body.language}).then(response => {
    res.render('speechtranslator',{title:"Speech Translator Online to Multiple Languages - Free Media Tools",translated:response.text})
}).catch(err => {
    console.error(err);
});

})


app.listen(3000, function() {
  console.log("App is listening on Port  3000.");
});
