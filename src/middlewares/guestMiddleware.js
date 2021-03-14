module.exports = (req, res, next) => {
    
    if (req.session.datosusuario == undefined) {
       
        next();

    } else {
     
        res.redirect("/users/profile/" + req.session.datosusuario.id);

    }
    
}