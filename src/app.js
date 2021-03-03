const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const mantenerselogueado = require ('./middlewares/mantenerselogueado')


const app = express();

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const adminRouter = require('./routes/admin');
const ApiRouter = require('./routes/api');
const session = require("express-session");
const sesioniniciadamiddle = require("./middlewares/sesioniniciada");

app.use(session({secret: "hola"}));
app.use(sesioniniciadamiddle);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(mantenerselogueado);
app.use(cors());





app.use(express.static(path.join(__dirname, '../public')));

// Cuchame, Express... Vas a usar de motor de vista EJS...
app.set('view engine', 'ejs');
// Cuchame, Express.. Hay una carpeta que tiene todas las vistas. Es esta...
app.set('views', path.join(__dirname, 'views'));


app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);
app.use('/api', ApiRouter);

app.listen(process.env.PORT || 3001, function() {
    console.log("El servidor está corriendo en el puerto 3001");
    console.log("-------------------");
    console.log("http://localhost:3001");
})