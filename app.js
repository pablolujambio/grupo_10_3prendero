const express = require('express');
const app= express();
const path = require('path')

app.use( express.static(path.join(__dirname, "./public")))


app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, "./views/index.html"))
})

app.get('/detalle', function(req, res){
    res.sendFile(path.join(__dirname, "./views/productDetail.html"))
})

app.get('/carrito', function(req, res){
    res.sendFile(path.join(__dirname, "./views/productCart.html"))
})

app.listen(3000, function() {
    console.log('servidor esta funcionando')
})