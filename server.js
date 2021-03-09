const express=require('express');
const app=express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
res.render('./index.ejs');
});
app.post('/submit', (req, res) => {
   res.render('./test_submitted.ejs')
});
app.get('/test',(req,res)=>{
  console.log("full screen clicked");
  res.render('./main.ejs');
});
app.listen(8000,()=>{
  console.log("server started");
});
