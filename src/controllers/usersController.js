const fs =require("fs");
const path = require("path")


module.exports = {
    register: function(req, res) {
        res.render('users/register')
    },
    create: function (req, res) {
      usuarios.push(req.body)
      fs.writeFileSync(path.join(__dirname, "../database/users.json"), JSON.stringify(usuarios));
 },
    login: function(req, res) {
        res.render('users/login')
    }
}