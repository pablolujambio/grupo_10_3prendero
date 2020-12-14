function sesioniniciada(req, res, next){
    if (req.session.datosusuario){
        console.log(req.session.datosusuario)
    }else{
        console.log("No hay una sesion iniciada")
    }
    next()
}

module.exports = sesioniniciada;