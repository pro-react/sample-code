import fs from 'fs';
import express from 'express';

const app = express();

app.set('views', './')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const contacts = JSON.parse(fs.readFileSync('./contacts.json', 'utf8'));

app.get('/', (request, response) => {
  response.render('index',{
    content: 'Hello'
  });
});

app.listen(3000, ()=>{
  console.log('Express app listening on port 3000');
});
