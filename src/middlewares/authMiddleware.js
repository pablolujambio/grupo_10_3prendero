module.exports = (req, res, next) => {
    if (req.session.datosusuario != undefined) {
        next();
    }
    return res.redirect('/users/login');
}