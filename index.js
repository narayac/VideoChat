const express = require('express');
const $ = require('jquery');
const app = express();
const path = require('path');

//setting

app.set('port', process.env.PORT || 3000);


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static(path.join(__dirname,'public')));



app.get('/',(req,res)=>{ 
    res.render('home')
});

app.listen(app.get('port'),()=>{
console.log('Server Started ', app.get('port'));
});
