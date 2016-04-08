import express from 'express';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/', (request, response) => {
  response.render('index',{message:'Hello World (from express)'});
});

app.listen(3000, ()=>{
  console.log('Express app listening on port 3000');
});
