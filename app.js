const express = require('express');
const app= express();
const path = require('path')





const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use(express.urlencoded({extended: false}));
app.use(express.json())


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);








app.listen(3000, function() {
    console.log('servidor esta funcionando')
})