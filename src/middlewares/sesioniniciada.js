function sesioniniciada(req, res, next){
    if (req.session.datosusuario){
        res.locals.hayunusuario = req.session.datosusuario
    
    }
    next()
}

module.exports = sesioniniciada;