const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anupjaryal:mongodb660870@cluster0.fm1quea.mongodb.net/booklibrary?retryWrites=true&w=majority',
{
   useNewUrlParser: true,
   useUnifiedTopology: true

}
).then(() => console.warn('Mongo connected'))
.catch((err) => console.warn(err, 'not able to connect') );

app.get('/',async function(req, res){
    res.send('hi ');
  });
  

app.listen(5000);