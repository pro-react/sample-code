import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index',{message:'Hello Wosrld'});
});

app.listen(3000, ()=>{
  console.log('Express app listening on port 3000');
});
