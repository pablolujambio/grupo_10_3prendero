
function admin(req, res, next){
    //Valido que el usuario logeado es el admin, si es admin lo next, sino lo envío a la home
    if(req.session.datosusuario.username != 'Emilio27'){
        res.redirect('/')
    }else {
        next()
    }

}

module.exports = admin