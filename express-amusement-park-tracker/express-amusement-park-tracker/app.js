const express = require('express');
const morgan = require('morgan');
const {environment} = require('./config');
const app = express();
app.set("view engine", "pug");

const routes = require('./routes.js');

app.use(morgan('dev'));
app.use(routes);

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));


app.use((req, res, next) =>{
  const err = new Error("The requested page couldn\'t be found.");
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  if (environment === 'production' || environment === 'test'){
    //log the error to database
  } else {
    console.error(err);
  }
  next(err);
});


app.use((err, req, res, next)=>{
  if(err.status===404){
    res.status(404);
    res.render('page-not-found', {title: "Page Not Found"});
  } else {
    next(err);

  }
})

app.use((err, req, res, next)=>{
  res.status=(err.status || 500) ;
  const prod = process.env.NODE_ENV === 'production';
  res.render('error', {
    title: "Server Error",
    message: prod ? null : err.message,
    stack: prod ? null : err.stack
  });
});





module.exports = app;
